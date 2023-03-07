import NewComponent from "./NewComponent";

import bg from "../asset/background-table.png";
import Image from "next/image";
import article1 from "../../public/article1.png";
import article2 from "../../public/article2.png";
import article3 from "../../public/article3.png";
export default function NewsSection() {
  return (
    <>
      <div
        class="row"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: 800,
        }}
      >
        <div class="col-2"></div>
        <div class="col-8">
          <div className="news-section">
            <h1>News</h1>
            <NewComponent text="sakura moyu" />
            <NewComponent text="sakura moyu" />
            <NewComponent text="sakura moyu" />
            <NewComponent text="sakura moyu" />
          </div>
        </div>
        <div class="col-2"></div>
      </div>

      <div class="row">
        <div className="col-2"></div>
        <div class="col">
          <Image src={article1} height={140} width={300} />
        </div>
        <div class="col">
          <Image src={article2} height={140} width={300} />
        </div>
        <div class="col">
          <Image src={article3} height={140} width={300} />
        </div>
        <div className="col-2"></div>
      </div>
    </>
  );
}
