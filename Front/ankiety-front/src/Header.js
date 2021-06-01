import React from 'react';
import "./style/Header.css";
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import { Sling as Hamburger } from 'hamburger-react'



class Header extends React.Component {
  render() {
    return (
      <header >
        <div className="header">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="header">
          <Navbar.Brand href="#home">
            <a><img target='_blank' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQky9_US9i2NxXJLO6YO1WVP6W926bGQky5-Q&usqp=CAU" height="40px"
              alt="Vistula University"></img> Vistula University</a>
          </Navbar.Brand>
          <Navbar.Toggle >
            <Hamburger></Hamburger>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <li className="nav-item active">
                <Link to="/">
                  <a type="button" className="nav-link" >Strona Głowna
                              <span className="sr-only">(current)</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" target="blank" href="https://www.vistula.edu.pl/en">Vistula</a>
              </li>
              <li className="nav-item">
                <Link to="/Ankiety">
                  <a className="nav-link" href="/Ankiety">Ankiety</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/NowaAnkieta">
                  <a className="nav-link">NowaAnkieta</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Wyniki">
                  <a className="nav-link">Wyniki Ankiet</a>
                </Link>
              </li>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </div>

      </header>

    )
  }
}

export default Header;