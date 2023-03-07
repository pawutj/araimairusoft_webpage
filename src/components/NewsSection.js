import NewComponent from "./NewComponent";

import bg from "../asset/background-table.png";
import Image from "next/image";
import article1 from "../../public/article1.png";
import article2 from "../../public/article2.png";
import article3 from "../../public/article3.png";

export default function NewsSection() {
  return (
    <div>
      <div class="row section">
        <div class="col-sm-2"></div>
        <div class="col-sm-8">
          <div className="news-section">
            <h1>News</h1>
            <NewComponent text="Sakura, Moyu. -as the Night's, Reincarnation- AAAAAAAAAAAAAAAAAAAA" />
            <NewComponent text="Sakura, Moyu. -as the Night's, Reincarnation-" />
            <NewComponent text="Sakura, Moyu. -as the Night's, Reincarnation-" />
            <NewComponent text="Sakura, Moyu. -as the Night's, Reincarnation-" />
          </div>
        </div>
        <div class="col-sm-2"></div>
      </div>

      <div class="row section">
        <div className="col-2"></div>

        <div class="col-8">
          <h1>Article</h1>
          <Image src={article1} height={140} width={300} />
          <Image src={article2} height={140} width={300} />
          <Image src={article3} height={140} width={300} />
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}
