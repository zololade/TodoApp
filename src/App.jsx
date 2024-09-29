import "./scss/style.scss";
import { useState } from "react";
import { Container, Input } from "./Components";

function App() {
  const [value, setValue] = useState([]);
  return (
    <>
      <main className="main">
        <Input setValue={setValue} />
        <Container value={value} />
      </main>
    </>
  );
}

export default App;
