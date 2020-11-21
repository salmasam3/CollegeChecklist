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
        <SelectedCollegeProvider>
        <CollegesProvider>
        <main
          data-testid="application"
          
        >
        <Header  />
        <Content />
        </main>
        </CollegesProvider>
        </SelectedCollegeProvider>
        //<ProfilePage />
      :
        <Router>
          <SignUp path="signUp" />
          <SignIn path="/" />
          <PasswordReset path = "passwordReset" />
        </Router>

  );
}
export default Application;