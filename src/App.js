import { useState, useEffect  } from "react";
import "./App.css";
import AddToDo from "./components/AddToDo/AddToDo";
import ToDo from "./components/ToDo/ToDo";

function App() {
  const [todo, setToDo] = useState([]);

  const AddToDoHandler = (obj) => {
    setToDo((prevState) => {
      return [
        ...prevState,
        {
          text: obj,
          date: new Date().toLocaleDateString(),
          id: Math.random().toString(),
          completed: false,
        },
      ];
    });
  };
  // console.log(todo)

  //
  // Запрос жонотуу бул React'тын жумушу эмес ошондуктан  useEffect колдонулду. 
  // useEffect лучший инструмент для обработки побочных эффектов и это специальный REACT Хук который мы можем использовать.

  useEffect(() => {
    const localData = localStorage.getItem("data") || [];
    setToDo(JSON.parse(localData));
  }, []);
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(todo));
  }, [todo]);
  console.log(todo);

  return (
    <div className="App">
      <AddToDo onAddToDo={AddToDoHandler} />
      <ToDo data={todo} todo={setToDo} />
    </div>
  );
}

export default App;
