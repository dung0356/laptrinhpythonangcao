import axios from 'axios';
import Logo from '../img/logo1.png';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withRouter from '../utils/withRouter';
import SearchIcon from '@mui/icons-material/Search';
import "../styles/Navbar.css";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      txtKeyword: ''
    };
  }
  render() {
    const cates = this.state.categories.map((item) => {
      return (
        <li key={item._id} className="menu"><Link to={'/product/category/' + item._id}>{item.name}</Link></li>
      );
    });
    return (
      <div className="navbar">
        <div className="leftSide">
          <img src={Logo} />
          <div className='hddenLinks'>
            <Link to='/'>HOME</Link>
            {cates}
          </div>
        </div>
        <div className="float-right">
          <form className="search-bar">
            <input type="search" placeholder="Enter keyword" className="keyword" value={this.state.txtKeyword} onChange={(e) => { this.setState({ txtKeyword: e.target.value }) }} />
            <button type="submit" value="SEARCH" onClick={(e) => this.btnSearchClick(e)} />
            <SearchIcon/>
          </form>
        </div>
        <div className="float-clear" />
      </div>
    );
  }
  // event-handlers
  btnSearchClick(e) {
    e.preventDefault();
    this.props.navigate('/product/search/' + this.state.txtKeyword);
  }
  componentDidMount() {
    this.apiGetCategories();
  }
  // apis
  apiGetCategories() {
    axios.get('/api/customer/categories').then((res) => {
      const result = res.data;
      this.setState({ categories: result });
    });
  }
}
export default withRouter(Menu);
