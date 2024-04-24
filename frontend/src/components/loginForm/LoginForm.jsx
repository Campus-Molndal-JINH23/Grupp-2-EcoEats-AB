import styles from "./LoginForm.module.css";
import ReactDOM from "react-dom";

const LoginForm = () => {
  return (
    <div className = {styles.loginContainer} id="loginform">
      <FormHeader title="Login" />
      <Form />
    </div>
  );
};

export default LoginForm;


const FormHeader = props => (
    <h2 id="headerTitle">{props.title}</h2>
);

const Form = props => (
    <div>
      <FormInput description="Username" placeholder="Enter your username" type="text" />
      <FormInput description="Password" placeholder="Enter your password" type="password"/>
      <FormButton title="Log in"/>
    </div>
 );

 const FormButton = props => (
    <div id="button" class="row">
      <button>{props.title}</button>
    </div>
  );

  const FormInput = props => (
    <div class="row">
      <label>{props.description}</label>
      <input type={props.type} placeholder={props.placeholder}/>
    </div>  
  );
