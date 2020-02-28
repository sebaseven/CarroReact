import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    //
    try {
      auth.signInWithEmailAndPassword(email,password)
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log('error en loguser',error.message)
    }
  };
  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>Ya tengo Cuenta</h2>
        <span>Ingrese con su Usuario y password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="EMail"
            required
          ></FormInput>

          <FormInput
            name="password"
            label="Password"
            handleChange={this.handleChange}
            type="password"
            value={this.state.password}
            required
          ></FormInput>
          <div className="buttons">
            <CustomButton type="submit">Ingresar</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Ingresar con Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;
