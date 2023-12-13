import "./App.css";
import { Outlet, NavLink } from "react-router-dom";

function App() {
  return (
    <div>
      <nav className="navbar">
        <NavLink to="/">
          <img className="logo" src="/public/logo.png" />
        </NavLink>
        <ul>
          <li>
            <NavLink to={`/sobre`}>Sobre</NavLink>
          </li>
          <li>
            <NavLink to={`/contato`}>Contato</NavLink>
          </li>
        </ul>
      </nav>
      <div className="container">
        <Outlet />
      </div>
      <a
        href="https://wa.me/5583981383197?text=Ol%C3%A1%2C+venho+do+site+da+Sense+e+gostaria+de..."
        className="sam"
        target="_blank"
        rel="noreferrer"
      >
        <img src="/public/whatsapp.png" />
      </a>
      <footer>
        © 2024 Sense Development
      </footer>
    </div>
  );
}

export default App;
