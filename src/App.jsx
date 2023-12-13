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
