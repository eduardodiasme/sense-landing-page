import { Link } from "react-router-dom";
import "../styles/home.css";

export default function Home() {
  return (
    <>
      <div className="container-text">
        <h1>
          Cuide do seu negócio, <br />
          deixe a tecnologia a Sense.
        </h1>
        <Link to="/contato">
          <button>Entre em contato</button>
        </Link>
      </div>
      <img src="/public/sam.png" />
    </>
  );
}
