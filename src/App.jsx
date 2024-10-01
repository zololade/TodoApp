import "./scss/style.scss";
import { useState, useEffect } from "react";
import { Container, Input } from "./Components";

function App() {
  const [value, setValue] = useState([]);

  const storedData = JSON.parse(localStorage.getItem("myTodoList"));

  useEffect(() => {
    if (!Array.isArray(storedData)) return;
    setValue(storedData);
  }, []);

  return (
    <>
      <main className="main">
        <Input value={value} setValue={setValue} />
        <Container value={value} setValue={setValue} />
      </main>
    </>
  );
}

export default App;
