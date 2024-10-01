import "./scss/style.scss";
import { useState } from "react";
import { Container, Input } from "./Components";
const storedData = JSON.parse(localStorage.getItem("myTodoList"));
function App() {
  const [value, setValue] = useState(storedData || []);
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
