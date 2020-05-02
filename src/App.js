import React, { Component } from 'react';
import store from './store'
import { Provider } from 'react-redux'

import Posts from './components/Posts'
import Navbar from './components/navbar'
import Postform from './components/Postform'
import './App.css';



class App extends Component{
  render(){
    return (
      <Provider store={store}>
        <div className="App">
          <Navbar/>
          <h1><b>SANDBOX</b></h1>
          <Postform/>
          <hr/>
          <Posts/>
        </div>
      </Provider>
    );
  }
}

export default App;
