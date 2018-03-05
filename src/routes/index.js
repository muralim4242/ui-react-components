import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Landing from '../components/content/Landing';




const base = "";

const Main = () => {
    return (
      <main style={{"marginBottom": "50px"}}>
        <Switch>
          <Route exact path={base+"/"} component={Landing} />
        </Switch>
      </main>
     )
   }

export default(
     <Main/>
   );
