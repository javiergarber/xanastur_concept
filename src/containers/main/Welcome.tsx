import React, { Component, Fragment } from "react";
import { Link } from "react-scroll";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { Cover, Description, Header } from "./welcome.style";

export default class Welcome extends Component {
  render() {
    return (
      <Fragment>
        <Cover>
          {/* <img src="/images/cover.jpeg" alt="" /> */}
          <div id="title">
            <h1>Xanastur</h1>
            <h2>centro canino</h2>
            <Link
              
              activeClass="active"
              to="scrollAnchor"
              smooth={true}
              offset={-70}
              duration={500}
            >
              <img id="down_arrow" src="/icons/down_arrow.svg" alt="" />
            </Link>
          </div>
        </Cover>

        <Navbar></Navbar>

        <Header>
          <div id="scrollAnchor"></div>
          <h1>Xanastur</h1>
          <iframe
            id="intro_video"
            title="GOFFIN - Seremos uno - (AGILITY)-[Shot. Danipov]-[USHH]"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/-qJxN2NPXp0"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Header>
        <Description>
          <section>
            <h2>Bienvenidos</h2>
            <p>
              Os damos la bienvenida a la nueva web del{" "}
              <b>Centro Canino Xanastur</b>.
              <br />
              Entrad, os invitamos a dar una vuelta por la web y así nos
              conoceréis mejor. Tambien puedes hablar con nosotros por nuestro
              metodos de contacto. <br /> Ven e infórmate sin compromiso y
              comienza a disfrutar de actividades divertidas con tu mejor amigo.
              {/* Xanastur, un
            lugar de ensueño para tu mascota */}
            </p>
          </section>
          <section id="quienes_somos">
            <h2>Quienes somos</h2>
            <div>
              <img id="quienes_somos_img" src="/images/image1.jpg" alt="" />
              <p>
                Tu centro canino especializado. Apostamos por la
                <b> educación </b> canina en positivo y por la concienciación
                sobre tenencia de animales. Creemos que la mejor forma es poder
                ofrecer a la gente una
                <b> formación </b>y un centro donde poder disfrutar con sus
                mascotas. Es un forma de promoves la cultura canina en un mundo
                donde tener una mascota está a la orden del día.
              </p>
            </div>
          </section>
        </Description>

        <Footer></Footer>
      </Fragment>
    );
  }
}
