import React, {useContext} from "react";
import { Router } from "@reach/router";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ProfilePage from "./ProfilePage";
import PasswordReset from "./PasswordReset";
import { UserContext, UserProvider } from "../Providers/UserProvider";
import { Header } from './Layout/Header';
import { Content } from './Layout/Content';
import { CollegesProvider, SelectedCollegeProvider,TaskHeaderState } from '../Context' ;


function Application() {
  const user = useContext(UserContext);
  return (
        user ?
        /*<TaskHeaderState>
          <CollegesProvider>
            <SelectedCollegeProvider>
              <div className="App">
                <Header />
                <Content />
              </div>
            </SelectedCollegeProvider>
          </CollegesProvider>
        </TaskHeaderState>*/
        <ProfilePage />
      :
        <Router>
          <SignUp path="signUp" />
          <SignIn path="/" />
          <PasswordReset path = "passwordReset" />
        </Router>

  );
}
export default Application;