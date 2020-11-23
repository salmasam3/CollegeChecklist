import React, {useContext} from "react";
import { Link, Router } from "@reach/router";
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
        <TaskHeaderState>
          <CollegesProvider>
            <SelectedCollegeProvider>
              <div className="App">
                <Header />
                <Content /> 
              </div>
            </SelectedCollegeProvider>
          </CollegesProvider>
        </TaskHeaderState>
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