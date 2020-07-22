const axios = require("axios").default;

async function login(username, password) {
  try {
    var body = { username, password };
    console.log(body);
    //axios.defaults.withCredentials = true;

    var response = await axios.post(
      "http://ec2-18-222-126-169.us-east-2.compute.amazonaws.com/api/usuarios/authenticate",
      //"http://localhost:8080/api/usuarios/authenticate",
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

export default login;
