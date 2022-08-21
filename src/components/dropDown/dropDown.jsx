import {DropDownWrapper, OptionLink} from './dropDown.styled';
import { useState } from 'react';

export const DropDownMenu = ({
    menuListOptions,
    menuTitle,
    linkTo,
    menuBorder,
    menuBG,
    menuFontSize,
    menuColor,
    menuPad,
    menuColorOnHover,
    optionColor,
    optionPadding,
    shadow,
    rowGap,
    OptionLinkFont,
    OptionLinkColor
}) => {
    const[isDropDown, setIsDropDrown] = useState('')
    return(
        <DropDownWrapper
        optionColor = {optionColor}
        optionPadding = {optionPadding}
        shadow = {shadow}
        rowGap = {rowGap}
        OptionLinkFont = {OptionLinkFont}
        OptionLinkColor = {OptionLinkColor}
        menuBG = {menuBG}
        menuBorder = {menuBorder}
        menuFontSize = {menuFontSize}
        menuColor = {menuColor}
        menuPad = {menuPad}
        menuColorOnHover = {menuColorOnHover}
         
        onBlur ={() => setIsDropDrown('')}
        >
            <button
            id= {isDropDown ? 'drop-down' : ''}          
            onClick = {() => setIsDropDrown(!isDropDown)}          
            >
            {menuTitle}   
            </button>
            <div
            onFocus={()=> setIsDropDrown('drop-down')}
            
            on
            >
                { menuListOptions?.length > 0 ? menuListOptions.map(option=> <li><OptionLink 
                to={option.link || '#'}>{option.name}</OptionLink></li>) : (<li><OptionLink 
                to={linkTo}>No Options</OptionLink></li>) }
            </div>
        </DropDownWrapper>
    )
} 
