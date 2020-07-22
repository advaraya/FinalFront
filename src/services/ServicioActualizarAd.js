const axios = require("axios").default;

async function actualizarAd(
  nombre,
  descripcion,
  venta,
  precio,
  foto,
  tags,
  id
) {
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
      id,
    };
    var urlAPI =
      "http://ec2-18-222-126-169.us-east-2.compute.amazonaws.com/api/anuncios" +
      id;
    //"http://localhost:8080/api/anuncios" + id;

    var response = await axios.put(
      urlAPI,
      body,
      { crossdomain: true }
      //{ withCredentials: true }
    );

    console.log(response);
    return response;
  } catch (error) {
    return { success: false, error: error };
  }
}

export default actualizarAd;
