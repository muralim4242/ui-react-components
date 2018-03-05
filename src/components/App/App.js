import React, { Component } from 'react';
import routes from '../../routes';
import Flexi from '../common/Flexi';

import './index.css';


class App extends Component {
  componentDidMount()
  {
    let {initApp}=this.props;
    initApp()
  }

  render() {
    let {app}=this.props;
    return (
      <div className="App">
        {app && app.hasHeader && <Flexi location="specifications/header" clientLocation="header"/>}
        {
          routes
        }
        {app && app.hasFooter && <Flexi location="specifications/footer" clientLocation="footer"/>}
      </div>
    );
  }
}

export default App;
