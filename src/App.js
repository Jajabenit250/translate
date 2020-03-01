import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from './layouts/homepage';
import Login from './components/account/login';
import SignUp from './components/account/signup';
import Header from './components/general/header';
import Footer from './components/general/footer';
import LearnHomepage from './layouts/learnHomepage'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <div>
              <Homepage />
            </div>
          </Route>
          <Route path="/account/login">
            <Header /> 
            <br />
            <Login />
            <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
            <Footer /> 
          </Route>
          <Route path="/account/signup">
            <Header /> 
            <br />
            <SignUp />
            <br />
            <Footer /> 
          </Route>
          <Route exact path="/music">
          <Header /> 
            <br />
            <h1> Music Page </h1>
            <br />
            <Footer /> 
          </Route>
          <Route path="/film">
          <Header /> 
            <br />
            <h1> Film Page sort by country </h1>
            <br />
            <Footer /> 
          </Route>
          <Route exact path="/learn">
          <LearnHomepage />
          </Route>
          <Route path="/visit">
          <Header /> 
            <br />
            <h1> This is Culture Page </h1>
            <br />
            <Footer /> 
          </Route>
          <Route path="/travel">
          <Header /> 
            <br />
            <h1> This is Travel Page </h1>
            <br />
            <Footer /> 
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
