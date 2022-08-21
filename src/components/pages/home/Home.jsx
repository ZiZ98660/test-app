import React from 'react'
import { Container } from 'react-bootstrap'
import { DropDownListWrapper } from '../../dropDown/dropDown.styled'
import { DropDownMenu } from '../../dropDown/dropDown'

const Home = () => {
  return (
    <Container>
        <DropDownListWrapper>
            <DropDownMenu 
            menuTitle='Pages'
            menuListOptions = {[
                {name: 'Modal/Table', link: '/table'},
                {name: 'Drop Down', link: '/dropdown'},
                {name: 'Multi Select', link: '/multiselect'}   
            ]}
            />
        </DropDownListWrapper>

    </Container>
  )
}

export default Home