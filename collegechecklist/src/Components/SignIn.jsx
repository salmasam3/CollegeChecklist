import React, {useState} from "react";
import { Link } from "@reach/router";
import { signInWithGoogle } from "../firebase";
import { auth } from "../firebase";

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const signInWithEmailAndPasswordHandler = (event, email, password) => {
      event.preventDefault();
      auth.signInWithEmailAndPassword(email, password).catch(error => {
        setError("Error signing in with email and password!");
        console.error("Error signing in with email and password", error);
      });
    };

    const onChangeHandler = (event) => {
          const {name, value} = event.currentTarget;

          if(name === 'userEmail') {
              setEmail(value);
          }
          else if(name === 'userPassword'){
            setPassword(value);
          }
    };

  return (
    <section className="container-fluid">
      <header>
            <a className="icon" href="https://bestcollegeaid.com"><img src="BCA_logo.png" alt= "best-college-aid-logo"></img></a>
      </header>
      <main>
      <div className="login">
        
        <h1>Log In To Best College Aid Checklist</h1> <br></br>
        {error !== null && <div className = "has-text-danger-dark">{error}</div>}
        <form className="">
        <div className="field">
          <label htmlFor="userEmail" className="label">
            Email Address:
          </label>
          <div className="control">
          <input
            type="email"
            className="input"
            name='userEmail'
            value = {email}
            placeholder="Email"
            id="userEmail"
            required autoComplete = "email"
            onChange = {(event) => onChangeHandler(event)}
          />
          </div>
          <br></br>
          </div>
          <div className="field">
          <label htmlFor="userPassword" className="label">
            Password:
          </label>
          <div className="control">
          <input
            type="password"
            className="input"
            name="userPassword"
            value = {password}
            placeholder="Enter Your Password"
            id="userPassword"
            required autoComplete ="current-pasword"
            onChange = {(event) => onChangeHandler(event)}
          />
          </div>
          <br></br>
          </div>
          <button className="submit" onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}}>
            Log in
          </button>
        </form>
        <p className="">or</p>
        <button
          className="google"
          onClick={() => {
            try {
              signInWithGoogle();
            } catch (error) {
              console.error("Error signing in with Google", error);
            }
          }}>
          Sign in with Google
        </button>
        <div className="my-5">
          <p className="subtitle is-6">Don't have an account? {" "}  
          <Link to="signUp" className="">
            Sign Up
          </Link>{" "} </p>
          <p className="subtitle is-6">
          <Link to="passwordReset" className="">
            Forgot Password?
          </Link></p>
        </div>
      </div>
      </main>
      <footer>
            <h2>College Checklist</h2>
      </footer>
    </section>
  );
};
export default SignIn;