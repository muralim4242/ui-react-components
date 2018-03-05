import {connect} from 'react-redux';
import Flexi from './Flexi';
import * as actions from '../../../actions';

const mapStateToProps=({specifications})=> {
  return {
    specifications
  }
}

export default connect(mapStateToProps, actions)(Flexi);
