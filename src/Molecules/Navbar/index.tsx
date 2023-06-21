import "./styles.css";
import { CiSearch, CiBellOn, CiUser } from "react-icons/ci";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__title">
        <a className="navbar__logo">Kenai</a>
      </div>
      <ul className="navbar__icons">
        <li>
          <a>
            <CiSearch></CiSearch>
          </a>
        </li>
        <li>
          <a>Inicio</a>
        </li>
        <li>
          <a>Minha lista</a>
        </li>
        <li>
          <a>
            <CiBellOn></CiBellOn>
          </a>
        </li>
        <li>
          <a>
            <CiUser></CiUser>
          </a>
        </li>
      </ul>
    </nav>
  );
}
