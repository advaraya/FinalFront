import React from "react";
import { render } from "@testing-library/react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter,
  Redirect,
} from "react-router-dom";
import listarUsuarios from "./../../services/ServicioMiPerfil";
import eliminarCuenta from "./../../services/ServicioEliminarCuenta";

class MiPerfil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: {},
    };
    
  }

 async componentDidMount(){
 await this.listarUsuario();
}
  async listarUsuario(usuario) {
    // var miCookie = localStorage.getItem("cookie-login");
    //if (miCookie === undefined) {
    //  alert("Oooop looks like you are not logged");
    // } else {
    let usuariosResponse;
    try {
      usuariosResponse = await listarUsuarios(usuarios);
      if (usuariosResponse.data.success) {
        this.setState({
          usuario: usuariosResponse.data.results,
        });
      }
    } catch (error) {
      alert("Oooop something whent wrong");
    }
    //}
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h1>My profile:</h1>
        </div>
        <div className="row">
          <p>Username:{usuarios.username}</p>
        </div>
        <div className="row">
          <p>Email:{usuarios.email}</p>
        </div>
        <div className="row">
          <p>Password: {usuarios.password}</p>
        </div>
        <button
          type="submit"
          className="btn_1 rounded full-width add_top_30"
          value="Submit"
        >
          Eliminar Cuenta
        </button>
        <button
          type="submit"
          className="btn_1 rounded full-width add_top_30"
          value="Submit"
        >
          Actualizar datos
        </button>
      </div>
    );
  }
}
export default MiPerfil;
