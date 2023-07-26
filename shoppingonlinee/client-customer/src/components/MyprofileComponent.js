import axios from 'axios';
import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import MyContext from '../contexts/MyContext';
import "../styles/Myprofile.css";

class Myprofile extends Component {
  static contextType = MyContext; // using this.context to access global state
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
    if (this.context.token === '') return (<Navigate replace to='/login' />);
    return (
      // <div className="align-center">
      //   <h3 className="text-center">MY PROFILE</h3>
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
      //           <td><input type="submit" value="UPDATE" onClick={(e) => this.btnUpdateClick(e)} /></td>
      //         </tr>
      //       </tbody>
      //     </table>
      //   </form>
      // </div>
      <div className='body'>
        <div className='container'>
          <div className='title'>Hồ sơ của tôi</div>
          <form action='#'>
            <div className='user-details'>
              <div className='input-box'>
                <span className='details'>Username</span>
                <input type="text"  placeholder="nhập tên tài khoản muốn đổi" value={this.state.txtUsername} onChange={(e) => { this.setState({ txtUsername: e.target.value }) }}/>
              </div>
              <div className='input-box'>
                <span className='details'>password</span>
                <input type="password" placeholder="nhập mật khẩu muốn đổi" value={this.state.txtPassword} onChange={(e) => { this.setState({ txtPassword: e.target.value }) }} />
              </div>
              <div className='input-box'>
                <span className='details'>Name</span>
                <input type="text" placeholder='nhập tên muốn đổi' value={this.state.txtName} onChange={(e) => { this.setState({ txtName: e.target.value }) }} />
              </div>
              <div className='input-box'>
                <span className='details'>Phone</span>
                <input type="tel" placeholder='nhập số điện thoại muốn đổi' value={this.state.txtPhone} onChange={(e) => { this.setState({ txtPhone: e.target.value }) }} />
              </div>
              <div className='input-box'>
                <span className='details'>Email</span>
                <input type="email" placeholder='nhập Email muốn đổi' value={this.state.txtEmail} onChange={(e) => { this.setState({ txtEmail: e.target.value }) }} />
              </div>
            </div>
            <div className='gender-details'>
              <input type='radio' name='gender' id='dot-1'></input>
              <input type='radio' name='gender' id='dot-2'></input>
              <input type='radio' name='gender' id='dot-3'></input>
              <span className='gender-title'>Gender</span>
              <div className='category'>
                <label for="dot-1">
                  <span className='dot one'></span>
                  <span className='gender'>Male</span>
                </label>
                <label for="dot-2">
                  <span className='dot two'></span>
                  <span className='gender'>Female</span>
                </label>
                <label for="dot-3">
                  <span className='dot three'></span>
                  <span className='gender'>Prefer not to say</span>
                </label>
              </div>
            </div>
            <div className='button'>
              <input type="submit" value="UPDATE" onClick={(e) => this.btnUpdateClick(e)}></input>
            </div>
          </form>
        </div>
      </div>
    );
  }
  componentDidMount() {
    if (this.context.customer) {
      this.setState({
        txtUsername: this.context.customer.username,
        txtPassword: this.context.customer.password,
        txtName: this.context.customer.name,
        txtPhone: this.context.customer.phone,
        txtEmail: this.context.customer.email
      });
    }
  }
  // event-handlers
  btnUpdateClick(e) {
    e.preventDefault();
    const username = this.state.txtUsername;
    const password = this.state.txtPassword;
    const name = this.state.txtName;
    const phone = this.state.txtPhone;
    const email = this.state.txtEmail;
    if (username && password && name && phone && email) {
      const customer = { username: username, password: password, name: name, phone: phone, email: email };
      this.apiPutCustomer(this.context.customer._id, customer);
    } else {
      alert('Please input username and password and name and phone and email');
    }
  }
  // apis
  apiPutCustomer(id, customer) {
    const config = { headers: { 'x-access-token': this.context.token } };
    axios.put('/api/customer/customers/' + id, customer, config).then((res) => {
      const result = res.data;
      if (result) {
        alert('Cập nhật thành công!');
        this.context.setCustomer(result);
      } else {
        alert('Không cập nhật thành công!');
      }
    });
  }
}
export default Myprofile;