import { CheckWrapper, InputContainer, SelectWrapper, FormTitleStyled } from "./input.styled";
import { EyeIcon, CheckIcon } from '../assets/libs/svg/svg' 
import { useState, useEffect } from "react";
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import axios from 'axios';
import { SelectUnReveal } from "../assets/libs/svg/svg";

const animatedComponents = makeAnimated();

export const FormTitle = ({
titleHeight,
titleHeaderFontSize,
titleColor,
titleHeaderContent,
titleInfoColor,
titleInfoContent
}) => (
    <FormTitleStyled 
    titleHeight = {titleHeight}
    titleInfoColor = {titleInfoColor}
    titleHeader = {titleHeaderFontSize}
    titleColor = {titleColor}
    >
        <span

        >
            {titleHeaderContent}
        </span>
        <p
       
        >
            {titleInfoContent}
        </p>
    </FormTitleStyled>
)

export const Input = ({
marginBottom,
width,
labelFontSize,
labelColor,
labelTitle,
inputBG,
inputHeight,
borderOnFocus,
borderColorOnFocus,
type,
value,
onChange,
placeholder,
disabled

}) => (
    <InputContainer
    marginBottom = {marginBottom}
    width = {width}
    >
        <label
        labelFontSize = {labelFontSize}
        labelColor = {labelColor}
        >
        {labelTitle}
        </label>

        <input 
        inputBG = {inputBG}
        inputHeight = {inputHeight}
        borderOnFocus = {borderOnFocus}
        borderColorOnFocus = {borderColorOnFocus}
        type = {type}
        value = {value}
        onChange = {onChange}
        placeholder = {placeholder}
        disabled = {disabled}
        />
    </InputContainer>
)

export const PasswordInput = ({
marginBottom,
width,
labelFontSize,
labelColor,
labelTitle,
inputBG,
inputHeight,
borderOnFocus,
borderColorOnFocus,
value,
onChange,
placeholder,
defaultReveal,
disabled

}) => {
    const [visible, setVisible] = useState(false);
    return(
        <InputContainer
        marginBottom = {marginBottom}
        width = {width}
        >
            <label
            labelFontSize = {labelFontSize}
            labelColor = {labelColor}
            >
            {labelTitle}
            </label>

            <input 
            inputBG = {inputBG}
            inputHeight = {inputHeight}
            borderOnFocus = {borderOnFocus}
            borderColorOnFocus = {borderColorOnFocus}
            type = {visible ? 'text' : 'password'}
            value = {value}
            onChange = {onChange}
            placeholder = {placeholder}
            defaultReveal = {defaultReveal}
            disabled = {disabled}
            />
            {visible ? (
            <EyeIcon id='unreveal'
            onReveal={() => setVisible(!visible)} 
            />
          ) : (
            <EyeIcon id=''
            onReveal={() => setVisible(!visible)} 
            />
          )}
            
        </InputContainer>
    )
}


export const SelectInput = ({
    options,
    placeholder,
    leftIcon,
    rightIcon,
    onChange,
    value,
    labelName,
    optionValue,
    defaultValue,
    inputWrapper,
    disabled,
    labelColor,
    labelFontSize,
    labelTitle,
    selectBG,
    selectHeight, 
    marginBottom,
    width,
    authName
  }) => {
    


    const[reveal, setReveal] =useState('')
    return (
        <SelectWrapper
        marginBottom = {marginBottom}
        width = {width}
        >
            <label
            labelFontSize = {labelFontSize}
            labelColor = {labelColor}
            >
            {labelTitle}
            </label>
            <select
            required
            onClick={()=>setReveal(!reveal)}
            onBlur={()=>setReveal('')}
            selectBG = {selectBG}
            selectHeight = {selectHeight}
            disabled = {disabled}
            onChange={(e) => onChange(e)}
            value={value}
            defaultValue={defaultValue}
            >
                <option value="">{placeholder}</option>
                {options?.length
                ? options.map((option) => (
                    <option
                        value={option.serialId || option?.locationId || option.equipmentTypeId }
                    >
                    { option.equipment || option.name ||option.status }
                    </option>
                    ))
                : ''}

            </select>
            <SelectUnReveal id = {reveal ? 'unoReverse' : ''} />


        </SelectWrapper>    
    );
};
  




export const Check = ({
    labelColor,
    labelFontSize,
    labelTitle,
  }) => {
    

     const [check, setCheck] = useState(false);
    // const [id, setId] = useState('');

    // const CheckState = check ? 'check' : '';
    
    // const onCheck = () => {
    //     setId(CheckState)
    //     setCheck(!check)
    // }
    
    return(
        <CheckWrapper
        id= {check ? 'check' : ''}
        onClick = {() => setCheck(!check)}
        >
            <CheckIcon />
            <label
            labelFontSize = {labelFontSize}
            labelColor = {labelColor}
            >
            {labelTitle}
            </label>
        </CheckWrapper>
    )
}



export const MultiSelect = () =>{ 

    const[options, setOptions] = useState([])


    useEffect(() =>{
        const fetchUsers = async() =>{
            const res = await axios.get('https://jsonplaceholder.typicode.com/users')
            const users = res.data
            setOptions(users.map(user => ({value: user.id, label: user.name})))

            console.log({value: res.data[0].id, label: res.data[0].name})

        }

        fetchUsers()
    }, [])

    console.log(options.map(option => [{value: option.id, label: option.name}]))

    
    return(
        <Select
        className="select"
        components = {animatedComponents}
        // onChange = {(e) => onChange(e.target.value)}
        // getOptionLabel = {options.map(option => option.id)} 
        // getOptionValue = {options.map(option => option.name)}
        isMulti 
        options = {options}
        isClearable = {true}
        isDisabled = {false}
        isSearchable = {true}
        isLoading = {false}
        closeMenuOnSelect = {false}
        placeholder = 'Options'
        />
    )
}