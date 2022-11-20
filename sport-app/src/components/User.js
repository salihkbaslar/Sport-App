import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserConsumer from '../context';
import axios from 'axios';
import { Link } from 'react-router-dom';

class User extends Component {
    state = {
        isVisible : false
    }
    onClickEvent = (e) => {
        this.setState({
            isVisible : !this.state.isVisible
        })
    }
    onDeleteUser = async (dispatch,e) => {
        const {id} = this.props;
        await axios.delete(`http://localhost:3005/users/${id}`);
        dispatch({type: "DELETE_USER", payload: id});
    }
    

    render() {
        const {id,gender,name,age,height,weight,neck,waist,hip} = this.props;
        const fatMale = Math.round((495/(1.0324-(0.19077*Math.log10((waist-neck)/100)+(0.15456*Math.log10(height/100)))))-451);
        const fatMassMale = (fatMale*weight/100);
        const leanMassMale = (weight-fatMassMale);
        const fatFemale = Math.round((271/(1.29579 - (0.35004*Math.log10((waist+hip-neck)/100)) + (0.22100*Math.log10(height/100))))-390);
        const fatMassFemale = (fatFemale*weight/100);
        const leanMassFemale = (weight-fatMassFemale);
        const bmi = Math.round((weight/((height/100)*(height/100))));
        const {isVisible} = this.state;

        return (
            <UserConsumer>
                {
                    value => {
                        const {dispatch} = value;
                        return (
                            <div className="col-md-8 mb-4">
                                <div className="card" style = {isVisible ? {backgroundColor : "#0D4C92", color : "#59C1BD"} : null}>
                                    <div className="card-header d-flex justify-content-between">
                                        <h4 className="d-inline" onClick={this.onClickEvent} style={{cursor : "pointer"}}>{name}</h4>
                                        <i onClick={this.onDeleteUser.bind(this, dispatch)} className="far fa-trash-alt" style={{cursor : "pointer"}}></i>
                                    </div>
                                    {
                                        isVisible ?<div>
                                            {(() => {
                                            if (gender === 'Male'){
                                                return (
                                                    <div className="card-body d-flex justify-content-around">
                                                    <div className="card-body-left">
                                                        <p className="card-text">Gender: {gender}</p>
                                                        <p className="card-text">Age: {age}</p>
                                                        <p className="card-text">Height: {height}</p>
                                                        <p className="card-text">Weight: {weight}</p>
                                                        <p className="card-text">Neck: {neck}</p>
                                                        <p className="card-text">Waist: {waist}</p>
                                                    </div>
                                                    <div className="card-body-right">
                                                        <p className="card-text">Fat%: {fatMale}</p>
                                                        <p className="card-text">Fat Mass: {fatMassMale}</p>
                                                        <p className="card-text">Lean Mass: {leanMassMale}</p>
                                                        <p className="card-text">BMI: {bmi}</p>
                                                    </div>
                                                    <Link to = {`edit/${id}`} className = "btn btn-dark btn-sm align-self-end">Update User</Link>
                                                    </div>
                                                    )
                                                }return null;
                                                })()}
                
                                            {(() => {
                                            if (gender === 'Female'){
                                                return (
                                                    <div className="card-body d-flex justify-content-around">
                                                    <div className="card-body-left">
                                                        <p className="card-text">Gender: {gender}</p>
                                                        <p className="card-text">Age: {age}</p>
                                                        <p className="card-text">Height: {height}</p>
                                                        <p className="card-text">Weight: {weight}</p>
                                                        <p className="card-text">Neck: {neck}</p>
                                                        <p className="card-text">Waist: {waist}</p>
                                                        <p className="card-text">Hip: {hip}</p>
                                                    </div>
                                                    <div className="card-body-right">
                                                        <p className="card-text">Fat%: {fatFemale}</p>
                                                        <p className="card-text">Fat Mass: {fatMassFemale}</p>
                                                        <p className="card-text">Lean Mass: {leanMassFemale}</p>
                                                        <p className="card-text">BMI: {bmi}</p>
                                                    </div>
                                                    <Link to = {`edit/${id}`} className = "btn btn-dark btn-sm align-self-end">Update User</Link>
                                                    </div>
                                                )
                                            }return null;
                                            })()}           
                                        </div> : null
                                    }
                                </div>
                            </div>
                        );
                    }
                }
            </UserConsumer>
        )        
    }
}

User.defaultProps = {
    gender : "No information",
    name : "No information",
    age : "No information",
    height : "No information",
    weight : "No information",
    neck : "No information",
    waist : "No information"
}

User.propTypes = {
    gender : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
    age : PropTypes.string.isRequired,
    height : PropTypes.string.isRequired,
    weight : PropTypes.string.isRequired,
    neck : PropTypes.string.isRequired,
    waist : PropTypes.string.isRequired,
    id : PropTypes.string.isRequired
}
export default User;
