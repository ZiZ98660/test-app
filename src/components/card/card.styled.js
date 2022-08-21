import styled from 'styled-components'


export const CardDiv = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
column-gap: .8em;
height: 8em;
&>div{
    background-color: white;
    border-radius: 6px;
    min-height: 6em;
}
p{
    font-size: 2em;
    font-weight: 500;
}

&>div:nth-child(1){
    place-items: center;
    display: flex;
    padding: 0 3.2em; 
    /* align-items: center; */
    box-sizing: border-box; 
    justify-content: space-around;
    background-color:#f2f3f7;
    

    &>div:nth-child(1){
        height: 3em;
        width: 3em;
        border-radius: 50%;
        background-color: red;
        color: white;
        display: grid;
        place-content: center;
        cursor: pointer;
    }


}
&>div:not(:nth-child(1)){
    padding: 1.8em 2em;
    display: grid;
    align-content: center;
    box-sizing: border-box;

}
`