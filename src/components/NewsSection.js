import NewComponent from "./NewComponent";

import bg from "../asset/background-table.png";
import Image from "next/image";
import article1 from "../../public/article1.png";
import article2 from "../../public/article2.png";
import article3 from "../../public/article3.png";
import Section from "./Section";
export default function NewsSection() {
  return (
    <div>
      <Section>
        <div className="news-section">
          <h1>
            <b>News</b>
          </h1>
          <NewComponent text="Sakura, Moyu. -as the Night's, Reincarnation- AAAAAAAAAAAAAAAAAAAA" />
          <NewComponent text="Sakura, Moyu. -as the Night's, Reincarnation-" />
          <NewComponent text="Sakura, Moyu. -as the Night's, Reincarnation-" />
          <NewComponent text="Sakura, Moyu. -as the Night's, Reincarnation-" />
        </div>
      </Section>

      <Section>
        <h1>
          <b>Article</b>
        </h1>
        <Image src={article1} height={140} width={300} />
        <Image src={article2} height={140} width={300} />
        <Image src={article3} height={140} width={300} />
      </Section>
    </div>
  );
}
