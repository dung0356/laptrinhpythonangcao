// import axios from 'axios';
// import React, { Component } from 'react';
// import withRouter from '../utils/withRouter';
// import MyContext from '../contexts/MyContext';
// import "../styles/hight.css";
// import Rating from '@mui/material/Rating';
// import Stack from '@mui/material/Stack';

// class ProductDetail extends Component {
//   static contextType = MyContext; 
//   constructor(props) {
//     super(props);
//     this.state = {
//       product: null,
//       txtQuantity: 1
//     };
//   }
//   render() {
//     const prod = this.state.product;
//     if (prod != null) {
//       return (
//         <div className="align-center">
//           <h3 className="text-center">PRODUCT DETAILS</h3>
//           <figure className="caption-right">
//             <img src={"data:image/jpg;base64," + prod.image} width="400px" height="400px" alt="" />
//           </figure>
//           <div className='hight'>
//               <form>
//                   <tbody>
//                     <tr>
//                       <td align="right">Name:</td>
//                       <td>{prod.name}</td>
//                     </tr>
//                     <tr>
//                       <td align="right">Price:</td>
//                       <td>{prod.price}</td>
//                     </tr>
//                     <tr>
//                       <td align="right">Category:</td>
//                       <td>{prod.category.name}</td>
//                     </tr>
//                     <tr>
//                       <td align="right">Quantity:</td>
//                       <td><input type="number" min="1" max="99" value={this.state.txtQuantity} onChange={(e) => { this.setState({ txtQuantity: e.target.value }) }} /></td> 
//                     </tr>
//                   </tbody>
//               </form>
          // <div className='button1'>
          //   <button className='hi' type="submit" value="ADD TO CART" onClick={(e) => this.btnAdd2CartClick(e)}>Add to cart</button>
          // </div>
//           </div>
//         </div>
//       );
//     }
//     return (<div />);
//   }
 
//    btnAdd2CartClick(e) {
//     e.preventDefault();
//     const product = this.state.product;
//     const quantity = parseInt(this.state.txtQuantity);
//     if (quantity) {
//       const mycart = this.context.mycart;
//       const index = mycart.findIndex(x => x.product._id === product._id); // check if the _id exists in mycart
//       if (index === -1) { 
//         const newItem = { product: product, quantity: quantity };
//         mycart.push(newItem);
//       } else { 
//         mycart[index].quantity += quantity;
//       }
//       this.context.setMycart(mycart);
//       alert('OK BABY!');
//     } else {
//       alert('Please input quantity');
//     }
//   }
//   componentDidMount() {
//     const params = this.props.params;
//     this.apiGetProduct(params.id);
//   }
  
//   apiGetProduct(id) {
//     axios.get('/api/customer/products/' + id).then((res) => {
//       const result = res.data;
//       this.setState({ product: result });
//     });
//   }
// }
// export default withRouter(ProductDetail);

import axios from 'axios';
import React, { Component } from 'react';
import withRouter from '../utils/withRouter';
import MyContext from '../contexts/MyContext';
import "../styles/productdetail.css";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';


class ProductDetail extends Component {
  static contextType = MyContext; // using this.context to access global state
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      txtQuantity: 1
    };
  }
  render() {
    const prod = this.state.product;
    if (prod != null) {
      return (
        <div className="align-center">
          <h3 className="text-center">THÔNG TIN SẢN PHẨM</h3>
          <figure className="caption-right">
            <img src={"data:image/jpg;base64," + prod.image} width="400px" height="400px" alt="" />
            <figcaption>
            <div className='inf'>
              <form>
                <table>
                  <tbody>
                    {/* <tr>
                      <td align="right">ID:</td>
                      <td>{prod._id}</td>
                    </tr> */}
                    <tr>
                      <td1 align="right">Tên sản phẩm:</td1>
                      <td1>{prod.name}</td1>
                    </tr>
                    <tr>
                      <td1 align="right">Giá: </td1>
                      <td1 className="mau">{prod.price}</td1>
                    </tr>
                    <tr>
                      <td1 align="right">Loại sản phẩm: </td1>
                      <td1>{prod.category.name}</td1>
                    </tr>
                    <tr>
                      <td1 align="right">Số lượng: </td1>
                      <td1><input type="number" min="1" max="99" value={this.state.txtQuantity} onChange={(e) => { this.setState({ txtQuantity: e.target.value }) }} /></td1> 
                    </tr>
                    <div className='rate1'>
                      <span className='vote'>Đánh giá:</span>
                      <Stack spacing={1}>
                        <Rating name="half-rating" defaultValue={5} precision={0.5} />
                      </Stack>
                    </div>
                    {/* <tr>
                      <td></td>
                      <td><input type="submit" value="ADD TO CART" onClick={(e) => this.btnAdd2CartClick(e)} /></td>
                    </tr> */}
                  </tbody>
                </table>
              </form>
              <div className='button1'>
                <button className='hi' type="submit" value="ADD TO CART" onClick={(e) => this.btnAdd2CartClick(e)}>Thêm vào giỏ hàng</button>
              </div>
              </div>
            </figcaption>
          </figure>
        </div>
      );
    }
    return (<div />);
  }
   // event-handlers
   btnAdd2CartClick(e) {
    e.preventDefault();
    const product = this.state.product;
    const quantity = parseInt(this.state.txtQuantity);
    if (quantity) {
      const mycart = this.context.mycart;
      const index = mycart.findIndex(x => x.product._id === product._id); // check if the _id exists in mycart
      if (index === -1) { // not found, push newItem
        const newItem = { product: product, quantity: quantity };
        mycart.push(newItem);
      } else { // increasing the quantity
        mycart[index].quantity += quantity;
      }
      this.context.setMycart(mycart);
      alert('Thêm vào giỏ hàng thành công!');
    } else {
      alert('Vui lòng nhập số lượng');
    }
  }
  componentDidMount() {
    const params = this.props.params;
    this.apiGetProduct(params.id);
  }
  // apis
  apiGetProduct(id) {
    axios.get('/api/customer/products/' + id).then((res) => {
      const result = res.data;
      this.setState({ product: result });
    });
  }
}
export default withRouter(ProductDetail);