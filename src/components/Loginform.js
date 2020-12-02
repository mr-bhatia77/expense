import React,{useState} from 'react';
import {Link} from 'react-router-dom';



export default function Loginform() {

const [name , setName]= useState('');
const [password , setPassword]= useState('');


const loginHandler = () => {
    console.log(name);
    console.log(password);
}


const registerHandler = () => {

}

const inputNameHandler = (e) => {
    setName(e.target.value);
    console.log(name);
}

const inputPassHandler = (e) => {
    setPassword(e.target.value);
    console.log(password);
}

const onSubmithandler = (e) => {
    e.preventDefault();
}


    return (
        <form onSubmit={onSubmithandler}>
             <div className="container">
            <label for="uname"><b>Username</b></label>
            <input type="text" onChange={inputNameHandler}
            placeholder="Enter Username" name="uname" required></input>
            <label for="psw"><b>Password</b></label>
            <input type="password" onChange={inputPassHandler}
             placeholder="Enter Password" name="psw" required></input>
            <Link to = "/"><button className="btn" onClick={loginHandler}>Login</button></Link>
            <button className="btn" onClick={registerHandler}>Register</button>
            </div>
        </form>
    )
}
