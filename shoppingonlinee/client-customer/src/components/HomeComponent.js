import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Pizza from "../img/banner.png";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import "../styles/Home.css";
import Footer from "./Footer.js";
import Banner from "../img/ba.jpg"

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newprods: [],
      hotprods: []
    };
  }
  render() {
    const newprods = this.state.newprods.map((item) => {
      return (
        <div key={item._id} className="inline">
          <figure>
            <Link to={'/product/' + item._id}><img src={"data:image/jpg;base64," + item.image} width="300px" height="300px" alt="" /></Link>
            <figcaption className="text-center">{item.name}<br />Giá: {item.price}</figcaption>
          </figure>
          <div className='rate2'>
          <Stack spacing={1}>
            <Rating name="half-rating" defaultValue={5} precision={0.5} />
          </Stack>
          </div>
        </div>
        
      );
    });
    const hotprods = this.state.hotprods.map((item) => {
      return (
        <div key={item._id} className="inline">
          <figure>
            <Link to={'/product/' + item._id}><img src={"data:image/jpg;base64," + item.image} width="300px" height="300px" alt="" /></Link>
            <figcaption className="text-center">{item.name}<br />Giá:{item.price}</figcaption>
          </figure>
          <div className='rate2'>
          <Stack spacing={1}>
            <Rating name="half-rating" defaultValue={5} precision={0.5} />
          </Stack>
          </div>
        </div>
      );
    });
    return (
      <div>
        <img className="pizzaa" src={Pizza}></img>
        <div className="align-center">
          <h3 className="text-center">Sản phẩm mới nhất</h3>
          {newprods}
        </div>
        <h1>About</h1>
        <div className='word'>
          <span>
            Tại cửa hàng của chúng tôi, chúng tôi cam kết mang đến cho quý khách hàng những sản phẩm chất lượng, đa dạng về mẫu mã và tính năng độc đáo từ các hãng di động uy tín trên thị trường. Bất kể bạn đang tìm kiếm một chiếc điện thoại thông minh mới, một chiếc điện thoại cơ bản hay những phụ kiện đi kèm hữu ích, chúng tôi đều sẵn lòng hỗ trợ bạn tìm được lựa chọn tối ưu nhất.
          </span>
          <span>
            Đội ngũ nhân viên của chúng tôi được đào tạo chuyên nghiệp, thân thiện và nhiệt tình, luôn sẵn lòng lắng nghe và tư vấn giúp bạn chọn lựa điện thoại phù hợp với nhu cầu và ngân sách của mình. Chúng tôi hiểu rằng việc chọn một chiếc điện thoại mới có thể là quyết định quan trọng, và do đó, chúng tôi cam kết đem đến trải nghiệm mua sắm dễ dàng, thoải mái và đáng nhớ.
          </span>
          <span>
            Ngoài ra, chúng tôi cũng cung cấp các dịch vụ hậu mãi đáng tin cậy, đảm bảo rằng bạn sẽ luôn được hỗ trợ khi gặp sự cố hoặc cần cập nhật phần mềm mới nhất cho điện thoại của mình.
          </span>
        </div>
        {this.state.hotprods.length > 0 ?
          <div className="align-center">
            <h3 className="text-center">Sản phẩm Hot</h3>
            {hotprods}
          </div>
          : <div />}
          <Footer/>
      </div>
    );
  }
  componentDidMount() {
    this.apiGetNewProducts();
    this.apiGetHotProducts();
  }
  // apis
  apiGetNewProducts() {
    axios.get('/api/customer/products/new').then((res) => {
      const result = res.data;
      this.setState({ newprods: result });
    });
  }
  apiGetHotProducts() {
    axios.get('/api/customer/products/hot').then((res) => {
      const result = res.data;
      this.setState({ hotprods: result });
    });
  }
}
export default Home;