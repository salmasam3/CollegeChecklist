import React, { useState } from "react";
import { auth } from "../firebase";
import { Link } from "@reach/router";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
  const [error, setError] = useState(null);

  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    }
  };

  const sendResetEmail = event => {
    event.preventDefault();
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
          setEmailHasBeenSent(true);
        setTimeout(() => {setEmailHasBeenSent(false)}, 3000);
      })
      .catch(() => {
        setError("Error resetting password");
      });
  };
  return (
    <section className="container-fluid">
      <header>
            <a className="icon" href="https://bestcollegeaid.com"><img src="BCA_logo.png" alt= "best-college-aid-logo"></img></a>
      </header>
      <main>
      <div className="reset">
      <h1>Reset your Password</h1>
        <form action="" className="section">
        {emailHasBeenSent && (
            <div className="has-text-success">
              An email has been sent to you!
            </div>
          )}
          {error !== null && 
            <div className="has-text-danger-dark">
              {error}
            </div> 
          }
          <div className="field">
          <label htmlFor="userEmail" className="label">
            Email:
          </label>
          <div className="control">
          <input
            type="email"
            name="userEmail"
            id="userEmail"
            value={email}
            placeholder="Input your email"
            onChange={onChangeHandler}
            className="input"
          />
          </div>
          </div>
          <button className="submit" onClick = {event => {
              sendResetEmail(event);
            }}>
            Send Reset Link
          </button>
        </form>
        <div className="section">
        <Link
         to ="/"
          className=""
        >
          &larr; Back to Sign in Page
        </Link>
        </div>
        </div>
        </main>
        <footer>
            <h2>College Checklist</h2>
      </footer>
      </section>
  );
};
export default PasswordReset;