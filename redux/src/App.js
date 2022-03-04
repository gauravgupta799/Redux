import React from 'react';
import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import {incNumber,decNumber,multNumber,devNumber} from './Actions/index';

const App = () => {
    const newState1 = useSelector((state) => state.IncAndDecTheNumber);
    const newState2 = useSelector((state) => state.mulAnddeviTheNumber);
    const dispatch = useDispatch();

  return (
    <div className="container my-5 cont-box">
       <div className="action-1">
            <h2 id ="action-name-1" >
                    <span id="dec">DECREMENT</span>
                    <span id="slash"> / </span>
                    <span id="inc">INCREMENT</span>
                </h2>
                <div className="card-body bg-secondary">
                    <button className="btn btn-danger mx-2" onClick = {() => dispatch(decNumber())}>-</button>
                    <input type ="text" name="quantity" className="quantity" value = {newState1}/>
                    <button className="btn btn-success mx-2" onClick = {() => dispatch(incNumber())}>+</button>
                </div>
       </div>

        <div className="action-2">
            <h2 id ="action-name-2" >
                <span id="dev">DIVISION</span>
                <span id="slash"> / </span>
                <span id="mult">MULTIPLICATION</span>
            </h2>
            <div className="card-body bg-secondary">
                <button className="btn btn-danger mx-2" onClick = {() => dispatch(devNumber())}>/</button>
                <input type ="text" name="quantity" className="quantity" value = {newState2}/>
                <button className="btn btn-success mx-2" onClick = {() => dispatch(multNumber())}>*</button>
            </div>
        </div>
    </div>
  )
}

export default App;