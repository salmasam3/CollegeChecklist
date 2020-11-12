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
        setError("Error signing in with password and email!");
        console.error("Error signing in with password and email", error);
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
    <section className="container">
      <header>
            <a className="icon" href="https://bestcollegeaid.com"><img src="BCA_logo.png" alt= "best-college-aid-logo"></img></a>
      </header>
      <main>
      <div className="login">
        {error !== null && <div className = "py-4 bg-red-600 w-full text-white text-center mb-3">{error}</div>}
        <h1>Log In To Best College Aid Checklist</h1> <br></br>
        <form className="">
        <div class="field">
          <label htmlFor="userEmail" className="label">
            Email Address:
          </label>
          <div class="control">
          <input
            type="email"
            className="input"
            name="userEmail"
            value = {email}
            placeholder="Email"
            id="userEmail"
            onChange = {(event) => onChangeHandler(event)}
          />
          </div>
          <br></br>
          </div>
          <div class="field">
          <label htmlFor="userPassword" className="label">
            Password:
          </label>
          <div class="control">
          <input
            type="password"
            className="input"
            name="userPassword"
            value = {password}
            placeholder="Enter Your Password"
            id="userPassword"
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
        <div className="">
          <p className="subtitle is-6">Don't have an account?{" "}  
          <Link to="signUp" className="">
            Sign Up
          </Link>{" "} </p>
          <br/>
          <Link to = "passwordReset" className="">
            Forgot Password?
          </Link>
        </div>
      </div>
      </main>
      <footer>
            <h2>Best College Aid</h2>
      </footer>
    </section>
  );
};
export default SignIn;