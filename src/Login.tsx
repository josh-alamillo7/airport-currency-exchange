import * as React from 'react';

class Login extends React.Component <{handleLoginClick(input: string): void}, {input: string}> {

  constructor(props: {handleLoginClick(input: string): void}) {
    super(props);
    this.state = {
      input: ''
    };
    this.handlePasswordInputChange = this.handlePasswordInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public handlePasswordInputChange(e: {target: {value: string}}) {
    this.setState({
      input: e.target.value
    });
  }

  public handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    this.props.handleLoginClick.bind(this)(this.state.input);
  }

  public render() {
    return (<div className="Password-input">
      <p>Please enter the correct password to access this application</p>
      <form onSubmit={(e) => {
        this.handleSubmit(e);
      }} className="Password-form">
        <label>
          <input type="text" value={this.state.input} onChange={(event) => {
            this.handlePasswordInputChange(event);
          }}/>
         </label>
         <input type="submit" value="Submit" />
      </form>
      </div>);
  }
}

export default Login;
