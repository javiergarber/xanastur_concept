import * as React from "react";
import { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { PageTitle, ServicesPage } from "./Services.style";
export default class Services extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <PageTitle>Qué te enseñaremos</PageTitle>
        <ServicesPage>
          <section>
            <h2>Obediencia/Educación</h2>
            <div className="content">
              <ScrollAnimation animateOnce animateIn="left">
                <img
                  className=""
                  src={require("./assets/obediencia.jpeg")}
                  alt=""
                />
              </ScrollAnimation>
              <ScrollAnimation animateOnce animateIn="right">
                <p className="">
                  Todos quieren hacer "eso tan divertido que haceis en pista,
                  con vuestros perros" pero, para conseguir eso, primero, hay
                  que pasar por una educación. Por eso, en nuestro centro, antes
                  de entrar en la pista de competición, os damos unas pautas
                  básicas de control y educación de vuestros perros. Pautas que
                  os sirven para el día a día, no sólo para el deporte. Quieto,
                  Sentado, Dar la pata, Girar, Rodar, Llamada, Rastro, etc...
                  <br /> También, os preparamos para pasar los test de
                  sociabilidad/aptitudes caninas exigidos en las disciplinas en
                  las que competimos actualmente. Inscríbete y aprende a
                  disfrutar de la compañía de tu mejor amigo, junto con más
                  compañeros de escuela. Aprenderás a entenderle, a comunicarte
                  con él y podrás empezar a disfrutar y a divertirte con tu
                  perro.{" "}
                </p>
              </ScrollAnimation>
            </div>
          </section>
          <section>
            <h2 className="titleRight">Agility</h2>
            <div className="content">
              <ScrollAnimation animateOnce animateIn="left">
                {" "}
                <p className="">
                  Para el que aún no conozca el agility, se trata de un deporte
                  de equipo formado por un guia y un perro. Ambos, han de
                  realizar un recorrido compuesto de varios obstáculos colocados
                  por un juez en el menor tiempo posible con el menor número de
                  faltas. De esta forma, el equipo ha de demostrar en la pista
                  una gran complicidad y comunicación para poder llegar a lo más
                  alto.
                  <br />
                  Aunque somos un equipo de competidores jóvenes, algunos de
                  nuestros perros nos han podido dar sus mejores trabajos junto
                  a sus guias teniendo en cuenta las condiciones físicas de
                  algunos de ellos. Es un deporte con el que realizas una
                  conexión enorme con tu perro y del que, podemos asegurar,
                  consigues una unión increíble. Un deporte que todo aquel que
                  lo prueba, acaba apasionándose y enganchándose de su entorno.
                  No sólo disfrutas de tu perro y del deporte si no de la
                  compañía de otros apasionados que, como tú, salen a la pista a
                  demostrar su excelente trabajo.
                </p>
              </ScrollAnimation>
              <ScrollAnimation animateOnce animateIn="right">
                {" "}
                <img
                  className=""
                  src={require("./assets/agility.jpg")}
                  alt=""
                />
              </ScrollAnimation>
            </div>
          </section>
          <section>
            <h2>Frisbee</h2>
            <div className="content">
              <ScrollAnimation animateOnce animateIn="left">
                <img
                  className=""
                  src={require("./assets/frisbee.jpg")}
                  alt=""
                />
              </ScrollAnimation>
              <ScrollAnimation animateOnce animateIn="right">
                {" "}
                <p className="">
                  Se trata de otro deporte canino de equipo. Es un deporte muy
                  divertido ya que el guia lanza los discos y el perro los tiene
                  que coger en el aire, todo ello realizando figuras
                  espectaculares y combinando habilidades caninas y música.{" "}
                  <br /> Es muy divertido de practicar y super espectacular de
                  ver ya que se ven coreografías impresionantes. <br /> Por
                  supuesto, cualquier perro puede practicarlos y cualquier
                  persona puede participar. Sólo necesitas tus frisbees, un
                  perro con ganas de jugar contigo y mucha imaginación para
                  realizar figuras espectaculares.
                </p>
              </ScrollAnimation>
            </div>
          </section>
          <section>
            <h2 className="titleRight">Habilidades caninas</h2>
            <div className="content">
              <ScrollAnimation animateOnce animateIn="left">
                {" "}
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  perspiciatis voluptate itaque aperiam iusto! Esse dolor libero
                  distinctio cumque similique nemo cupiditate repudiandae eius
                  nesciunt hic vitae iure quis sapiente, assumenda, suscipit
                  quaerat voluptatibus quisquam provident earum alias possimus
                  autem aspernatur iusto itaque! Accusantium dignissimos
                  suscipit blanditiis alias eius, pariatur iusto voluptas?
                  Doloribus porro hic vitae! Deleniti reprehenderit magni est
                  perspiciatis voluptatibus illo eaque obcaecati velit fuga
                  impedit minima blanditiis sapiente, ad distinctio, maiores non
                  aperiam! Velit quam dolores consequatur earum, incidunt atque
                  praesentium, necessitatibus quis dolorum nulla recusandae eum!
                  Nemo error similique veniam, voluptatibus suscipit quasi sint
                  in labore.
                </p>
              </ScrollAnimation>
              <ScrollAnimation animateOnce animateIn="right">
                {" "}
                <img
                  className=""
                  src={require("./assets/habilidades_caninas.jpg")}
                  alt=""
                />
              </ScrollAnimation>
            </div>
          </section>
        </ServicesPage>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}
