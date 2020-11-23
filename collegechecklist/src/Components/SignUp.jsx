import React, { useContext, useState } from "react";
import { Link } from "@reach/router";
import { auth, signInWithGoogle, generateUserDocument } from "../firebase";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);
  
  const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
    event.preventDefault();
    try{
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      generateUserDocument(user, {displayName});
    }
    catch(error){
      setError('Error Signing up with email and password');
    }

    setEmail("");
    setPassword("");
    setDisplayName("");
  };
  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    }
  };
  return (
    <section className="container-fluid">
      <header>
            <a className="icon" href="https://bestcollegeaid.com"><img src="BCA_logo.png" alt= "best-college-aid-logo"></img></a>
      </header>
      <main>
      <div className="signup">
      <h1>Sign Up</h1>
        {error !== null && (
          <div className="has-text-danger-dark">
            {error}
          </div>
        )}
        <form className="">
          <div className="field">
          <label htmlFor="displayName" className="label">
            Display Name:
          </label>
          <div className="control">
          <input
            type="text"
            className="input"
            name="displayName"
            value={displayName}
            placeholder="User Name"
            id="displayName"
            required autoComplete = "username"
            onChange={event => onChangeHandler(event)}
          />
          </div>
          </div>
          <div className="field">
          <label htmlFor="userEmail" className="label">
            Email:
          </label>
          <div className ="control">
          <input
            type="email"
            className="input"
            name="userEmail"
            value={email}
            placeholder="Email"
            id="userEmail"
            required autoComplete="email"
            onChange={event => onChangeHandler(event)}
          />
          </div>
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
            value={password}
            placeholder="Your Password"
            id="userPassword"
            required autoComplete="new-password"
            onChange={event => onChangeHandler(event)}
          />
          </div>
          </div>
          <button
            className="submit"
            onClick={event => {
              createUserWithEmailAndPasswordHandler(event, email, password);
            }}
          >
            Sign up
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
        <div className="my-4">
        <p className="subtitle is-6">
          Already have an account?{" "}
          <Link to="/" className="">
            Sign in here
          </Link>
        </p>
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
export default SignUp;