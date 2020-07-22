const axios = require("axios").default;

async function adsbyMiembro(username) {
  try {
    var urlAPI =
      "http://ec2-18-222-126-169.us-east-2.compute.amazonaws.com/api/anuncios/findbyusername/" +
      username;
    //"http://localhost:8080/api/anuncios/findbyusername/" + username;
    var response = await axios.get(urlAPI);

    console.log(response);
    return response;
  } catch (error) {
    return { success: false, error: error };
  }
}

export default adsbyMiembro;
