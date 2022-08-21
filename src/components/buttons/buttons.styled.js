import styled from 'styled-components'


export const ButtonContainer = styled.button`
  box-sizing: border-box;
  padding: ${({padding}) => padding || `0 .5em`}; 
  background: ${(props) => props?.disabled ? '#eda0a4' : props.background || `#f16063`};
  border-radius: ${(props) => props?.pill ? '1.5em' : props.borderRadius || `5px`};       
  width: ${({width}) => width || `8em`};
  height: ${({height}) => height || `3em`};
  display: flex;
  place-items: center;
  justify-content:  ${({loader}) => loader ? 'space-around' : `center`};
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  transition: ${({transition}) => transition || `200ms`};
  cursor: ${({disabled, statusBar}) => (disabled ? 'not-allowed' : statusBar || `pointer`)};
  color: ${({color}) => color || `#ffffff`};
  border: ${({borderWidth, outline}) => `${borderWidth || 1}px solid ${outline} !important ` ||
    `0 !important`};

  span{
  place-items:  ${({loader}) => loader ? 'center' : ``};
  font-style: ${({loader}) => loader ? 'normal' : ``}; 
  font-weight: ${({loader}) => loader ? 'normal' : ``};
  font-size: ${({loader}) => loader ? '14px' : ``};
  line-height: ${({loader}) => loader ? '17px' : ``};
  transition: ${({loader}) => loader ? '300ms ease' : ``};
  margin: ${({loader, margin}) => loader ? '0 25%': margin || ``} ;
  }


  svg{
    justify-self: ${(props) => props?.left ? 'left !important' : props.right ? `right !important` : 'center'};
    height: ${({h}) => h || `auto`};
    width: ${({w}) => w || `auto`};
  }
  
  
 

`

export const Grid = styled.div`
justify-self: end;
div{
  display: flex;
  button:nth-child(1){
    margin-right: .4em;
  }
}
`



export const Slider = styled.div`
display: flex;
width: 85%;
height: 2.5em;
background-color: #E3E6E8;
border-radius: 8.5px;
cursor: pointer;
margin-bottom: 2em;
div:nth-child(1){
  display: grid;
  box-sizing: border-box;
  &>div{
    place-items: center;
    color: red;
    height: 76.9%;
    width: 94.2%;
    background-color: white;
    border-radius: 6px;
    margin: auto;
    transition: 250ms ease-in;
  }
  flex: 50%;
}

  div:nth-child(2){
    display: grid;
    place-items: center;
    box-sizing: border-box;
    color: black;
    flex: 50%;
    &>div{
    place-items: center;
    height: 76.9%;
    width: 94.2%;
    border-radius: 6px;
    margin: auto;
    transition: 250ms ease-in;
  }
  }
`