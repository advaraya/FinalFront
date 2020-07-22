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
import actualizarAd from "./../../services/ServicioActualizarAd";

class ActualizarAd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      IdAnuncio: props.match.params.id,
      result: {},
    };
  }

  async componentDidMount() {
    await this.editAd();
  }

  async editAd() {
    // var miCookie = localStorage.getItem("cookie-login");
    //if (miCookie === undefined) {
    //  alert("Oooop looks like you are not logged");
    // } else {
    let anuncioResponse;
    try {
      anuncioResponse = await actualizarAd(this.state.id);

      if (anuncioResponse.data.ok.result) {
        this.setState({
          IdAnuncio: this.state.id,
          result: anuncioResponse.data.result,
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
        <h1>Update Ad</h1>
        <div className="row">
          <p>Name of the Ad:{this.state.result.nombre}</p>
        </div>
        <div className="row">
          <p>Description:{this.state.result.descripcion}</p>
        </div>
        <div className="row">
          <p>Action:{this.state.result.venta}</p>
        </div>
        <div className="row">
          <p>Price:{this.state.result.precio}</p>
        </div>
        <div className="row">
          <p>Photo:{this.state.result.foto}</p>
        </div>
        <div className="row">
          <p>Tags:{this.state.result.tags}</p>
        </div>

        <button
          type="submit"
          className="btn btn-outline-primary"
          value="Submit"
        >
          Update
        </button>
      </div>
    );
  }
}
export default ActualizarAd;
