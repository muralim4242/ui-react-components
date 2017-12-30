import React,{Component} from 'react';
import ShowDOM from '../../common/ShowDOM';

class Landing extends Component{
  static isPrivate=false;


  render()
  {
    return (
      <div>
          <ShowDOM location="specifications/landing" clientLocation="landing" />
      </div>
    )
  }
}

export default Landing;
