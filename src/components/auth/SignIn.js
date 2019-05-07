import React, { Component } from 'react'

class SignIn extends Component {
    state={
        email: '',
        password: ''
    }
    handleChange=(e)=>{
        this.setState({[e.target.id]:e.target.value})
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state)
    }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Sign In</h5>
        <div className="input-field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" onChange={this.handleChange}/>
        </div>
        <div className="input-field">
        <label htmlFor="password" onChange={this.handleChange}>Password</label>
        <input id="password" type="password" onChange={this.handleChange} />
        </div>
        <div className="input-field">
            <label htmlFor="firstname">First Name</label>
            <input id="firstname" type="text" onChange={this.handleChange}/>
        </div>        
        <div className="input-field">
            <label htmlFor="lastname">Last Name</label>
            <input id="lastname" type="text" onChange={this.handleChange}/>
        </div>
        <div className="input-field">
        <button className="btn blue lighten-1 z-depth-0">Login</button>
        </div></form>
      </div>
    )
  }
}

export default SignIn
