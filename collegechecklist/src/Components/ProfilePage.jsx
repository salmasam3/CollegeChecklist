import React, { useContext } from "react";
import { UserContext } from "../Providers/UserProvider";
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
          <button href="#ProfilePage">Checklist</button>
          <button href= "#ProfilePage" >Profile</button>
          <button onClick = {() => {auth.signOut()}}>Sign out</button>
          </div>
        </header>

    <main>
        <div className = "photobox">
          <div
            style={{
              background: `url(${photoURL || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'})  no-repeat center center`,
              backgroundSize: "cover",
              height: "400px",
              width: "400px"
            }}

            className="border border-blue-300"

          ></div>
          {/* <div style = {{textAlign: "center"}}> 
            <button className = "submit" id = "fileButton" onClick = {() => {changePic()}}>Change Photo</button>
          </div> */}

        </div>
        <br></br>
        <div className = "loginInfo">
          <div className = "md:pl-4">
            <h1 className = "text-2xl font-semibold">{displayName}</h1>
            <h1 className = "italic">{email}</h1>
          </div>
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