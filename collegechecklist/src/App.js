import React from "react";
import Application from "./Components/Application";
import UserProvider from "./Providers/UserProvider";

function App() {
  return (
    <UserProvider>
      <Application />
    </UserProvider>
  );
}

export default App;

// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
// import { Content } from "./Components/Layout/Content";

// export default function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/Content">Checklist</Link>
//             </li>
//             <li>
//               <Link to="/ProfilePage">Profile Page</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Switch>
//           <Route path="/Content">
//             <Content />
//           </Route>
//           <Route path="/ProfilePage">
//             <ProfilePage />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Home() {
//   return <h2>Home</h2>;
// }

// function checklist() {
//   return <h2>Checklist</h2>;
// }

// function ProfilePage() {
//   return <h2>Profile Page</h2>;
// }
