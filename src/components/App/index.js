import {connect} from 'react-redux';
import App from './App';
import * as actions from '../../actions';

const mapStateToProps=({app})=> {
  return {
    app
  }
}

export default connect(mapStateToProps, actions)(App);
