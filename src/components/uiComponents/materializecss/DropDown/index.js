import React from "react";
import PropTypes from "prop-types";
import $ from 'jquery';

class DropDown extends React.Component  {
  componentDidMount()
  {
    let {jsonPath}=this.props.spec;
    let {onHandleChange}=this.props;
    $(document).ready(function() {
      $('select').material_select();
      $('#'+jsonPath).on('change',function(){
        onHandleChange({target:{value:$(this).val()}},jsonPath)
      });
    });


    // $(this.refs[id]).material_select(alert("hai"));
  }

  componentWillUnMount()
  {
    $('select').material_select('destroy');
  }
  render()
  {
    // onChange={(e)=>{alert(e.target.value)}}
    let {id,label,defaultLabel,values,className,jsonPath}=this.props.spec;
    let {onHandleChange}=this.props;
    return (
      <div className={className}>
        <select  id={jsonPath}  defaultValue="" >

          <option value="" disabled>
            {defaultLabel}
          </option>
          {values.map((option,optionIndex)=>
          {
            return (
              <option key={optionIndex} value={option.key}>{option.value}</option>
            )
          })}
        </select>
        <label>{label}</label>
      </div>
    );
  }
};

DropDown.propTypes = {
  label: PropTypes.string,
  defaultLabel: PropTypes.string,
  listContainerStyle: PropTypes.object,
  values: PropTypes.array,
  className:PropTypes.string,
  onHandleChange:PropTypes.func
};

export default DropDown;
