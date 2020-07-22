const axios = require("axios").default;

async function listarUsuarios(usuarios) {
  try {
    var urlAPI =
      "http://ec2-18-222-126-169.us-east-2.compute.amazonaws.com/api/anuncios" +
      IdUsuario;
    //"http://localhost:8080/api/usuarios" + IdUsuario;

    var response = await axios.get(urlAPI);

    console.log(response);
    return response;
  } catch (error) {
    return { success: false, error: error };
  }
}

export default listarUsuarios;
