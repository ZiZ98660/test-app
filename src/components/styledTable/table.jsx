import { useState, useEffect } from "react";
import { MaintenanceTable, TableRow } from "./table.styled";
import TableData from './maintenance.json'




export const CustomTable = ({
    Data,
    TitleFW,
    TitleContent,
    TitleFontSize,
    TitleColor,
    DetailsFontSize,
    DetailsColor,
    HardCode1,
    HardCode2,
    HardCode3,
    HardCode4,
    HardCode5    
}) => {


const log = TableData.Location.map((data, facts) => ({data, facts}))
console.log(log)

    return(
            <TableRow
            TitleFW = {TitleFW}
            TitleFontSize = {TitleFontSize}
            TitleColor = {TitleColor}
            DetailsFontSize = {DetailsFontSize}
            DetailsColor = {DetailsColor}
            >
                <div 
                >
                {TitleContent}
                </div>
                {Data ? Data.map(subData => 
                <div>
                    {subData.name || subData.transactionId }
                </div>) : <>
                        <div>{HardCode1}</div>
                        <div>{HardCode2}</div>
                        <div>{HardCode3}</div>
                        <div>{HardCode4}</div>
                        <div>{HardCode5}</div>
                        </>}
            </TableRow>
    )
}