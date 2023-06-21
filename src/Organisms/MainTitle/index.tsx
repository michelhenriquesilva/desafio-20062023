import "./styles.css";
import { AiFillStar } from "react-icons/ai";

export default function Navbar() {
  return (
    <section className="mainTitle">
      <span className="mainTitle__category">Ação</span>

      <span>
        <AiFillStar></AiFillStar>
      </span>
      <span>Icon</span>
      <span>Icon</span>
      <span>Icon</span>
      <span>Icon</span>

      <h1>Batman</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
        voluptatibus quia reiciendis nobis unde. Obcaecati dolor fuga qui vitae
        atque reiciendis asperiores voluptates repellendus totam dolorem, in, ad
        ullam. Dolores.
      </p>

      <a>Assistir agora</a>
      <div>
        <h2> Populares </h2>
        <div>
          {" "}
          <p>Shang Chi</p>
        </div>
        <div>
          {" "}
          <p>Wisa Dragon</p>
        </div>
        <div>
          <p>Loki</p>
        </div>
        <div>
          <p>Spider Man</p>
        </div>
        <div>
          <p>The Witcher</p>
        </div>
      </div>
    </section>
  );
}
