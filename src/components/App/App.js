import React, { Component } from 'react';
import routes from '../../routes';
import ShowDOM from '../common/ShowDOM';

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
        {app && app.hasHeader && <ShowDOM location="specifications/header" clientLocation="header"/>}
        {
          routes
        }
        {app && app.hasFooter && <ShowDOM location="specifications/footer" clientLocation="footer"/>}
      </div>
    );
  }
}

export default App;
