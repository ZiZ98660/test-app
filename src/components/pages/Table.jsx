import Button from "../buttons/buttons"
import { CustomTable } from "../styledTable/table"
import { TableContainer, MaintenanceTable } from "../styledTable/table.styled"
import TableData from "../styledTable/maintenance.json"
import { Modal } from "react-bootstrap"
import CustomModal from "./Modal/Modal"
import { useState } from "react"
import Card from "../card/card"




const StyledTable = () => {
  const[show, setShow] = useState('')
  return (
  <MaintenanceTable>
    <Card
     onClose={() => setShow(!show)}
     />
    <TableContainer 
    style={{background : 'white'}}
    columns = '6'
    >
      <CustomTable 
      TitleContent= 'Date'
      HardCode1 = 'July 22nd 22'
      HardCode2 = 'July 8th 22'
      HardCode3 = 'July 8th 22'
      HardCode4 = 'July 5th 22'
      HardCode5 = 'July 28th 22'
      />
      <CustomTable 
      TitleContent= 'Equipment Id'
      Data={TableData.Equipment}
      />
      <CustomTable 
      TitleContent= 'Location'
      Data={TableData.Location}
      />
       <CustomTable 
      TitleContent= 'Date'
      HardCode1 = 'Sbu 3'
      HardCode2 = 'Sbu 3'
      HardCode3 = 'Sbu 3'
      HardCode4 = 'Ijora'
      HardCode5 = 'Sbu 1'
      />
      <CustomTable 
      TitleContent= 'EquipmentType'
      Data={TableData.equipmentType}
      />
       <CustomTable 
      TitleContent= 'Status'
      HardCode1 = {<Button height='2em' width= '8em' background = 'rgb(223 236 18 / 35%)' borderWidth='3' outline='#9e9706' content = 'maintenance' color = '#a09909'  statusBar = 'auto' />}
      HardCode2 = {<Button height='2em' width= '8em' background = 'rgb(226 22 22 / 35%)' borderWidth='3' outline='red' content = 'breakdown' color = 'red'  statusBar = 'auto' />}
      HardCode3 = {<Button height='2em' width= '8em' background = 'rgb(14 183 22 / 35%)' borderWidth='3' outline='green' content = 'available' color = 'green'  statusBar = 'auto' />}
      HardCode4 = {<Button height='2em' width= '8em' background = 'rgb(223 236 18 / 35%)' borderWidth='3' outline='#9e9706' content = 'maintenance' color = '#a09909'  statusBar = 'auto' />}
      HardCode5 = {<Button height='2em' width= '8em' background = 'rgb(14 183 22 / 35%)' borderWidth='3' outline='green' content = 'available' color = 'green'  statusBar = 'auto' />}
      />
      
      
    </TableContainer> 
    {/* <Button
    loader
    loaderContent='Modal'
    
   
    /> */}

    <Modal 
    show = {show ? true : false }
    >
      <CustomModal
      onClick={()=>setShow(!show)}
      setShow = {setShow}
       />
    </Modal>
    
  </MaintenanceTable>
  )
}

export default StyledTable