import styled from 'styled-components'


export const TableContainer = styled.div`
margin-top: 2em;
padding-top: 3em;
display: grid;
grid-template-columns: ${({columns}) => `repeat(${columns}, 1fr)` || '1fr'};
min-height: 3em;
margin-bottom: 3em;
`


export const TableRow = styled.div`
display: grid;
row-gap: 0;
div{
    
    border-bottom: 1px solid #cdc3c3;
    text-align: center;
    display: grid;
    place-items: center;
    min-height: 4.5em;

}
&>div:nth-child(1){
font-size: ${({TitleFontSize}) => TitleFontSize || '16px' };
font-weight: ${({TitleFW}) => TitleFW || '500'};
color:  ${({TitleColor}) => TitleColor || 'black'};
}

&>div:not(:nth-child(1)){    
    font-size: ${({DetailsFontSize}) => DetailsFontSize || '14px'};
    color:  ${({DetailsColor}) => DetailsColor || 'black'};
  
}
`

export const Maintenance = styled.div`
display: grid;
place-content: center;
width: 100%;
height: max-content;
background: #E3E6E8;
row-gap: 1.1em;
&>div{
    align-items: center;
    height: 2.5em;
}
`



export const MaintenanceTable = styled.div`
padding: 3.1em 2em 0 0em;
background-color: #E3E6E8;
height: 40.5em;
`


