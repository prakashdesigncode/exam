import React, { useRef, useState } from "react";
import { Header } from "./utils";

const CompoundOne = ()=>{
    const [color,setColour] = useState('') /* useSE */
    return <> 
    <Header colorChange={setColour}/>
    <div style={{backgroundColor:color}}>CompoundOne</div>
    </>
}

export default CompoundOne