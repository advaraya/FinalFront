const axios = require("axios").default;

async function listadoTags() {
  try {
    var urlAPI = //"http://localhost:8080/api/anuncios/tags";
      "http://ec2-18-222-126-169.us-east-2.compute.amazonaws.com/api/anuncios/tags";
    var response = await axios.get(urlAPI);

    console.log(response);
    return response;
  } catch (error) {
    return { data: { success: false, error: error } };
  }
}

export default listadoTags;
