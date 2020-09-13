import * as React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, WelcomeLink } from "./Navbar.style";

export default class Navbar extends Component {
  render() {
    return (
      <Nav>
        <WelcomeLink>
          <Link className="customLink" to="/">
            <img src={require("./assets/logo_xanastur.jpg")} alt="" />
          </Link>
        </WelcomeLink>
        <ul>
          <li>
            <Link className="customLink" to="/servicios">
              Servicios
            </Link>
          </li>
          <li>
            <Link className="customLink" to="/club">
              Nuestro club
            </Link>
          </li>

          <li>
            <Link className="customLink" to="/galeria">
              Galería
            </Link>
          </li>
          <li>
            <Link className="customLink" to="/eventos">
              Eventos
            </Link>
          </li>
          <li>
            <Link className="customLink" to="/artesania">
              Artesanía
            </Link>
          </li>
          <li>
            <Link className="customLink" to="/contacto">
              Contacto
            </Link>
          </li>
        </ul>
      </Nav>
    );
  }
}
