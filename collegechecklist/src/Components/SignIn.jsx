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
        <a className="icon" href="https://bestcollegeaid.com"><img src="bcalogo.png" alt= "best-college-aid-logo"></img></a>
      </header>
      <main>
      <div className="logincontainer">
      <div className="login">
        
        <h2>Log In To Best College Aid Checklist</h2> <br></br>
        {error !== null && <div className = "has-text-danger-dark">{error}</div>}
        <form className="">
          <br/>
        <div className="field">
          <label class ="labelcss" htmlFor="userEmail" className="label">
            Email Address
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
          <label class ="labelcss" htmlFor="userPassword" className="label">
            Password
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
        <p className="">or</p><br/>
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
        <br/>
        <div className="my-5">
          <p className="subtitle is-6">Don't have an account?{" "}  
          <Link to="signUp" className="">
            Sign Up
          </Link>{" "} </p>
          <div className = "forgotpass">
          <p className="subtitle is-6">
          <Link to="passwordReset" className="">
            Forgot Password?
          </Link></p>
          </div>
        </div>
      </div>
      </div>

      </main>
      <footer>
        <br/>
            <h3>© Best College Aid</h3>
            <br/>
      </footer>
    </section>
  );
};
export default SignIn;