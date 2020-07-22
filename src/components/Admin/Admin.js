// Este es el panel principal de entrada a la zona privada
/* Se va a mostrar navbar con 
Mi perfil (donde se podrán actualizar lo datos)
Mis anuncios (donde aparecerá el listado de ads y también se podrá actualizar o borrar)
Mis mensajes (aparecerá el listado de mensajes)
Mis anuncios favoritos (aparecerán los anuncios favoritos y se podrán borrar y algo más )
*/

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
import Logout from "./components/Logout/Logout";

// Hacer una ruta privada

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: {},
    };
  }

  async componentDidMount() {
    await this.listarUsuario();
  }

  render() {
    return (
      <div>
        <header>
          <Router>
            <div>
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">
                  Navbar
                </a>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <Link to="/miperfil" className="nav-link">
                        Mi perfil
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/misanuncios" className="nav-link">
                        Mis anuncios
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/mensajes" className="nav-link">
                        Mensajes
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/favoritos" className="nav-link">
                        Favoritos
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to={Logout} className="nav-link">
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
              <hr />
              <Switch>
                <Route path="" component={} />
                <Redirect to="/" />
              </Switch>
            </div>
          </Router>
        </header>
      </div>
    );
  }
}

export default Admin;
