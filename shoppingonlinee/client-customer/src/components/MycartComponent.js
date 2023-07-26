import React, { Component } from 'react';
import MyContext from '../contexts/MyContext';
import CartUtil from '../utils/CartUtil';
import axios from 'axios';
import withRouter from '../utils/withRouter';
import "../styles/Mycart.css";
import { MdOutlinePayments } from "react-icons/md"; 

class Mycart extends Component {
  static contextType = MyContext; // using this.context to access global state
  render() {
    const mycart = this.context.mycart.map((item, index) => {
      return (
        <tr key={item.product._id} className="datatable">
          <td>{index + 1}</td>
          <td>{item.product._id}</td>
          <td>{item.product.name}</td>
          <td>{item.product.category.name}</td>
          <td><img src={"data:image/jpg;base64," + item.product.image} width="70px" height="70px" alt="" /></td>
          <td>{item.product.price}</td>
          <td>{item.quantity}</td>
          <td>{item.product.price * item.quantity}</td>
          <td><span className="link" onClick={() => this.lnkRemoveClick(item.product._id)}>Hoàn tác</span></td>
        </tr>
      );
    });
    return (
      <div className="align-center">
        <h3 className="text-center">Danh sách sản phẩm cần thanh toán</h3>
        <table className="datatable" border="1">
          <tbody>
            <tr className="datatable">
              <th>No.</th>
              <th>ID</th>
              <th>Tên sản phẩm</th>
              <th>Loại sản phẩm</th>
              <th>Hình sản phẩm</th>
              <th>Giá tiền</th>
              <th>Số lượng</th>
              <th>Tổng</th>
              <th>Hoạt động</th>
            </tr>
            {mycart}
          </tbody>
        </table>
        <div className='checkout'>
          <td className='quaphai'>Tổng tiền bạn cần thanh toán là: </td>
          <td className='maugia'>{CartUtil.getTotal(this.context.mycart)}</td>
          < button className="link1" onClick={() => this.lnkCheckoutClick()}>Thanh toán  <MdOutlinePayments /></button>
        </div>
      </div>
    );
  }
    // event-handlers
  lnkRemoveClick(id) {
    const mycart = this.context.mycart;
    const index = mycart.findIndex(x => x.product._id === id);
    if (index !== -1) { // found, remove item
      mycart.splice(index, 1);
      this.context.setMycart(mycart);
    }
  }

  lnkCheckoutClick() {
    if (window.confirm('Bạn có chắc là muốn thanh toán không?')) {
      if (this.context.mycart.length > 0) {
        const total = CartUtil.getTotal(this.context.mycart);
        const items = this.context.mycart;
        const customer = this.context.customer;
        if (customer) {
          this.apiCheckout(total, items, customer);
        } else {
          this.props.navigate('/login');
        }
      } else {
        alert('Giỏ hàng của bạn trống trơn');
      }
    }
  }
  // apis
  apiCheckout(total, items, customer) {
    const body = { total: total, items: items, customer: customer };
    const config = { headers: { 'x-access-token': this.context.token } };
    axios.post('/api/customer/checkout', body, config).then((res) => {
      const result = res.data;
      if (result) {
        alert('Sản phẩm đang chờ được thanh toán');
        this.context.setMycart([]);
        this.props.navigate('/home');
      } else {
        alert('Xin lỗi bạn');
      }
    });
  }
}
export default withRouter(Mycart);