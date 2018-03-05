import React from "react";
import PropTypes from "prop-types";
import $ from "jquery";
// import { DragSource } from 'react-dnd';

const source = {
  beginDrag(props) {
    return {};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

// @DragSource("collapsible", source, collect)
class Collapsible extends React.Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $(document).ready(function() {
      $(".collapsible").collapsible();
    });
  }

  render() {
    let {spec}=this.props;
    // const { connectDragSource, isDragging } = this.props;
    return (
      <ul className={`${spec.className}`} data-collapsible="accordion">
        <li>
          {spec.hasHeader && <div className={`${spec.headerClassName}`}>
            {spec.hasHeaderIcon && <i className={`${spec.headerIconClassName}`}>{spec.headerIconName}</i>}{spec.headerContent}
          </div>}
          <div className={`${spec.bodyClassName}`}>
            {spec.bodyContent}
          </div>
        </li>
      </ul>
    );
  }
}

export default Collapsible;
