import React from "react";
import "./sign-in.styles.scss";
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.utils';
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: "", password: "" })
  }
  handleChange = event => {
    const {value,name} = event.target;
    this.setState({ [name]:value })
  }
  render() {
    return (
      <div className="sign-in">
        <h2>Ya tengo Cuenta</h2>
        <span>Ingrese con su Usuario y password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={ this.handleChange }
            value={this.state.email}
            label='EMail'
            required
          ></FormInput>
         
          <FormInput
            name='password'
            label='Password'
            handleChange={ this.handleChange }
            type='password'
            value={this.state.password}
            required
          ></FormInput>
   
          <CustomButton type="submit">Ingresar</CustomButton>
          <CustomButton onClick={signInWithGoogle}>Ingresar con Google</CustomButton>
        </form>
      </div>
    );
  }
}
export default SignIn;
