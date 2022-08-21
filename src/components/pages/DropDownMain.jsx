import { DropDownListWrapper } from "../dropDown/dropDown.styled"
import { DropDownMenu } from "../dropDown/dropDown"
import TableData from "../styledTable/maintenance.json"

const DropDownMain = () => {
  return (
    <DropDownListWrapper>
        <DropDownMenu 
        menuTitle='Menu'
        menuListOptions={TableData.Location}

        />
        <DropDownMenu 
        menuTitle='Menu'
        menuListOptions={TableData.Location}
        />
        <DropDownMenu 
        menuTitle='Menu'
        menuListOptions={TableData.Location}
        />
        <DropDownMenu 
        menuTitle='Menu'
        menuListOptions={TableData.Location}
        />
        <DropDownMenu 
        menuTitle='Menu'
        menuListOptions={TableData.Location}
        />
    </DropDownListWrapper>
  ) 
}

export default DropDownMain