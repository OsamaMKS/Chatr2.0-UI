import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// Scripts
import main from "./assets/js/main";

// Components
import NavBar from "./components/Navigation/NavBar";
import Footer from "./components/Footer";
import RegistrationForm from "./components/RegistrationForm";
import Welcome from "./components/Welcome";
import SuperSecretPage from "./components/SuperSecretPage";
import ChannelForm from "./components/ChannelForm";
import ChannelVeiw from "./components/ChannelVeiw";

import bg from "./wmwp.jpg";

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
            <Route path="/(login|signup)" component={RegistrationForm} />
            <Route path="/welcome" component={Welcome} />
            <Route path="/ChannelVeiw/:channelID" component={ChannelVeiw} />
            <Route path="/private" component={SuperSecretPage} />
            <Route path="/createChannel" component={ChannelForm} />
            <Redirect to="/welcome" />
          </Switch>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
