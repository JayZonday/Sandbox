import React, { Component } from 'react';
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Navlink
} from "react-router-dom";

import Posts from './components/Posts'
import Navbar from './components/navbar'
import Postform from './components/Postform'
import './App.css';



class App extends Component{
  render(){
    return (

      <Router>

        <div className="App">
          <Navbar/>
          <h1><b>SANDBOX</b></h1>

          <hr/>
        </div>

        <Route path='/posts'>
          <Posts/>
        </Route>
        <Route path='/add-post'>
          <Postform/>
        </Route>
      </Router>
    );
  }
}

export default App;
