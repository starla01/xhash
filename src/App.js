import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import Header from "./components/header";
import Home from "./views/home";
import Users from "./views/users";
import Detail from "./views/detail";

const history = createBrowserHistory();

class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <Router history={history}>
        <div>
          <Header />
          <Route
            path="/"
            render={props => {
              return <Home {...props} />;
            }}
            exact
          />
          <Switch>
            <Route exact path="/users" component={Users} />
            <Route exact path="/detail/:user" component={Detail} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
