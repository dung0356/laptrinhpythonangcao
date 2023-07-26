import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../contexts/MyContext';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "../styles/Inform.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import PasswordIcon from '@mui/icons-material/Password';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import InventoryIcon from '@mui/icons-material/Inventory';

class Inform extends Component {
  static contextType = MyContext; 
  render() {
    return (
      <div className="border-bottom1">
        <div className="float-left1">
        {this.context.token === '' ?
        <nav>
          <ul>
            <li>
              <AccountCircleIcon />
              <ul>
                <li className='sub-item'>
                  <span className='mater'><PasswordIcon /></span>
                  <p><Link to='/login'>Login</Link></p>
                </li>
                <li className='sub-item'>
                  <span className='mater'><LockOpenIcon /></span>
                  <p><Link to='/signup'>Sign-up</Link></p>
                </li>
                <li className='sub-item'>
                  <span className='mater'><ToggleOnIcon /></span>
                  <p><Link to='/active'>Active</Link></p>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
          :
          <nav>
            <ul>
              <li>
                <AccountCircleIcon />
                <ul>
                  <li className='sub-item'>
                    <span className='mater'><LoginIcon /></span>
                    <p><Link to='/home' onClick={() => this.lnkLogoutClick()}>Logout</Link></p>
                  </li>
                  <li className='sub-item'>
                    <span className='mater'><FileCopyIcon /></span>
                    <p><Link to='/myprofile'>My profile</Link></p>
                  </li>
                  <li className='sub-item'>
                    <span className='mater'><InventoryIcon /></span>
                    <p><Link to='/myorders'>My orders</Link></p>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        }
        </div>
        <div className="cart-right">
          <Link to='/mycart'>
            <Badge badgeContent={this.context.mycart.length} color="primary">
              <ShoppingCartIcon color="action" />
            </Badge>
          </Link> 
        </div>
        <div className="float-clear" />
      </div>
    );
  }

  lnkLogoutClick() {
    this.context.setToken('');
    this.context.setCustomer(null);
    this.context.setMycart([]);
  }
}
export default Inform;


// import {Link} from 'react-router-dom';
// import React, {useState} from 'react';
// import MyContext from '../contexts/MyContext';
// import "../styles/Inform.css";

// function Inform() {
//   const [open, setOpen] = useState(false);
//   return (
//     <div className="App">
//       <div className='menu-container'>
//         <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
//           <img src="data:image/jpeg;base64,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"></img>
//         </div>

//         <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
//           <h3>The Dung<br/><span>Website</span></h3>
//           <ul>
//             <li><Link to='/login'>Login</Link></li>
//             <li><Link to='/signup'>Sign-up</Link></li>
//             <li><Link to='/active'>Active</Link></li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// function DropdownItem(props) {
//   return(
//     <li className = 'dropdownItem'>
//       <img src={props.img}></img>
//       <a> {props.text}</a>
//     </li>
//   );
// }

// export default Inform;


