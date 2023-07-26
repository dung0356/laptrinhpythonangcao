import axios from 'axios';
import React, { Component } from 'react';
import MyContext from '../contexts/MyContext';
import withRouter from '../utils/withRouter';
import "../styles/Login.css";

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
    return (
      // <div className="home">
      //   <h2 className="text-center">CUSTOMER LOGIN</h2>
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
      <section>
        <div className='form-box'>
          <div className='form-value'>
            <form action=''>
              <h2>Login</h2>
              <div className='inputbox'>
                <input type="text" value={this.state.txtUsername} onChange={(e) => { this.setState({ txtUsername: e.target.value }) }} />
                <label for="">Username</label>
              </div>
              <div className='inputbox'>
                <input type="password" value={this.state.txtPassword} onChange={(e) => { this.setState({ txtPassword: e.target.value }) }} />
                <label for="">Password</label>
              </div>
              <div className='forget'>
                <label for=""><input type='checkbox'></input> <label for="">Remember me</label> <a href='#'>Forget Password</a></label>
              </div>
              <button type="submit" value="LOGIN" onClick={(e) => this.btnLoginClick(e)}>Login</button>
              <div className='register'>
                <p>Chưa có tài khoản? <a href='http://localhost:3001/signup'>Đăng ký</a></p>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
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
      alert('Please input username and password');
    }
  }
  // apis
  apiLogin(account) {
    axios.post('/api/customer/login', account).then((res) => {
      const result = res.data;
      if (result.success === true) {
        this.context.setToken(result.token);
        this.context.setCustomer(result.customer);
        this.props.navigate('/home');
      } else {
        alert(result.message);
      }
    });
  }
}
export default withRouter(Login);