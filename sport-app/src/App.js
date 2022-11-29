import './App.css';
import React, { Component } from 'react';
import Navbar from './layout/Navbar';
import Users from './components/Users';
import AddUser from './forms/AddUser';
import UpdateUser from './forms/UpdateUser';
import NotFound from './pages/NotFound';
import Contribute from './pages/Contribute';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Workouts from './pages/Workouts';
import Blogs from './pages/Blogs';
import ChestHypertrophy from './workouts/chest-hypertrophy';
import ChestStrenght from './workouts/chest-strenght';
import ChestEndurance from './workouts/chest-endurance';
import BackHypertrophy from './workouts/back-hypertrophy';
import BackStrenght from './workouts/back-strenght';
import BackEndurance from './workouts/back-endurance';
import ShoulderHypertrophy from './workouts/shoulder-hypertrophy';
import ShoulderStrenght from './workouts/shoulder-strenght';
import ShoulderEndurance from './workouts/shoulder-endurance';
import ArmHypertrophy from './workouts/arm-hypertrophy';
import ArmStrenght from './workouts/arm-strenght';
import ArmEndurance from './workouts/arm-endurance';
import LegHypertrophy from './workouts/leg-hypertrophy';
import LegStrenght from './workouts/leg-strenght';
import LegEndurance from './workouts/leg-endurance';
import AbsHypertrophy from './workouts/abs-hypertrophy';
import AbsStrenght from './workouts/abs-strenght';
import AbsEndurance from './workouts/abs-endurance';
import Home from './pages/Home';

class App extends Component {

  render (){
    return (
      <Router>
        <div className="container">
        <Navbar title ="User App"/>
        <hr/>
          <Routes>
            <Route path='/workout' element = {<Workouts/>}/>
            <Route path='/workout/chest-hypertrophy' element = {<ChestHypertrophy/>}/>
            <Route path='/workout/chest-strenght' element = {<ChestStrenght/>}/>
            <Route path='/workout/chest-endurance' element = {<ChestEndurance/>}/>
            <Route path='/workout/back-hypertrophy' element = {<BackHypertrophy/>}/>
            <Route path='/workout/back-strenght' element = {<BackStrenght/>}/>
            <Route path='/workout/back-endurance' element = {<BackEndurance/>}/>
            <Route path='/workout/shoulder-hypertrophy' element = {<ShoulderHypertrophy/>}/>
            <Route path='/workout/shoulder-strenght' element = {<ShoulderStrenght/>}/>
            <Route path='/workout/shoulder-endurance' element = {<ShoulderEndurance/>}/>
            <Route path='/workout/arm-hypertrophy' element = {<ArmHypertrophy/>}/>
            <Route path='/workout/arm-strenght' element = {<ArmStrenght/>}/>
            <Route path='/workout/arm-endurance' element = {<ArmEndurance/>}/>
            <Route path='/workout/leg-hypertrophy' element = {<LegHypertrophy/>}/>
            <Route path='/workout/leg-strenght' element = {<LegStrenght/>}/>
            <Route path='/workout/leg-endurance' element = {<LegEndurance/>}/>
            <Route path='/workout/abs-hypertrophy' element = {<AbsHypertrophy/>}/>
            <Route path='/workout/abs-strenght' element = {<AbsStrenght/>}/>
            <Route path='/workout/abs-endurance' element = {<AbsEndurance/>}/>
            <Route path='/' element = {<Home/>}/>
            <Route path='/blog' element = {<Blogs/>}/>
            <Route path='/user' element = {<Users/>}/>
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
