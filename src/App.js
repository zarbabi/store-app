import { useEffect, useState } from "react";
import "./App.css";
import GroupList from "./component/GroupList";
import NewGroup from "./component/NewGroup";

function App() {
  const [newGroup, setNewGroup] = useState("");
  const [allGroups, setAllGroups] = useState([
    { groupName: "Mobile", id: 1 },
    { groupName: "Computer", id: 2 },
  ]);

  // useEffect(() => {}, allGroups);
  const changeNewGroupHandler = (e) => {
    setNewGroup({
      groupName: e.target.value,
      id: Math.floor(Math.random() * 1000),
    });
  };
  const submitNewGroupHandler = (e) => {
    e.preventDefault();
    setAllGroups([...allGroups, newGroup]);
    setNewGroup("");
  };

  return (
    <div className="App">
      <header>
        <p>Store</p>
      </header>
      <NewGroup
        submitNewGroup={submitNewGroupHandler}
        changeNewGroup={changeNewGroupHandler}
      />
      <GroupList allGroups={allGroups} />
    </div>
  );
}

export default App;
