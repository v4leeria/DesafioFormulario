import React from "react";
import Alert from "../Alert/Alert";
import Formulario from "../Formulario/Formulario";
import SocialButton from "../SocialButton/SocialButton";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./Registro.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { text } from "@fortawesome/fontawesome-svg-core";

const Registro = ({ claseRegistro }) => {
  return (
    <div className={claseRegistro}>
      <h1>Crear una cuenta</h1>
      <div className={"classSocialButton"}>
        <SocialButton claseIcono={"claseIcono"} icono={faFacebook} />
        <SocialButton claseIcono={"claseIcono"} icono={faGithub} />
        <SocialButton claseIcono={"claseIcono"} icono={faLinkedin} />
      </div>
      <p>O usa tu email para registrarte</p>
      <Formulario />
      <Alert />
    </div>
  );
};

export default Registro;
