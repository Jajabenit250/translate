import React, { Component } from 'react';
// import {Link, Redirect} from 'react-router-dom';

export class ContributeToCourse extends Component {
    render() {
        return ( 
            <div className="container-fluid">
                            <div className="section-title text-black text-center">
                                <h2>Contribute By choosing the right meaning</h2>
                                <p>Please spare a minute to choose the right word if you know the meaning in your local language</p>
                            </div>
            <div className="row">
				<div className="col-lg-3 col-md-8">
                            <form className="signup-form">
                                <input type="text" placeholder="Answer" />
                                <button className="site-btn">Submit</button>
                            </form>
                </div>
                 <div className="col-lg-3 col-md-8">
                            <form className="signup-form">
                                <input type="text" placeholder="Answer" />
                                <button className="site-btn">Submit</button>
                            </form>
                </div>
                <div className="col-lg-3 col-md-8">
                            <form className="signup-form">
                                <input type="text" placeholder="Answer" />
                                <button className="site-btn">Submit</button>
                            </form>
                </div>
                 <div className="col-lg-3 col-md-8">
                            <form className="signup-form">
                                <input type="text" placeholder="Answer" />
                                <button className="site-btn">Submit</button>
                            </form>
                </div>
                </div>
           </div>);
    }
}

export default ContributeToCourse;