import React from 'react';
import './TextInput.css'

const TextInput = (props) => {
   return (
      <button className={`text-input`}
        data-id={props.id}
        type={props.type}
        name={props.name}
        value={props.value}
        disabled={props.disabled}
        onClick={props.handleClick}> 
           <h4>{props.label}</h4>
      </button>
   )
}
export default TextInput;