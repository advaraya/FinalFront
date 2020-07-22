const axios = require("axios").default;

async function getDetalleAnuncio(url) {
  try {
    const response = await axios.get(
      //"http://localhost:8080/api/anuncios/findbyurl/" + url
      "http://ec2-18-222-126-169.us-east-2.compute.amazonaws.com/api/anuncios/findbyurl/" +
        url
    );
    console.log(response);
    return response;
  } catch (error) {
    return { success: false, error: error };
  }
}

export default getDetalleAnuncio;
