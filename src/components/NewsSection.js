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
        <div className="news-section margin-24">
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
        <div className="margin-24">
          <h1>
            <b>Article</b>
          </h1>
          <div className="row">
            <div className="col-sm-4">
              <Image
                src={article1}
                layout={"responsive"}
                style={{ padding: 20 }}
              />
            </div>
            <div className="col-sm-4">
              <Image
                src={article2}
                layout={"responsive"}
                style={{ padding: 20 }}
              />
            </div>
            <div className="col-sm-4">
              <Image
                src={article3}
                layout={"responsive"}
                style={{ padding: 20 }}
              />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
