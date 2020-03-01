import React, { Component } from 'react';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';

export default class SignUp extends Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        redirect: false,
        authError: false,
        isLoading: false,
    };

    handleEmailChange = event => {
        this.setState({ email: event.target.value });
    };
    handlePwdChange = event => {
        this.setState({ password: event.target.value });
    };
    handleFirstNameChange = event => {
        this.setState({ firstName: event.target.value });
    };
    handleLastNameChange = event => {
        this.setState({ lastName: event.target.value });
    };
    

    handleSubmit = event => {
        event.preventDefault();
        this.setState({isLoading: true});
        const url = 'https://soma-backend.herokuapp.com/soma/auth/signup';
        const email = this.state.email;
        const password = this.state.password;
        const firstName = this.state.firstName;
        const lastName = this.state.lastName;
        let bodyFormData ={
            "firstName" : firstName,
            "lastName": lastName,
            "email" : email,
            "password" : password
          }
          axios.post(url, bodyFormData)
          .then(response => {
              this.setState({isLoading: false});
              if (response.data.status !== 201) {
                  this.setState({redirect: false, authError: false});
              }else {
                  this.setState({redirect: true, authError: true});
              }
          })
          .catch(error => {
              console.log(error);
              this.setState({ authError: true, isLoading: false });
          });
    };

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to="/learn" />
        }
    };

    render() {
        const isLoading = this.state.isLoading;
        return (
            <div className ="row">
            <div className="col-sm-7 d-none d-lg-block d-xl-block"></div>
             <div className="col">
                <div className="card">
                <div className="card-body">
                    <Link href="" className="float-right btn btn-outline-primary" to={'/account/login'}> Sign In </Link>
                    <h4 className="card-title mb-4 mt-1"> Sign Up </h4>
                    <p>
                        <a href="" className="btn btn-block btn-outline-danger"> <i className="fab fa-google"></i>   SignUp via Google</a>
                        <a href="" className="btn btn-block btn-outline-primary"> <i className="fab fa-facebook-f"></i>   SignUp via facebook</a>
                    </p>
                    <hr />
                    <form className="signup-form" onSubmit={this.handleSubmit}>
                                <div>
                                    <label htmlFor="inputFirstName">First Name</label>
                                    <input type="text" id="inputFirstName" className="form-control" placeholder="add first name"  name="firstName" onChange={this.handleFirstNameChange} required/>              
                                </div>
                                <div>
                                    <label htmlFor="inputLastName">Last Name</label>
                                    <input type="text" id="inputLastName" className="form-control" placeholder="add last name"  name="lastName" onChange={this.handleLastNameChange} required/>
                                </div>
                                <div>
                                    <label htmlFor="inputEmail">Email address</label>
                                    <input id="inputEmail" className="form-control" placeholder="Email address" type="text" name="email" onChange={this.handleEmailChange} required/>
                                    
                                </div>
                                <div >
                                    <label htmlFor="inputPassword">Password</label>
                                    <input type="password" className="form-control" id="inputPassword" placeholder="******"  name="password" onChange={this.handlePwdChange} required/>
                                    
                                </div>
                                <br />
                                <button className="btn btn-primary btn-block" type="submit" disabled={this.state.isLoading ? true : false}>Register &nbsp;&nbsp;&nbsp;
                                    {isLoading ? (
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    ) : (
                                        <span></span>
                                    )}
                                </button>
                        </form>
                </div>
            </div>
            {this.renderRedirect()}
        </div>
        </div>
            )
    }
}
