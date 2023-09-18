import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import { uid } from "uid";
import "./components/Form/Form.css";
import List from "./components/List/List";

function App() {
  // TODO: replace useState with useLocalStorageState
  const [activities, setActivities] = useState([]);

  function handleAddActivity(newActivity) {
    setActivities([...activities, { id: uid(), ...newActivity }]);
  }

  return (
    <>
      <div>
        <List activities={activities} />
        <Form onAddActivity={handleAddActivity} />
      </div>
    </>
  );
}

export default App;
