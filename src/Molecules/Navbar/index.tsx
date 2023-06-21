import "./styles.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__title">
        <a className="navbar__logo">Kenai</a>
      </div>
      <ul className="navbar__icons">
        <li>
          <a>icone1</a>
        </li>
        <li>
          <a>Inicio</a>
        </li>
        <li>
          <a>Minha lista</a>
        </li>
        <li>
          <a>icone2</a>
        </li>
        <li>
          <a>icone3</a>
        </li>
      </ul>
    </nav>
  );
}
