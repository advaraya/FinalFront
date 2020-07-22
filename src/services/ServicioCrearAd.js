const axios = require("axios").default;

async function createAd(nombre, descripcion, venta, precio, foto, tags) {
  try {
    let dateCreation = new Date();
    let username = localStorage.getItem("cookie-login");
    var body = {
      nombre,
      descripcion,
      venta,
      precio,
      foto,
      tags,
      dateCreation,
      username,
    };
    console.log(body);

    //axios.defaults.withCredentials = true;

    var response = await axios.post(
      //"http://localhost:8080/api/anuncios",
      "http://ec2-18-222-126-169.us-east-2.compute.amazonaws.com/api/anuncios",
      body,
      { crossdomain: true },
      { withCredentials: true }
    );
    console.log(response);
    return response;
  } catch (error) {
    return { data: { success: false }, error: error };
  }
}

export default createAd;
