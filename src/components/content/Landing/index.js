import React,{Component} from 'react';
import Flexi from '../../common/Flexi';

class Landing extends Component{
  static isPrivate=false;

  state={
    formData:{

    },
    hasSubmited:false
  }


  onChange=(e,property)=>
  {
    this.setState({
      form:{
        ...this.state.form,
        [property]:e.target.value
      }
    })
  }




  onFlexiSubmit=(e)=>{
    let {form}=this.state;
    e.preventDefault();
    console.log(form);
    this.setState({
      hasSubmited:true
    })
  }

  render()
  {
    let {onFlexiSubmit,onChange}=this;
    let {form,hasSubmited} =this.state;
    return (
      <div>
          <Flexi location="specifications/landing" clientLocation="landing" onSubmit={onFlexiSubmit} onChange={onChange}/>
          <br/>
          {
            form && hasSubmited && <div className="row"><div className=" card col s8 offset-s2"><table>
        <thead>
          <tr>
              <th>Person Name</th>
              <th>Person State</th>

          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{form.personName}</td>
            <td>{form.personState}</td>
          </tr>
        </tbody>
      </table></div></div>
          }

      </div>
    )
  }
}

export default Landing;
