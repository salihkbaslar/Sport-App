import React, { Component } from 'react';
import withRouter from './withRouter';
import axios from 'axios';
import UserConsumer from '../context';
 
class UpdateUser extends Component{
    state = {
        name : "",
        gender : "",
        age : "",
        height : "",
        weight : "",
        neck : "",
        waist : "",
        hip : "",
        error : false
    }
    
    setGender = (e) => {
        this.setState({
            genderCheck : e.target.value
        })
      }
    validateForm = () => {
        const {gender,name,age,height,weight,neck,waist} = this.state;
        if (gender === "" || name === "" || age === ""|| height === "" || weight === "" || neck === "" || waist === "") {
            return false;
        }
        return true;
    }
    changeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    componentDidMount = async () => {
        const id = this.props.params.id;
        const response = await axios.get(`http://localhost:3005/users/${id}`);
        const {gender,name,age,height,weight,neck,waist,hip} = response.data;
        this.setState({
            gender,
            name,
            age,
            height,
            weight,
            neck,
            waist,
            hip
        })
    }
    updateUser = async (dispatch, e) => {
        e.preventDefault();
        const id = this.props.params.id;
        const {gender,name,age,height,weight,neck,waist,hip} = this.state;
        const updateUser ={
            gender,
            name,
            age,
            height,
            weight,
            neck,
            waist,
            hip
        }

        if (!this.validateForm()) {
            this.setState({
                error : true
            })
            return;
        }

        const response = await axios.put(`http://localhost:3005/users/${id}`, updateUser);
        dispatch({type: "UPDATE_USER",payload:response.data});

        this.props.navigate("/");

    }
  render() {
    const {error,genderCheck,gender,name,age,height,weight,neck,waist,hip} = this.state;
    return <UserConsumer>
        {
                value => {
                    const {dispatch} = value;
                    return (
                        <div className='col-md-8 mb-4'>
                            {
                                <div className="card">
                                <div>
                                    <div className="card-header">
                                        <h4 className="d-inline">Update User Form</h4>
                                    </div>
                                    <div className="card-body">
                                        {
                                            error ? <div className='alert alert-danger'>
                                                Please fill all the blanks...
                                            </div>: null
                                        }
                                        <form onSubmit = {this.updateUser.bind(this, dispatch)}>
                                            <div className="form-group">
                                                <label htmlFor="gender" name = "gender" value = {gender} onChange={this.changeInput.bind(this)}>Gender</label>
                                                <br />
                                                    <div onChange={this.setGender.bind(this)}>
                                                        Male <input type="radio" value="Male" name="gender"onChange={this.changeInput} />
                                                        <span> </span>
                                                        Female <input type="radio" value="Female" name="gender"onChange={this.changeInput} />
                                                    </div>
                                                </div>
                                            <div className="form-group">
                                                <label htmlFor="name">Name</label>
                                                <input 
                                                type="text"
                                                name='name'
                                                id='id'
                                                value= {name}
                                                placeholder='Enter your name'
                                                className='form-control'
                                                onChange={this.changeInput}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="age">Age</label>
                                                <input 
                                                type="number"
                                                name='age'
                                                id='id'
                                                value= {age}
                                                placeholder='Enter your age'
                                                className='form-control'
                                                onChange={this.changeInput}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="height">Height</label>
                                                <input 
                                                type="number"
                                                name='height'
                                                id='id'
                                                value= {height}
                                                placeholder='Enter your height'
                                                className='form-control'
                                                onChange={this.changeInput}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="weight">Weight</label>
                                                <input 
                                                type="number"
                                                name='weight'
                                                id='id'
                                                value= {weight}
                                                placeholder='Enter your weight'
                                                className='form-control'
                                                onChange={this.changeInput}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="neck">Neck</label>
                                                <input 
                                                type="number"
                                                name='neck'
                                                id='id'
                                                value= {neck}
                                                placeholder='Enter your neck'
                                                className='form-control'
                                                onChange={this.changeInput}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="waist">Waist</label>
                                                <input 
                                                type="number"
                                                name='waist'
                                                id='id'
                                                value= {waist}
                                                placeholder='Enter your waist'
                                                className='form-control'
                                                onChange={this.changeInput}
                                                />
                                            </div>
                                            {(() => {if (genderCheck === 'Female'){
                                                return (
                                                <div className="form-group">
                                                    <label htmlFor="hip">Hip</label>
                                                    <input 
                                                    type="number"
                                                    name='hip'
                                                    id='id'
                                                    value= {hip}
                                                    placeholder='Enter your hip'
                                                    className='form-control'
                                                    onChange={this.changeInput}
                                                    />
                                                </div>
                                                )
                                            }return null;})()}        
                                            <button className= "btn btn-danger btn-block" type='submit'>Update User</button>                    
                                        </form>
                                    </div>
                                </div>
                            </div>
                            }
                        </div>
                    );
                }
            }
      </UserConsumer>
    
  }
}
 
export default withRouter(UpdateUser);