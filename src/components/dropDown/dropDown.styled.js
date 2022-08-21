import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const DropDownListWrapper = styled.div`
background-color: ${({BGColor}) => BGColor || `#f3f3f3`};
display: flex;
padding: ${({padding}) => padding || `.5em`};
gap: 1em;
`



export const DropDownWrapper = styled.div`
    position: relative;
    button{
        background: ${({menuBG}) => menuBG || `none`};
        border:${({menuBorder}) => menuBorder || `none`};
        text-decoration: none;
        font-size: ${({menuFontSize}) => menuFontSize || `14px`};
        color: ${({menuColor}) => menuColor || `#777`};
        padding: ${({menuPad}) => menuPad || `0`};
        cursor: pointer;
        &:hover{
            color: ${({menuColorOnHover}) => menuColorOnHover || `black`};
        }
    }
    
    &>div{
        position: absolute;
        min-width: max-content;
        left: 0;
        top: calc( 100% + .35em );
        background-color: ${({optionColor}) => optionColor || `white`};
        padding: ${({optionPadding}) => optionPadding || `0.75em`};
        border-radius: 0.25em;
        box-shadow: ${({shadow}) => shadow || `0 2px 5px 0 rgba(0, 0, 0, .1)`};
        opacity: 0;
        transform: translateY(-10px);
        pointer-events: none;
        transition: opacity 150ms ease-in, transform 150ms ease-in;
        display: grid;
        row-gap: ${({rowGap}) => rowGap || `.375em`};
        li{
            list-style-type: none;
            display: grid;
    
            &>a{
                text-decoration: none;
                font-size:  ${({OptionLinkFont}) => OptionLinkFont || `black`};
                color:  ${({OptionLinkColor}) => OptionLinkColor || `black`};
            }
        }

        
    }

    /* & > button:focus + div{
        opacity: 1;
        transform: translateY(0);
        pointer-events: auto;
    } */


    
`


export const OptionLink = styled(Link)`
text-decoration: none;
cursor: pointer;
`