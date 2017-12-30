import React,{Component} from 'react';
import _ from 'lodash';


class ShowDOM extends Component {

  componentDidMount()
  {
      let {location,clientLocation,setSpecification,customSpecification}=this.props;
      if (location) {
        setSpecification(location,clientLocation);
      } else {
        setSpecification(location,clientLocation,customSpecification);
      }
  }

  _showDom=(specifications,originalSpecification)=>
  {
    let {_showDom}=this;
    return specifications.map((spec,key)=>{
        try {
            let Component=require(`../../uiComponents/${spec.uiComponent}/${spec.type}`).default;
            if (_.some(originalSpecification,{parentId:spec.id})) {
              return (
                <Component key={spec.id+key} spec={spec}>
                      {_showDom(_.filter(originalSpecification,{parentId:spec.id}),originalSpecification)}
                </Component>
              )
            } else {
              return (
                <Component key={spec.id+key} spec={spec}/>
              )
            }
        } catch (e) {
          console.log(e);
          return (<div key={key}>
            No Component for current specification
          </div>)
        }
    })
  }

  render()
  {
    let {clientLocation,specifications}=this.props;
    let {_showDom}=this;
    return (
      <div>
          {clientLocation && specifications.hasOwnProperty(clientLocation) && specifications[clientLocation].length && _showDom(_.filter(specifications[clientLocation],{parentId:""}),specifications[clientLocation]) }
       </div>
    )
  }
}

export default ShowDOM;
