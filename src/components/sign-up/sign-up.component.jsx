import React from "react";
import "./sign-up.styles.scss";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      Password: "",
      confirmPassword: ""
    };
  }
  handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, Password, confirmPassword } = this.state;
    if (Password !== confirmPassword) {
      alert("Passwords NO coinciden");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, Password);
      await createUserProfileDocument(user,{displayName});
      this.state = {
        displayName: "",
        email: "",
        Password: "",
        confirmPassword: ""
      };
    } catch (error) {
      console.log("error en crear user",error);
    }
  };
  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };
  render() {
    const { displayName, email, Password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">No tengo una cuenta</h2>
        <span className="">Suscribirse con email y Password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Usuario"
            required
          ></FormInput>
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="EMail"
            required
          ></FormInput>
          <FormInput
            type="password"
            name="Password"
            value={Password}
            onChange={this.handleChange}
            label="Password"
            required
          ></FormInput>
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Repetir Password"
            required
          ></FormInput>
          <CustomButton type="submit">REGISTRARSE</CustomButton>
        </form>
      </div>
    );
  }
}
export default SignUp;
