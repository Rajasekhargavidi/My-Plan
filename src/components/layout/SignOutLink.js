import React from 'react'
import {NavLink} from 'react-router-dom'

const SignOutLink = () => {
    return(
        <div>
        <ul className="right">
        <li><NavLink to='/signup'>Sign Up</NavLink></li>
        <li><NavLink to='/signin'>Log In</NavLink></li>
        </ul>
        </div>
    )
}

export default SignOutLink;