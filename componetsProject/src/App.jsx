import { useState } from "react";
import "./App.css";
import Elements from "./components/Elements";
import Btn from "./components/Btn";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="fondo">
      <h1>Resgistro de usuario nuevo</h1>
      <div className="container">
        <div className="container2">
          <Elements titulo="Nombre" />
          <Elements titulo="Fecha de Nacimiento" type="date" />

          <Elements titulo="Username" />
        </div>
        <div className="container2">
          <Elements titulo="Apellido" />
          <Elements titulo="Email" />
          <Elements titulo="URL de foto de perfil" />
        </div>
      </div>
      <div>
        <Elements titulo="Sobre ti" type="textarea" />
      </div>
      <div className="btn1">
        <Btn />
      </div>
    </div>
  );
}

export default App;
