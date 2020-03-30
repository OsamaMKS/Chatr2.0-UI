import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// Scripts
import main from "./assets/js/main";

// Components
import NavBar from "./components/Navigation/NavBar";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import RegistrationForm from "./components/RegistrationForm";
import SuperSecretPage from "./components/SuperSecretPage";
import Login from "./components/LoginForm";

import bg from "./wmbg.jpg";

/*
 *
 * The routes and components for login and signup don't need to be split.
 * You can keep them as they were before, and make the joint component dynamic.
 *
 */

class App extends Component {
  componentDidMount() {
    main();
  }

  render() {
    return (
      <div
        className="content-wrapper text-white"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div style={{ background: "rgba(255, 255, 255, 0)" }}>
          <NavBar />
          <Switch>
            <Route path="/welcome" component={Welcome} />
            <Route path="/signup" component={RegistrationForm} />
            <Route path="/login" component={Login} />
            <Route path="/private" component={SuperSecretPage} />
            <Redirect to="/welcome" />
          </Switch>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
