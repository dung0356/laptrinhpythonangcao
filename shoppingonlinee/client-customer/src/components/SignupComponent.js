import axios from 'axios';
import React, { Component } from 'react';
import "../styles/Signup.css";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtUsername: '',
      txtPassword: '',
      txtName: '',
      txtPhone: '',
      txtEmail: ''
    };
  }
  render() {
    return (
      // <div className="align-center">
      //   <h2 className="text-center">SIGN-UP</h2>
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
      //           <td>Name</td>
      //           <td><input type="text" value={this.state.txtName} onChange={(e) => { this.setState({ txtName: e.target.value }) }} /></td>
      //         </tr>
      //         <tr>
      //           <td>Phone</td>
      //           <td><input type="tel" value={this.state.txtPhone} onChange={(e) => { this.setState({ txtPhone: e.target.value }) }} /></td>
      //         </tr>
      //         <tr>
      //           <td>Email</td>
      //           <td><input type="email" value={this.state.txtEmail} onChange={(e) => { this.setState({ txtEmail: e.target.value }) }} /></td>
      //         </tr>
      //         <tr>
      //           <td></td>
      //           <td><input type="submit" value="SIGN-UP" onClick={(e) => this.btnSignupClick(e)} /></td>
      //         </tr>
      //       </tbody>
      //     </table>
      //   </form>
      // </div>
      <section>
      <div className='form-box1'>
        <div className='form-value'>
          <form action=''>
            <h2>Sign-up</h2>
            <div className='inputbox'>
              <input type="text" placeholder="username" value={this.state.txtUsername} onChange={(e) => { this.setState({ txtUsername: e.target.value }) }} />
              <label for="">Username</label>
            </div>
            <div className='inputbox'>
              <input type="password" placeholder="password" value={this.state.txtPassword} onChange={(e) => { this.setState({ txtPassword: e.target.value }) }} />
              <label for="">Password</label>
            </div>
            <div className='inputbox'>
              <input type="text" placeholder="name" value={this.state.txtName} onChange={(e) => { this.setState({ txtName: e.target.value }) }} />
              <label for="">Name</label>
            </div>
            <div className='inputbox'>
              <input type="text" placeholder="phone" value={this.state.txtPhone} onChange={(e) => { this.setState({ txtPhone: e.target.value }) }} />
              <label for="">Phone</label>
            </div>
            <div className='inputbox'>
              <input type="text" placeholder="email" value={this.state.txtEmail} onChange={(e) => { this.setState({ txtEmail: e.target.value }) }} />
              <label for="">Email</label>
            </div>
            <button type="submit" value="SIGN-UP" onClick={(e) => this.btnSignupClick(e)}>Đăng ký</button>
            <div className='register'>
              <p>Đã có tài khoản? <a href='http://localhost:3001/login'>Đăng nhập ở đây</a></p>
            </div>
          </form>
        </div>
      </div>
    </section>

    );
  }
  // event-handlers
  btnSignupClick(e) {
    e.preventDefault();
    const username = this.state.txtUsername;
    const password = this.state.txtPassword;
    const name = this.state.txtName;
    const phone = this.state.txtPhone;
    const email = this.state.txtEmail;
    if (username && password && name && phone && email) {
      const account = { username: username, password: password, name: name, phone: phone, email: email };
      this.apiSignup(account);
    } else {
      alert('Please input username and password and name and phone and email');
    }
  }
  // apis
  apiSignup(account) {
    axios.post('/api/customer/signup', account).then((res) => {
      const result = res.data;
      alert(result.message);
    });
  }
}
export default Signup;