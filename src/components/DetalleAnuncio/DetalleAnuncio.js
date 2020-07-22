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
import getDetalleAnuncio from "../../services/ServicioDetalleAnuncio.js";
import CompartirPost from "../CompartirPost/CompartirPost";

/*CSS*/
import "./DetalleAnuncio.css";

class Ad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urlAnuncio: props.match.params.urlAnuncio,
      result: {},
    };
  }
  async componentDidMount() {
    await this.adDetail();
  }

  async adDetail() {
    let anunciosDetalle;
    try {
      anunciosDetalle = await getDetalleAnuncio(this.state.urlAnuncio);
    } catch (error) {}
    if (anunciosDetalle.data.result) {
      console.log(anunciosDetalle.data);
      this.setState({
        urlAnuncio: this.state.urlAnuncio,
        result: anunciosDetalle.data.result,
      });
    }

    console.log(this.state);
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <figure className="figure">
                <img src={this.state.result.foto} className="img-fluid" />
              </figure>
            </div>
            <div className="col-6">
              <h2>{this.state.result.nombre}</h2>
              <p>{this.state.result.descripcion}</p>
              <p>{this.state.result.precio} €</p>
              <p>{this.state.result.venta}</p>
              <p>
                <span className="badge badge-pill badge-success">
                  {this.state.result.tags}
                </span>
              </p>
              <p>
                <button type="button" className="btn btn-outline-secondary">
                  <Link to={`/ads-member/${this.state.result.username}`}>
                    {this.state.result.username}
                  </Link>
                </button>
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="row justify-content-md-center">
              <Link to="/listing" className="return">
                Return to Listing
              </Link>
            </div>
          </div>
          <div className="col-6">
            <div className="row justify-content-md-center">
              <CompartirPost
                urlAnuncio={this.state.urlAnuncio}
                nombreAnuncio={this.state.result.name}
                descripcionAnuncio={this.state.result.description}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Ad;
