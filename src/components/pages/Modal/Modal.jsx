import Button from '../../buttons/buttons'
import { FormTitle, SelectInput } from '../../input/input'
import { FormCtrl } from '../../input/input.styled'
import TableData from '../../styledTable/maintenance.json'
import { Grid, Slider } from '../../buttons/buttons.styled'
import { useState } from 'react'


import React from 'react'

const CustomModal = ({onClick, setShow, }) => {

  const[toggle, setToggle] = useState('');

  const[location, setLocation] =useState('')
  const[status, setStatus] = useState('')
  const[equipment, setEquipment] = useState('')
  const[equipmentType, setEquipmentType] = useState('')
  const[systemType, setSystemType] = useState('')

  

  const[submit, setSubmit] = useState(false)

  const onLocation = () => {
    setToggle('')
  }

  const onSystemType = () => {
    setToggle('toggle')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmit(true)
    setTimeout(() => {
      setSubmit(false)
      setEquipment('')
      setLocation('')
      setSystemType('')
      setEquipmentType('')
      setStatus('')
      setShow(false)
    }, 2600)
  }

  

  return (
        <FormCtrl  
        id = {toggle ? 'render' : 'rerender'}
        onSubmit = {handleSubmit}>
    <FormTitle titleHeaderContent= 'Maintenance Input' titleHeaderFontSize='26px'  />
    <Slider
    id={toggle ? 'toggle' : ''}
    >
        <div
         onClick={ onLocation } 
        >
          <div>
            Location
          </div>
        </div>
        <div
         onClick={ onSystemType } 
        >
          <div>
          System Type
          </div>
        </div>
      </Slider>
      {!toggle ? <SelectInput
      disabled={submit ? 'disabled' : ''} 
      onChange = {(e)=>setLocation(e.target.value)}
      labelTitle='Location' 
      placeholder= 'Location'  
      marginBottom='2.5em'
      options={TableData.Location}
      /> :
      <SelectInput
      disabled={submit ? 'disabled' : ''} 
      onChange = {toggle ? (e)=>setSystemType(e.target.value) : ''}
      labelTitle='System Type' 
      placeholder= 'System Type'  
      marginBottom='2.5em'
      options={TableData.SystemTypes}
      />}

      <SelectInput
      disabled={submit ? 'disabled' : ''}
      onChange = {(e)=>setEquipment(e.target.value)}
      labelTitle='Equipment' 
      placeholder= 'Equipment'
        marginBottom='2.5em'
        options={TableData.Equipment}
        />
      <SelectInput 
      disabled={submit ? 'disabled' : ''}
      onChange={(e)=>setEquipmentType(e.target.value)}
      labelTitle='Equipment Type'
      placeholder= 'Equipment Type' 
      marginBottom='2.5em'
      options={TableData.equipmentType}
      />
      <SelectInput 
      disabled={submit ? 'disabled' : ''}
      onChange={(e) => setStatus(e.target.value)}
      labelTitle='Status' 
      placeholder= 'Status' 
      marginBottom='3em'
      options={[
        {
          id: '1',
          status: 'maintenance'
        },
        {
          id: '2',
          status: 'breakdown'
        },
        {
          id:'3',
          status: 'available'
        },
        {
          id: '4',
          status: 'maintenance'
        },
        {
          id: '5',
          status: 'available'
        }
      ]}
      />
        <Grid>
          <div>
          <Button 
          onClick={onClick}
          background= 'white'
          color= 'black'
          borderWidth= '1px'
          borderRadius= '2px'
          content= 'Cancel'
          />
          <Button 
          disabled= {( !toggle? location === '' : systemType === '' )|| status === '' || equipment === '' || equipmentType === '' } 
          loader = {submit}
          background= 'red'
          borderWidth= '0'
          outline= 'red'
          color= 'white'
          loaderContent= 'Submit'
          content = {!submit ? 'Submit' : ''}
          />
          </div>
        
        </Grid>
      
   </FormCtrl>
  )
}

export default CustomModal