const axios = require("axios").default;

async function eliminarCuenta() {
  try {
    var urlAPI =
      "http://ec2-18-222-126-169.us-east-2.compute.amazonaws.com/api/usuarios/ + IdUsuarios"; //"http://localhost:8080/api/usuarios/" + IdUsuarios;
    var response = await axios.delete(urlAPI);

    console.log(response);
    return response;
  } catch (error) {
    return { data: { success: false, error: error } };
  }
}

export default eliminarCuenta;
