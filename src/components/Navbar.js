import React from 'react'
import {Link} from 'react-router-dom';
import './Navbar.css'
export default function TodoList() {
    return (
        <div>
            <ul className="y">
                <li className="x"><Link to = "/">Home</Link></li>
                <li className="x"style={{ float: "right" }}>
                    <Link to="/login">Login/Register</Link></li>
            </ul>
        </div>
    )
}
