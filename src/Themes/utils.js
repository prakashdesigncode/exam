import { useState,forwardRef, useEffect } from "react"

export const Header = ({colorChange = ()=>{}})=>{
    const [color,setColour] = useState('red')/* move to redux*/
    const handleColour = (e)=> setColour(e) /** write action */
    useEffect(()=>{
        colorChange(color)
        
    },[color])
    return <ol><li  onClick={()=>handleColour('red')}>red</li><li  onClick={()=>handleColour('green')}>green</li><li  onClick={()=>handleColour('black')}>black</li></ol>
}