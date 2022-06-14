import Form from "./components/Form";
import Characters from "./components/Characters";
import { useState } from "react";

function App() {
  const [characterName, setCharacterName] = useState("");

  return (
    <div className="container mx-auto p-14">
      <h1 className="font-bold text-3xl  text-center drop-shadow-2xl">
        Rick & Morty Characters
      </h1>


      <Form setCharacterName={setCharacterName} />
      <Characters characterName={characterName} />
    </div>
  );
}

export default App;
