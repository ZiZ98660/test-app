import React from 'react'
import { CardDiv } from './card.styled'
import { Plus } from '../assets/libs/svg/svg'

const Card = ({onClose}) => {
  return (
    <CardDiv>
        <div>
            <div onClick={onClose}>
                <Plus />
            </div>
            <div>Maintenance</div>
        </div>
        <div>
            <div>Total Available Equipment</div>
            <p>10</p>
        </div>
        <div>
            <div>Total Maintenance Equipment</div>
            <p>153</p>
        </div>
        <div>
            <div>Total Breakdown Equipment</div>
            <p>3</p>
        </div>
        
    </CardDiv>
  )
}

export default Card