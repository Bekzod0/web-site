import React,{useState, useRef} from "react";
import '../../App.css'

  export  const Input = ({setCitieList}) => {  
  const [inputValue, setInputValue]=useState('')
  const inputref=useRef(null)
  const handleOnclick = ()=>{

    setCitieList((currentArray) => [...currentArray, inputValue]);
    setInputValue('')
    inputref.current.focus();
  }

const handleOnchange = (Event) =>{
  setInputValue(Event.target.value)
}

  return(
    <div className="input">
        <input className="inp" onChange={handleOnchange} value={inputValue} re />
        <button className="btn" onClick={handleOnclick}>√</button>

    </div>
 )
}
   


