import React from "react";
import PropTypes from "prop-types";

const TextField=({spec,onHandleChange})=>
{
  let {label,placeholder,id,inputType,className,jsonPath}=spec;
  return (
    <div className="input-field">
      <input placeholder={placeholder} id={id} type={inputType} className={className} onChange={(e)=>{onHandleChange(e,jsonPath)}}/>
      <label forhtml="first_name">{label}</label>
    </div>
  )
}

TextField.propTypes={
  placeholder:PropTypes.string,
  id:PropTypes.number,
  inputType:PropTypes.string,
  className:PropTypes.string,
  label:PropTypes.string,
  onHandleChange:PropTypes.func
}

export default TextField;
