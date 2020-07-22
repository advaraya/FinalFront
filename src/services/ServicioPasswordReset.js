const axios = require("axios").default;

async function passwordReset(username, email) {
  try {
    var body = { username, email };
    var response = await axios.post(
      //"http://localhost:8080/api/password-reset",
      "http://ec2-18-222-126-169.us-east-2.compute.amazonaws.com/api/password-reset",
      body
    );
    console.log(response);
    return response;
  } catch (error) {
    return { data: { success: false }, error: error };
  }
}
export default passwordReset;
