import {connect} from 'react-redux';
import ShowDOM from './ShowDOM';
import * as actions from '../../../actions';

const mapStateToProps=({specifications})=> {
  return {
    specifications
  }
}

export default connect(mapStateToProps, actions)(ShowDOM);
