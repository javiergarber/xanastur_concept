import * as React from "react";
import { Component } from "react";
import {
  BottomFooter,
  ContactIconsWrapper,
  ContactInformation,
  DesignedByWrapper,
  FooterSection,
  League,
  Sponsors,
  UpperFooter,
} from "./Footer.style";
export default class Footer extends Component {
  render() {
    return (
      <FooterSection>
        <UpperFooter>
          <ContactInformation>
            <p>
              Camino Fuente del Alamu, 33 La Pedrera <br /> N - 43º 29.351' / O
              - 5º 41.465' <br /> Detrás de Casa Oliva <br /> Autobús nº 24 -
              Parada Casa Oliva
            </p>
            <p>607.11.90.56 ( Iván )</p>
            <p> info@xanastur.org</p>
          </ContactInformation>
          <Sponsors>
            <h3>Nuestros patrocinadores</h3>
            <div className="images">
              <img src={require("./assets/canedupo.jpg")} alt="" />
              <img src={require("./assets/arion.jpg")} alt="" />
              <img src={require("./assets/planet_futbol.jpg")} alt="" />
              <img src={require("./assets/rota_empotrados.jpg")} alt="" />
              <img src={require("./assets/deporte_as.jpeg")} alt="" />
              <img
                src={require("./assets/centro_veterinario_montevil.jpg")}
                alt=""
              />
              <img src={require("./assets/agility_cor.jpg")} alt="" />
            </div>
          </Sponsors>
          <League>
            <h3>Competimos en</h3>
            <img
              src={require("./assets/real_sociedad_canina_española.png")}
              alt=""
            />
          </League>
        </UpperFooter>

        <BottomFooter>
          <DesignedByWrapper>
            <p>
              Designed by{" "}
              <a href="https://www.linkedin.com/in/javiergarber/">
                Javier García Bermúdez
              </a>
            </p>
          </DesignedByWrapper>
          <ContactIconsWrapper>
            <a href="TODO">
              <img src={require("./assets/001-facebook.svg")} alt="" />
            </a>
            <a href="TODO">
              <img src={require("./assets/008-youtube.svg")} alt="" />
            </a>
            <a href="TODO">
              <img src={require("./assets/003-whatsapp.svg")} alt="" />
            </a>
            <a href="TODO">
              <img src={require("./assets/017-mail.svg")} alt="" />
            </a>
          </ContactIconsWrapper>
        </BottomFooter>
      </FooterSection>
    );
  }
}
