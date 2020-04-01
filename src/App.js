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

import bg from "./assets/images/wmbg.jpg";
import MessagesForm from "./components/MessagesForm";

class App extends Component {
  componentDidMount() {
    main();
  }

  render() {
    return (
      <div
        className="content-wrapper text-dark text-center"
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
            {/* Try to make this contain the channel name again - it's better UX in the frontend */}
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
