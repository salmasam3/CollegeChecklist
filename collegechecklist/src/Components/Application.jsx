import React, {useContext} from "react";
import { Router } from "@reach/router";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ProfilePage from "./ProfilePage";
import PasswordReset from "./PasswordReset";
import { UserContext } from "../Providers/UserProvider";
import { Header } from './Layout/Header';
import { Content } from './Layout/Content';
import { CollegesProvider, SelectedCollegeProvider } from '../Context' ;


function Application() {
  const user = useContext(UserContext);
  return (
        user ?
          <CollegesProvider>
            <SelectedCollegeProvider>
              <div className="App">
                <Header />
                <Content /> 
                <ProfilePage />
              </div>
            </SelectedCollegeProvider>
          </CollegesProvider>
      :
        <Router>
          <SignUp path="signUp" component={SignUp} />
          <SignIn path="/" component={SignIn} />
          <PasswordReset path = "passwordReset" component={PasswordReset} />
          <ProfilePage path = "ProfilePage" component={ProfilePage} />
        </Router>

  );
}
export default Application;