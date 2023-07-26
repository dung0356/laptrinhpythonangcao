import axios from 'axios';
import React, { Component } from 'react';
import MyContext from '../contexts/MyContext';
import "../styles/login.css"

class Login extends Component {
  static contextType = MyContext; // using this.context to access global state
  constructor(props) {
    super(props);
    this.state = {
      txtUsername: '',
      txtPassword: ''
    };
  }
  render() {
    if (this.context.token === '') {
      return (
        // <div className="align-valign-center">
        //   <h2 className="text-center">ADMIN LOGIN</h2>
        //   <form>
        //     <table className="align-center">
        //       <tbody>
        //         <tr>
        //           <td>Username</td>
        //           <td><input type="text" value={this.state.txtUsername} onChange={(e) => { this.setState({ txtUsername: e.target.value }) }} /></td>
        //         </tr>
        //         <tr>
        //           <td>Password</td>
        //           <td><input type="password" value={this.state.txtPassword} onChange={(e) => { this.setState({ txtPassword: e.target.value }) }} /></td>
        //         </tr>
        //         <tr>
        //           <td></td>
        //           <td><input type="submit" value="LOGIN" onClick={(e) => this.btnLoginClick(e)} /></td>
        //         </tr>
        //       </tbody>
        //     </table>
        //   </form>
        // </div>
        <div className='wrapper'>
          <h1>Sign Up Admin</h1>
            <form action='#'>
              <input className='but' type='text' placeholder='username' value={this.state.txtUsername} onChange={(e) => { this.setState({ txtUsername: e.target.value }) }}/>
              <input className='but' type='password' placeholder='password' value={this.state.txtPassword} onChange={(e) => { this.setState({ txtPassword: e.target.value }) }}/>
            </form>
            <button className="nuuu" type="submit" value="LOGIN" onClick={(e) => this.btnLoginClick(e)}> Login</button>
        </div>
      );
    }
    return (<div />);
  }
  // event-handlers
  btnLoginClick(e) {
    e.preventDefault();
    const username = this.state.txtUsername;
    const password = this.state.txtPassword;
    if (username && password) {
      const account = { username: username, password: password };
      this.apiLogin(account);
    } else {
      alert('Vui lòng nhập username và password');
    }
  }
  // apis
  apiLogin(account) {
    axios.post('/api/admin/login', account).then((res) => {
      const result = res.data;
      if (result.success === true) {
        this.context.setToken(result.token);
        this.context.setUsername(account.username);
      } else {
        alert(result.message);
      }
    });
  }
}
export default Login;