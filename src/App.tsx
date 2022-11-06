import React, {FC} from "react";
import './App.css';
import Todolist from './Components/Todolist';

const App: FC = () => {
  return(
    <div className="App">
      <Todolist />
    </div>
  );
};

export default App;