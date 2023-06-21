import "./styles.css";
import { AiFillStar } from "react-icons/ai";

export default function Navbar() {
  return (
    <section className="mainTitle">
      <div>
        <span className="mainTitle__category">Ação</span>
        <div>
          <div>
            <span>
              <AiFillStar></AiFillStar>
            </span>
            <span>
              <AiFillStar></AiFillStar>
            </span>
            <span>
              <AiFillStar></AiFillStar>
            </span>
            <span>
              <AiFillStar></AiFillStar>
            </span>
            <span>
              <AiFillStar></AiFillStar>
            </span>
          </div>

          <div>
            <span>time</span>
            <span>1h 57m</span>
          </div>
        </div>

        <div>
          <h1 className="mainTitle__movieName">Batman</h1>
          <p className="mainTitle__movieDescription">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
            voluptatibus quia reiciendis nobis unde. Obcaecati dolor fuga qui
            vitae atque reiciendis asperiores voluptates repellendus totam
            dolorem, in, ad ullam. Dolores.
          </p>

          <a className="mainTitle__mainButton">Assistir agora</a>
        </div>
      </div>

      <div className="popularMovies">
        <h2> Populares </h2>
        <div className="popularMovies__movie">
          <span className="mainTitle__category">Categoria</span>
          <div>
            <span>
              <AiFillStar></AiFillStar>
            </span>
            <span>
              <AiFillStar></AiFillStar>
            </span>
            <span>
              <AiFillStar></AiFillStar>
            </span>
            <span>
              <AiFillStar></AiFillStar>
            </span>
            <span>
              <AiFillStar></AiFillStar>
            </span>
          </div>

          <p>Shang Chi</p>
        </div>
        <div className="popularMovies__movie">
          <span className="mainTitle__category">Categoria</span>
          <div>
            <span>
              <AiFillStar></AiFillStar>
            </span>
            <span>
              <AiFillStar></AiFillStar>
            </span>
            <span>
              <AiFillStar></AiFillStar>
            </span>
            <span>
              <AiFillStar></AiFillStar>
            </span>
            <span>
              <AiFillStar></AiFillStar>
            </span>

            <p>Wisa Dragon</p>
          </div>
        </div>
        <div className="popularMovies__movie">
          <span className="mainTitle__category">Categoria</span>
          <div>
            <span>
              <AiFillStar></AiFillStar>
            </span>
            <span>
              <AiFillStar></AiFillStar>
            </span>
            <span>
              <AiFillStar></AiFillStar>
            </span>
            <span>
              <AiFillStar></AiFillStar>
            </span>
            <span>
              <AiFillStar></AiFillStar>
            </span>

            <p>Loki</p>
          </div>
        </div>
        <div className="popularMovies__movie">
          <span className="mainTitle__category">Categoria</span>
          <div>
            <span>
              <AiFillStar></AiFillStar>
            </span>
            <span>
              <AiFillStar></AiFillStar>
            </span>
            <span>
              <AiFillStar></AiFillStar>
            </span>
            <span>
              <AiFillStar></AiFillStar>
            </span>
            <span>
              <AiFillStar></AiFillStar>
            </span>

            <p>Spider Man</p>
          </div>
        </div>
        <div className="popularMovies__movie">
          <span className="mainTitle__category">Categoria</span>
          <div>
            <span>
              <AiFillStar></AiFillStar>
            </span>
            <span>
              <AiFillStar></AiFillStar>
            </span>
            <span>
              <AiFillStar></AiFillStar>
            </span>
            <span>
              <AiFillStar></AiFillStar>
            </span>
            <span>
              <AiFillStar></AiFillStar>
            </span>

            <p>The Witcher</p>
          </div>
        </div>
      </div>
    </section>
  );
}
