import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">
          <img className="logo" src="/public/logo.png" />
        </Link>
        <ul>
          <li>
            <Link to={`/sobre`}>Sobre</Link>
          </li>
          <li>
            <Link to={`/contato`}>Contato</Link>
          </li>
        </ul>
      </nav>
      <div className="container">
        <Outlet />
      </div>
      <footer>
        <>© 2024 Sense Development</>
      </footer>
    </div>
  );
}

export default App;
