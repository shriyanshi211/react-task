import { Component } from "react";
import "./Navbar.css";
class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">BoloForms</h1>
        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fa-solid fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          <li className="nav-links">Products</li>
          <li className="nav-links"> Pricing</li>
          <li className="nav-links">Guides</li>
          <li className="nav-links"> About Us</li>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
