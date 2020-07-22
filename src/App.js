import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter,
  Redirect,
} from "react-router-dom";
import Login from "./components/Login/Login";
import Signin from "./components/Registro/Registro";
import Listing from "./components/Listado/Listado";
import MyCreateAd from "./components/CrearAd/CrearAd";
import PasswordReset from "./components/PasswordReset/PasswordReset";
import ChangePassword from "./components/ChangePassword/ChangePassword";
import AdsMiembro from "./components/AdsMiembro/AdsMiembro";
import ActualizarAd from "./components/ActualizarAd/ActualizarAd";

import Ad from "./components/DetalleAnuncio/DetalleAnuncio";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <Link to="/signin" className="nav-link">
                      SignIn
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      Listing
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/ad-create" className="nav-link">
                      Create Ad
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/edit-ad" className="nav-link">
                      Edit Ad
                    </Link>
                  </li>
                  <li
                    className="nav-item"
                    onClick={() => localStorage.removeItem("cookie-login")}
                  >
                    <Link to="/login" className="nav-link">
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarToggleExternalContent"
                aria-controls="navbarToggleExternalContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
            </nav>
            <hr />
            <Switch>
              <Route path="/signin" component={Signin} />
              <Route path="/login" component={Login} />
              <Route path="/password-reset" component={PasswordReset} />
              <Route path="/change-password" component={ChangePassword} />
              <Route path="/ad-details/:urlAnuncio" component={Ad} />
              <Route path="/ad-create" component={MyCreateAd} />
              <Route path="/ads-member/:username" component={AdsMiembro} />
              <Route path="/edit-ad" component={ActualizarAd} />
              <Route path="/" component={Listing} />
              <Redirect to="/" />
            </Switch>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;

/*<li className="nav-item">
                    <Link to="/ads-member" className="nav-link">
                      Ads miembro
                    </Link>
                  </li>*/
