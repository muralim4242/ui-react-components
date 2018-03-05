import React, { Component } from "react";
import _ from "lodash";
import Button from "../../uiComponents/materializecss/Button";
import TextField from "../../uiComponents/materializecss/TextField";

class Flexi extends Component {

  componentDidMount() {
    let {
      location,
      clientLocation,
      setSpecification,
      customSpecification
    } = this.props;
    if (location) {
      setSpecification(location, clientLocation);
    } else {
      setSpecification(location, clientLocation, customSpecification);
    }
  }





  _showDom = (specifications, originalSpecification) => {
    let { _showDom } = this;
    let {onChange}=this.props;
    return specifications.map((spec, key) => {
      try {
        let Component = require(`../../uiComponents/${spec.uiComponent}/${
          spec.type
        }`).default;
        if (_.some(originalSpecification, { parentId: spec.id })) {
          return (
            <Component key={spec.id + key} spec={spec} onHandleChange={onChange}>
              {_showDom(
                _.filter(originalSpecification, { parentId: spec.id }),
                originalSpecification
              )}
            </Component>
          );
        } else {
          return <Component key={spec.id + key} spec={spec} onHandleChange={onChange}/>;
        }
      } catch (e) {
        return <div key={key}>No Component for current specification</div>;
      }
    });
  };

  render() {
    let { clientLocation, specifications, onSubmit } = this.props;
    let { _showDom } = this;
    return (
      <div>
        {clientLocation &&
          specifications.hasOwnProperty(clientLocation) &&
          specifications[clientLocation].length &&
          _showDom(
            _.filter(specifications[clientLocation], { parentId: "" }),
            specifications[clientLocation]
          )}


        {onSubmit && (
          <Button
            spec={{
              onClick:onSubmit,
              className: "waves-effect waves-light btn"
            }}
          >
            <i className="material-icons right">cloud</i>Submit
          </Button>
        )}
      </div>
    );
  }
}

export default Flexi;
