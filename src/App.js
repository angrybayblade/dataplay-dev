import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route,Link} from "react-router-dom";

import {ReactComponent as DataLogo} from './images/data.svg'
import {ReactComponent as TransformLogo} from './images/trans.svg'
import {ReactComponent as VisualizeLogo} from './images/visualize.svg'
import {ReactComponent as TrainLogo} from './images/train.svg'

import Data from './Views/Data';
import Visualize from './Views/Visualize';
import Transform from './Views/Transform';
import Train from './Views/Train';

const App = (props) => {

  let Nav = [
      {logo:DataLogo,path:"/"},
      {logo:TransformLogo,path:"/transform"},
      {logo:VisualizeLogo,path:"/visualize"},
      {logo:TrainLogo,path:"/train"},
    ].map((row,i)=>{
      let Logo = row.logo;
      return(
        <div key={i} className="nav-item flex-center">
          <Link to={row.path}>
            <Logo />
          </Link>
        </div>
      )
    })

  return (
    <section>
      <Router>
        <div className="sidenav">
          <div className="nav">
            {Nav}
          </div>
        </div>
        <Route path = "/" exact component = { Data } />
        <Route path = "/transform" exact component = { Transform } />
        <Route path = "/visualize" exact component = { Visualize } />
        <Route path = "/train" exact component = { Train } />
      </Router>      
    </section>
  );
}

export default App;
