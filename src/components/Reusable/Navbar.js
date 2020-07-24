import React, { Component } from 'react'
import {Link} from "gatsby";
import logo from "../../images/logo.png";
import {FaCartArrowDown, FaHome} from "react-icons/fa"

export default class Navbar extends Component {

  state={
    navbarState: false,
    navbarClass: "collapse navbar-collapse",
    menus:[
      {
        id:1,
        text:"Home",
        url:"/",
      },
      {
        id:2,
        text:"About us",
        url:"/about/",
      },
      {
        id:3,
        text:"Services",
        url:"/service/",
      },
      {
        id:4,
        text:"Contact",
        url:"/contact/",
      },
    ]
  }
  myToggler=()=>{
        this.state.navbarState? 
        this.setState({
          navbarState: false,
          navbarClass: "collapse navbar-collapse"
        }): 
         this.setState({
          navbarState: true,
          navbarClass: "collapse navbar-collapse show"
        })
  }
  


  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-theme text-white" >
          <Link to="/" className="navbar-brand ml-5">
            <img src={logo} alt="logo here" width="60px"  />
          </Link>
          <h3><b>myBooky</b></h3>
        <button className="navbar-toggler" type="button" onClick={this.myToggler}>
          <span className="text-white">Menu</span>
        </button>

        <div className={this.state.navbarClass}>
          <ul className="navbar-nav ml-auto mr-5">
            {this.state.menus.map(menus =>{
              return(
                <li key={menus.id} className="nav-item">
                <Link to={menus.url} className="nav-link text-white">{menus.text}</Link>
                </li>
              
              )
            })}
         
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">
                <FaCartArrowDown className="cart-icon" />
              </Link>
            </li>
          
          </ul>
        </div>
        </nav>


      </div>
    )
  }
}

