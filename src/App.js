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
import ChannelView from "./components/ChannelView";

<<<<<<< HEAD
import bg from "./wmbg.jpg";
import MessagesForm from "./components/MessagesForm";
=======
import bg from "./wmwp.jpg";
>>>>>>> acaa21b17fa3eb9d82797aa667c936fc4c83f610

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
            <Route
              path="/channelView/:channelID/send"
              component={MessagesForm}
            />
            <Route path="/ChannelView/:channelID" component={ChannelView} />
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
