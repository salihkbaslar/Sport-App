import back from "../images/back.png"
import chest from "../images/chest.png"
import shoulder from "../images/shoulder.png"
import arm from "../images/arm.png"
import leg from "../images/leg.png"
import abs from "../images/abs.png"
import React from 'react';
import { Link } from "react-router-dom"


const Workouts = () => {
    return (
        <div>
            <div className="flex d-flex justify-content-around m-5">
                <div className="card col-md-3">
                    <img src={chest} alt="Card" />
                    <div className="card-body">
                        <h5 className="card-title">Chest</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, quod.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <Link to = {`chest-hypertrophy`} className="btn btn-primary d-flex justify-content-center">Hypertrophy</Link>
                        </li>
                        <li className="list-group-item">
                            <Link to = {`chest-strenght`} className="btn btn-primary d-flex justify-content-center">Strength</Link>
                        </li>
                        <li className="list-group-item">
                            <Link to = {`chest-endurance`} className="btn btn-primary d-flex justify-content-center">Endurance</Link>
                        </li>
                    </ul>
                </div>
                <div className="card col-md-3">
                    <img src={back} alt="Card" />
                    <div className="card-body">
                        <h5 className="card-title">Back</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, quod.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <Link to = {`back-hypertrophy`} className="btn btn-primary d-flex justify-content-center">Hypertrophy</Link>
                        </li>
                        <li className="list-group-item">
                            <Link to = {`back-strenght`} className="btn btn-primary d-flex justify-content-center">Strength</Link>
                        </li>
                        <li className="list-group-item">
                            <Link to = {`back-endurance`} className="btn btn-primary d-flex justify-content-center">Endurance</Link>
                        </li>
                    </ul>
                </div>
                <div className="card col-md-3">
                    <img src={shoulder} alt="Card" />
                    <div className="card-body">
                        <h5 className="card-title">Shoulders</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, quod.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <Link to = {`shoulder-hypertrophy`} className="btn btn-primary d-flex justify-content-center">Hypertrophy</Link>
                        </li>
                        <li className="list-group-item">
                            <Link to = {`shoulder-strenght`} className="btn btn-primary d-flex justify-content-center">Strength</Link>
                        </li>
                        <li className="list-group-item">
                        <Link to = {`shoulder-endurance`} className="btn btn-primary d-flex justify-content-center">Endurance</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex d-flex justify-content-around m-5">
                <div className="card col-md-3">
                    <img src={arm} alt="Card" />
                    <div className="card-body">
                        <h5 className="card-title">Arms</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, quod.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <Link to = {`arm-hypertrophy`} className="btn btn-primary d-flex justify-content-center">Hypertrophy</Link>
                        </li>
                        <li className="list-group-item">
                            <Link to = {`arm-strenght`} className="btn btn-primary d-flex justify-content-center">Strength</Link>
                        </li>
                        <li className="list-group-item">
                            <Link to = {`arm-endurance`} className="btn btn-primary d-flex justify-content-center">Endurance</Link>
                        </li>
                    </ul>
                </div>
                <div className="card col-md-3">
                    <img src={leg} alt="Card" />
                    <div className="card-body">
                        <h5 className="card-title">Legs</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, quod.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <Link to = {`leg-hypertrophy`} className="btn btn-primary d-flex justify-content-center">Hypertrophy</Link>
                        </li>
                        <li className="list-group-item">
                            <Link to = {`leg-strenght`} className="btn btn-primary d-flex justify-content-center">Strength</Link>
                        </li>
                        <li className="list-group-item">
                            <Link to = {`leg-endurance`} className="btn btn-primary d-flex justify-content-center">Endurance</Link>
                        </li>
                    </ul>
                </div>
                <div className="card col-md-3">
                    <img src={abs} alt="Card" />
                    <div className="card-body">
                        <h5 className="card-title">Abs</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, quod.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <Link to = {`abs-hypertrophy`} className="btn btn-primary d-flex justify-content-center">Hypertrophy</Link>
                        </li>
                        <li className="list-group-item">
                            <Link to = {`abs-strenght`} className="btn btn-primary d-flex justify-content-center">Strength</Link>
                        </li>
                        <li className="list-group-item">
                            <Link to = {`abs-endurance`} className="btn btn-primary d-flex justify-content-center">Endurance</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Workouts;
