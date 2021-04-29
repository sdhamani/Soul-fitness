import axios from "axios";

export default async function SignupUser(userName, emailId, password) {
  const url = "https://mighty-brook-83661.herokuapp.com/user";
  try {
    const userObj = {
      name: userName,
      email: emailId,
      password: password,
    };

    const signupObj = await axios.post(url, userObj);
    if (signupObj.data.success) {
      return "Account has been created successfully.";
    } else {
      return signupObj.data.errorMessage;
    }
  } catch (error) {
    return error;
  }
}
