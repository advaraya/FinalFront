const axios = require("axios").default;

async function registro(username, email, password) {
  try {
    var body = { username, email, password };
    var response = await axios.post(
      //"http://localhost:8080/api/usuarios/register",
      "http://ec2-18-222-126-169.us-east-2.compute.amazonaws.com/api/usuarios/register",
      body
    );
    console.log(response);
    return response;
  } catch (error) {
    return { data: { success: false }, error: error };
  }
}
export default registro;
