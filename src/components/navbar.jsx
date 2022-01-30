// import React, { Component } from 'react';
// stateless function components
const Navbar = ({totalCOunters}) => {
    return (
        <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
              Navbar <span className="badge badge-pill badge-secondary">{totalCOunters}</span>
          </a>
        </div>
      </nav>
      );
}
// class Navbar extends Component {
//     //state = {  } 
//     render() { 
       
//     }
// }
 
export default Navbar;