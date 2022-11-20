import './App.css';
import React, { Component } from 'react';
import Navbar from './layout/Navbar';
import Users from './components/Users';
import AddUser from './forms/AddUser';
import UpdateUser from './forms/UpdateUser';
import NotFound from './pages/NotFound';
import Contribute from './pages/Contribute';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";

class App extends Component {

  render (){
    return (
      <Router>
        <div className="container">
        <Navbar title ="User App"/>
        <hr/>
          <Routes>
            <Route path='/' element = {<Users/>}/>
            <Route path='/add' element = {<AddUser/>}/>
            <Route path='/github' element = {<Contribute/>}/>
            <Route path='/edit/:id' element = {<UpdateUser/>}/>
            <Route path='*' element = {<NotFound/>}/>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
