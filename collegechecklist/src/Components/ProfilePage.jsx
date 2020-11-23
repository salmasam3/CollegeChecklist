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
      <h2>Best College Aid</h2>

      <main>

        <div className = "profileInfo">
            <h2>{displayName}</h2>
            <h2>{email}</h2>
        </div> 

        <div className = "photobox">
          <div
            style={{
              background: `url(${photoURL})  no-repeat center center`,
              backgroundSize: "cover",
              height: "150px",
              width: "150px"
            }}

            className="border border-blue-300"

          ></div>

        </div>
      </main>

      </section>
    </div>
    
  ) 
};
export default ProfilePage;