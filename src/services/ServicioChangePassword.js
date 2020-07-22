const axios = require("axios").default;

async function changePassword(username, password) {
  try {
    var body = { username, password };
    var response = await axios.post(
      //"http://localhost:8080/api/change-password",
      "http://ec2-18-222-126-169.us-east-2.compute.amazonaws.com/api/change-password",
      body
    );
    console.log(response);
    return response;
  } catch (error) {
    return { data: { success: false }, error: error };
  }
}
export default changePassword;
