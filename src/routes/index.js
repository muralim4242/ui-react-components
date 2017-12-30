import React from 'react';
import {Switch} from 'react-router-dom';
import Route from "./AuthRoute";
import Landing from '../components/content/Landing';
import Dashboard from '../components/content/Dashboard';
import Demo from '../components/content/Demo'



const base = "";

const Main = () => {
    return (
      <main style={{"marginBottom": "50px"}}>
        <Switch>
          <Route exact path={base+"/"} component={Landing} />
          <Route exact path={base+"/dashboard/:component?"} component={Dashboard} />
          <Route exact path={base+"/specification/demo"} component={Demo} />
        </Switch>
      </main>
     )
   }

export default(
     <Main/>
   );
