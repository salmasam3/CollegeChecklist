import React, { useContext } from "react";
import { UserContext } from "../Providers/UserProvider";
import { navigate } from "@reach/router";
import {auth} from "../firebase";
import { changePic } from "./ChangePic";
// import {Dropdown} from "reactstrap/src/Dropdown"

const ProfilePage = () => {
  const user = useContext(UserContext);
  const {photoURL, displayName, email} = user;
  console.log(user);
  
  return (
    <div className = "mx-auto w-11/12 md:w-2/4 py-8 px-4 md:px-8">

      <section className="container">
        <header>
          <a className="icon" href="https://bestcollegeaid.com"><img src="bcalogo.png" alt= "best-college-aid-logo"></img></a>
          <div className = "topnav">
          <a href="#ProfilePage">Checklist</a>
          <a href="#ProfilePage">Profile</a>
          <a href="#SignIn">Log Out</a>
          </div>
        </header>

    <main>
        <div className = "photobox">
          <div
            style={{
              background: `url(${photoURL || 'https://res.cloudinary.com/dqcsk8rsc/image/upload/v1577268053/avatar-1-bitmoji_upgwhc.png'})  no-repeat center center`,
              backgroundSize: "cover",
              height: "400px",
              width: "400px"
            }}

            className="border border-blue-300"

          ></div>
          <div style = {{textAlign: "center"}}> 
          <field>
            <button className = "submit" id = "fileButton" onClick = {() => {changePic()}}>Change Photo</button>
          </field>
          </div>

        </div>
        <br></br>
        <div className = "loginInfo">
          <div className = "md:pl-4">
            <h1 className = "text-2xl font-semibold">{displayName}</h1>
            <h1 className = "italic">{email}</h1>
          </div>

          <br></br>
        <input className = "submit" type="submit" value = "Return to Checklist"/>
        <button className = "submit" onClick = {() => {auth.signOut()}}>Sign out</button>

        </div> 
      </main>

      <footer>
        <h2>Best College Aid</h2>
      </footer>
      </section>
    </div>
    
  ) 
};
export default ProfilePage;