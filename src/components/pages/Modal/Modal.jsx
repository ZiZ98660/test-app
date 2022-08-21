import Button from '../../buttons/buttons'
import { FormTitle, SelectInput } from '../../input/input'
import { FormCtrl } from '../../input/input.styled'
import TableData from '../../styledTable/maintenance.json'
import { Grid, Slider } from '../../buttons/buttons.styled'

import React from 'react'

const CustomModal = ({onClick}) => {
  return (
        <FormCtrl>
    <FormTitle titleHeaderContent= 'Maintenance Input' titleHeaderFontSize='26px'  />
    <Slider>
        <div>
          <div>Location</div>
        </div>
        <div>System Type</div>
      </Slider>
      <SelectInput
      labelTitle='Location' 
      placeholder= 'Location'  
        marginBottom='2.5em'
        options={TableData.Location}
        authName = 'Location'
      />
      <SelectInput
      labelTitle='Equipment' 
      placeholder= 'Equipment'
        marginBottom='2.5em'
        options={TableData.Equipment}
        />
      <SelectInput 
      labelTitle='Equipment Type'
      placeholder= 'Equipment Type' 
      marginBottom='2.5em'
      options={TableData.equipmentType}
      />
      <SelectInput 
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
          loader 
          background= 'red'
          borderWidth= '0'
          outline= 'red'
          color= 'white'
          loaderContent= 'Submit'
          />
          </div>
        
        </Grid>
      
   </FormCtrl>
  )
}

export default CustomModal