import React from "react";
import { render } from "@testing-library/react";
import listadoAnuncios from "./../../services/ServicioListado";
import listadoTags from "./../../services/ServicioTags";
import adsbyMiembro from "./../../services/ServicioAdsMiembro";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter,
  Redirect,
} from "react-router-dom";

class AdsMiembro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: props.match.params.username,
      isAuth:
        localStorage.getItem("cookie-login") === props.match.params.username,
      result: {},
    };
  }
  async componentDidMount() {
    await this.adsMiembro();
  }

  async adsMiembro() {
    let adsMiembroResponse;
    try {
      adsMiembroResponse = await adsbyMiembro(this.state.username);
      if (adsMiembroResponse.data.ok) {
        this.setState({
          username: this.state.username,
          result: adsMiembroResponse.data.result,
        });
      }
    } catch (error) {
      alert("Oooop looks like you are not logged");
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h1>{this.state.result.username}</h1>
        </div>
        {this.state.anuncios.map((anuncio) => {
          return (
            <div className="container-card">
              <div className="card">
                <img
                  src={this.state.result.foto}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{this.state.result.nombre}</h5>
                  <p>
                    <span className="badge badge-pill badge-success">
                      {this.state.result.tags}
                    </span>
                  </p>
                  <Link
                    to={`/ad-details/${anuncio._id}`}
                    className="btn btn-primary"
                  >
                    Ver más
                  </Link>

                  {this.state.isAuth && (
                    <div>
                      Botones le pongo un onlcick con funcion y llamo al
                      servicio borrar
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default AdsMiembro;
