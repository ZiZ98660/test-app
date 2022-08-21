import styled from 'styled-components'




export const FormCtrl = styled.form`
    width: ${({formWidth}) => (formWidth ||`30.65em`)};
    height: ${({formHeight}) => (formHeight ||`auto`)};
    background: #FFFFFF;
    border-radius: 1.15em;
    padding: ${({padding}) => (padding ||`0.7em 1.5em`)}; 
    box-sizing: border-box;
    display: grid;

   

`


export const FormTitleStyled = styled.div`
    height: ${({titleHeight}) => (titleHeight || `fit-content`)};
    margin-bottom: 1.1em;
    span{
        font-weight: 700;
        font-size: ${({titleHeader}) => (titleHeader || `1.5em`)};
        letter-spacing: -0.025em;
        color: ${({titleColor}) => (titleColor || `#000000`)};
    }

    p{
        font-weight: 400;
        font-size: .8em;
        line-height: 0.05em;
        color: ${({titleInfoColor}) => (titleInfoColor || `#425466`)};
    }
`

export const InputContainer = styled.div`
    margin-bottom: ${({marginBottom}) => (marginBottom || `.6em`)};
    width: ${({width}) => (width || `100%`)};
    display: grid;



    label{
        font-weight: 400;
        font-size:${({labelFontSize}) => (labelFontSize || `.9em`)} ;
        line-height: 2em;
        color: ${({labelColor}) => (labelColor || `#454D54`)} ;    
    }
    input{
        background: ${({inputBG}) => (inputBG || `#FFFFFF`)};
        border: 1px solid #E3E6E8;
        border-radius: 0.5em;
        height: ${({inputHeight}) => (inputHeight || `2.6em`)}; 
        
        &:focus{
            border: ${({borderOnFocus}) => (borderOnFocus || `solid #000000 1.5px`)} ;
            border-color: ${({borderColorOnFocus}) => (borderColorOnFocus || `#000000`)}; 
        }

        &::-ms-reveal{
            display: ${({defaultReveal}) => defaultReveal ? 'none' : ''}
        }
    }

    &>div{
        position: absolute;
        place-self: center;
        margin-left: 20em;
        margin-top: 1.7em;
        cursor: pointer;
        transition: 250ms;
        
    }

    svg{
        width: .94em;
        height: .63em;
    }

`


export const SelectWrapper = styled.div`
    position: relative;
    margin-bottom: ${({marginBottom}) => (marginBottom || `.6em`)};
    width: ${({width}) => (width || `100%`)};
    display: grid;

    label{
        font-weight: 400;
        font-size:${({labelFontSize}) => (labelFontSize || `.9em`)} ;
        line-height: 2em;
        color: ${({labelColor}) => (labelColor || `#454D54`)} ;    
    }

    select{
        background: ${({selectBG}) => (selectBG || `#FFFFFF`)};
        border: 1px solid #E3E6E8;
        border-radius: 0.5em;
        height: ${({selectHeight}) => (selectHeight || `2.6em`)};
        font-size: 1.3em;
        color: #939698;
        appearance: none;
        display: grid;
        padding: 0 .8em 0 .8em;
        background-color: white !important;
        &:focus{
            border:1.5px solid #E3E6E8 !important;
        }
    }

    div{
        height: 1em;
        width: 1em;
        border-radius: 50%;
        display: grid;
        place-content: center;
        position: absolute;
        place-self: end;
        margin-bottom: 1em;
        margin-right: 1em;
        pointer-events: none;
        transition: 170ms;
    }
`


export const CheckWrapper = styled.div`
display: flex;
margin-top: 0.8em;
align-items: center;

&>div{

    height: 1.1em;
    width: 1.1em;
    background: #377DFF;
    color: white;
    border-radius: 0.17em;
    display: grid;
    place-items: center;
    cursor: pointer;
    transition: 250ms;
    svg{
        height: 0.7em;
        width: 0.7em;
        transition:250ms;
    }
}

label{
    font-weight: 400;
    font-size:${({labelFontSize}) => (labelFontSize || `.8em`)} ;
    line-height: 2em;
    color: ${({labelColor}) => (labelColor || `#0a1f44`)} ; 
    margin-left: ${({margLeft}) => (margLeft || `0.6em`)} ;
}
`














