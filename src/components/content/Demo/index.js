import React, { Component } from "react";
import ShowDOM from "../../common/ShowDOM";
import Button from "../../uiComponents/materializecss/Button";
import Icon from "../../uiComponents/materializecss/Icon";
import Common from "../../uiComponents/materializecss/Common";
import UL from "../../uiComponents/materializecss/UL";
import LI from "../../uiComponents/materializecss/LI";

class Demo extends Component {
  static isPrivate = false;
  state = {
    specification: [],
    currentSpec: {}
  };

  render() {
    return (
      <div>
        <Common spec={{ className: "row" }}>
          <Common spec={{ className: "card col s12" }}>
            <Common spec={{ className: "card-content" }}>
              Create Specification
              <Button
                spec={{
                  className:
                    "btn-floating btn-large waves-effect waves-light red right"
                }}
              >
                <Icon
                  spec={{
                    className: "material-icons",
                    iconName: "add"
                  }}
                />
              </Button>
            </Common>
            <Common spec={{ className: "card-action" }}>
              <UL
                componentDidMount={`$(document).ready(function(){
                    $('.collapsible').collapsible();
                  });`}
                spec={{
                  className: "collapsible popout",
                  "data-collapsible": "accordion"
                }}
              >
                <LI spec={{}} />
              </UL>
            </Common>
          </Common>
        </Common>

        <Common spec={{ className: "row" }}>
          <Common spec={{ className: "card col s12" }}>
            <Common spec={{ className: "card-content" }}>
              <ShowDOM
                location=""
                clientLocation="Demo"
                customSpecification={[]}
              />
            </Common>
          </Common>
        </Common>

        <Common spec={{ className: "row" }}>
          <Common spec={{ className: "card col s12" }}>
            <Common spec={{ className: "card-content" }}>Specification</Common>
          </Common>
        </Common>
      </div>
    );
  }
}

export default Demo;
