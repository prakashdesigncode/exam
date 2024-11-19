import React, { useState } from "react";
import { Header } from "./utils";

const CompoundTwo = ()=>{
    const [color,setColour] = useState('') 
    return <> 
     <Header colorChange={setColour}/>
     <div style={{backgroundColor:color}}>CompoundTwo</div>
    </>
}

export default CompoundTwo