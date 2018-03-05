import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Landing from '../components/content/Landing';
import Dashboard from '../components/content/Dashboard';
import Demo from '../components/content/Demo'
import ChessDemo from '../components/content/ChessDemo'



const base = "";

const Main = () => {
    return (
      <main style={{"marginBottom": "50px"}}>
        <Switch>
          <Route exact path={base+"/"} component={Landing} />
          <Route exact path={base+"/dashboard/:component?"} component={Dashboard} />
        </Switch>
      </main>
     )
   }

export default(
     <Main/>
   );
