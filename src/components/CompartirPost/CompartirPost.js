import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter,
  Redirect,
} from "react-router-dom";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";

class CompartirPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urlAnuncio: props.urlAnuncio,
      nombre: props.nombreAnuncio,
      descripcion: props.descripcionAnuncio,
    };
  }
  render() {
    return (
      <div>
        <FacebookShareButton
          url={`http://ec2-18-222-126-169.us-east-2.compute.amazonaws.com/ad-details/${this.props.urlAnuncio}`}
          quote={`${this.props.nombre} - ${this.props.descripcion}`}
        >
          <FacebookIcon round size={32} />
        </FacebookShareButton>
        <TwitterShareButton
          url={this.props.urlAnuncio}
          title={this.props.nombre}
        >
          <TwitterIcon round size={32} />
        </TwitterShareButton>
      </div>
    );
  }
}

export default CompartirPost;
