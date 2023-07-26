import React, { Component } from 'react';
import MyContext from '../contexts/MyContext';
import { Link } from 'react-router-dom';
import Logo from '../img/1.png';
import "../styles/Menu.css";
import { ImHome } from "react-icons/im";
import { BiCategoryAlt } from "react-icons/bi";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BsFillBagCheckFill } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi"; 

const showMenu = (toggleId, navbarId) =>{
  const toggle = document.getElementById(toggleId),
  navbar = document.getElementById(navbarId)

  if(toggle && navbar) {
    toggle.addEventListener('click', ()=>{
      navbar.classList.toggle('show')
    })
  }
}
showMenu('nav-toggle', 'navbar')

class Menu extends Component {
  static contextType = MyContext; // using this.context to access global state
  render() {
    return (
    <body id='body'>
      <div className="l-navbar" id="navbar">
        <div className="nav">
          <div>
            <a href='#' className='nav_logo'>
              <img src={Logo} alt='' className='nav__logo-icon'/>
              <span className='nav__logo-text'>Admin</span>
            </a>
            <div className='nav__toggle' id='nav-toggle'>
            </div>
            <ul className="nav__list">
              <a className='nav__link active'>
                <ImHome />
                <span className='nav__text'><Link to='/admin/home'>Home</Link></span>
              </a>
              <a className='nav__link active'>
                <BiCategoryAlt />
                <span className='nav__text'><Link to='/admin/category'>Category</Link></span>
              </a>
              <a className='nav__link active'>
                <MdProductionQuantityLimits />
                <span className='nav__text'><Link to='/admin/product'>Product</Link></span>
              </a>
              <a className='nav__link active'>
                <BsFillBagCheckFill />
                <span className='nav__text'><Link to='/admin/order'>Order</Link></span>
              </a>
              <a className='nav__link active'>
                <AiOutlineUser />
                <span className='nav__text'><Link to='/admin/customer'>Customer</Link></span>
              </a>
            </ul>
          </div>
          <a className='nav__link active'>
            <BiLogOut />
            <span className='nav__text'><Link to='/admin/home' onClick={() => this.lnkLogoutClick()}>Logout</Link></span>
          </a>
        </div>
        {/* <div className="float-right">
          Hello <b>{this.context.username}</b> | <Link to='/admin/home' onClick={() => this.lnkLogoutClick()}>Logout</Link>
        </div> */}
        <div className="float-clear" />
      </div>
    </body>
    );
  }
  // event-handlers
  lnkLogoutClick() {
    this.context.setToken('');
    this.context.setUsername('');
  }
}
export default Menu;

// import React, { Component } from 'react';
// import MyContext from '../contexts/MyContext';
// import { Link } from 'react-router-dom';

// class Menu extends Component {
//   static contextType = MyContext; // using this.context to access global state
//   render() {
//     return (
//       <div className="border-bottom">
//         <div className="float-left">
//           <ul className="menu">
//             <li className="menu"><Link to='/admin/home'>Home</Link></li>
//             <li className="menu"><Link to='/admin/category'>Category</Link></li>
//             <li className="menu"><Link to='/admin/product'>Product</Link></li>
//             <li className="menu"><Link to='/admin/order'>Order</Link></li>
//             <li className="menu"><Link to='/admin/customer'>Customer</Link></li>
//           </ul>
//         </div>
//         <div className="float-right">
//           Hello <b>{this.context.username}</b> | <Link to='/admin/home' onClick={() => this.lnkLogoutClick()}>Logout</Link>
//         </div>
//         <div className="float-clear" />
//       </div>
//     );
//   }
//   // event-handlers
//   lnkLogoutClick() {
//     this.context.setToken('');
//     this.context.setUsername('');
//   }
// }
// export default Menu;
