import React, { Component } from 'react';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';

export default class SignUp extends Component {

    state = {
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

    handleSubmit = event => {
        event.preventDefault();
        this.setState({isLoading: true});
        const url = 'https://soma-backend.herokuapp.com/soma/auth/signin';
        const email = this.state.email;
        const password = this.state.password;
        let bodyFormData = {
            "email" : email,
            "password" : password
          }
        axios.post(url, bodyFormData)
            .then(response => {
                if (response.data.status === 201) {
                    localStorage.setItem('token', response.data.token);
                    this.setState({redirect: true, isLoading: false});
                    localStorage.setItem('isLoggedIn', true);
                }
            })
            .catch(error => {
                console.log(error);
                this.setState({authError: true, isLoading: false});
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
                    <Link href="" className="float-right btn btn-outline-primary" to={'/account/signup'}> Sign Up </Link>
                    <h4 className="card-title mb-4 mt-1"> Sign In </h4>
                    <p>
                        <a href="" className="btn btn-block btn-outline-danger"> <i className="fab fa-google"></i>   Sign In via Google</a>
                        <a href="" className="btn btn-block btn-outline-primary"> <i className="fab fa-facebook-f"></i>   Sign In via facebook</a>
                    </p>
                    <hr />
                <form className="signup-form" onSubmit={this.handleSubmit}>
                    <div>
                                    <label htmlFor="inputEmail">Email address</label>
                                    <input id="inputEmail" className="form-control" placeholder="Email address" type="text" name="email" onChange={this.handleEmailChange} required/>
                                    
                    </div>
                    <div >
                                    <label htmlFor="inputPassword">Password</label>
                                    <input type="password" className="form-control" id="inputPassword" placeholder="******"  name="password" onChange={this.handlePwdChange} required/>
                                    
                    </div>                                    
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block" disabled={this.state.isLoading ? true : false}> Sign In &nbsp;&nbsp;&nbsp;
                                    {isLoading ? (
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    ) : (
                                        <span></span>
                                    )}
                            </button>
                        </div>
                    </div>
                    <div className="col-md-6 text-right">
                        <a className="small" href="#">Forgot password?</a>
                    </div>                                            
                </div>                                                                
            </form>
            <br /> <br />
            </div>
            </div>
        </div>
        {this.renderRedirect()}
        </div>
            )
    }
}
