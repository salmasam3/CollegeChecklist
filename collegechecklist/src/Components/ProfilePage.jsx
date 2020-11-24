import React, { useContext } from "react";
import { UserContext } from "../Providers/UserProvider";
// import {Dropdown} from "reactstrap/src/Dropdown"

const ProfilePage = () => {
  const user = useContext(UserContext);
  const {photoURL, displayName, email} = user;
  console.log(user);
  
  return (

        <main>

            <h2>© Best College Aid</h2>
            
            <div className="profileInfo">
              <h2>{displayName}</h2>
              <h2>{email}</h2>
            </div>
          
              <div className = "photobox"
                style={{
                  background: `url(${photoURL})  no-repeat center center`,
                  // backgroundSize: "cover",
                }}

              ></div>
        </main>
    
  ) 
};
export default ProfilePage;