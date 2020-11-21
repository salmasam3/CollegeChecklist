import React, { useContext } from "react";
import { UserContext } from "../Providers/UserProvider";
import {auth} from "../firebase";
import { changePic } from "./ChangePic";

const ChecklistPage = () => {
}
export default ChecklistPage;

  const initialList = [
    {
      id: 'a',
      name: 'Robin',
    },
    {
      id: 'b',
      name: 'Dennis',
    },
  ];
   
  const App = () => {
    const [list, setList] = React.useState(initialList);
   
    return (
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    );
  };