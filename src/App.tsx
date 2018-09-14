import * as React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import HeaderButtons from './HeaderButtons';
import Login from './Login';

import password from './config';
import logo from './logo.jpg';

class App extends React.Component <{}, {isLoggedIn: boolean}> {

  constructor(props: object) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
    this.handleLoginClick = this.handleLoginClick.bind(this);
  }

  public handleLoginClick(input: string) {
    let mismatchCounter = 0;
    for (let idx = 0; idx < input.length; idx++) {
      if (input[idx] === password[idx]) {
        mismatchCounter++;
      }
    }
    if (mismatchCounter) {
      this.setState({
        isLoggedIn: true
      });
    }
  }

  public render() {

    const home = () => {
      if (this.state.isLoggedIn) {
        return <div>Home page coming</div>;
      }

      return <Login handleLoginClick={this.handleLoginClick} />;
    };

    const admin = () => {
      if (this.state.isLoggedIn) {
        return <div>Admin page coming</div>;
      }

      return <Login handleLoginClick={this.handleLoginClick} />;
    };

    const exact: boolean = true;

    return (<Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Airport Currency Exchange Office</h1>
            <HeaderButtons />
          </header>

          <Route exact={exact} path="/" component={home}/>
          <Route path="/home" component={home}/>
          <Route path="/admin" component={admin}/>

        </div>
      </Router>
    );
  }
}

export default App;
