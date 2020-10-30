import React from "react";
import { Router } from "@reach/router";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Application from "./Components/Application";
import UserProvider from "./Providers/UserProvider";
import ProfilePage from "./Components/ProfilePage";
import { UserContext } from "./Providers/UserProvider";
function App() {
  return (
    <UserProvider>
      <Application />
    </UserProvider>
  );
}

export default App;
