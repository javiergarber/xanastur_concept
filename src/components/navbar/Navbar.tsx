import * as React from "react";
import { Component } from "react";
import { Nav } from "./Navbar.style";
export default class Navbar extends Component {
  render() {
    return (
      <Nav>
        <ul>
          <li>Servicios</li>
          <li>Nuestro club</li>
          <li>Contacto</li>
          <li>Galería</li>
          <li>Eventos</li>
          <li>Artesanía</li>
        </ul>
      </Nav>
    );
  }
}
