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
          <NewComponent
            date="01/04/2566"
            text="Demo MiraO No Boken คลอดแล้ว เจอกันวันที่ 01/04/2566"
          />
          <NewComponent
            date="01/04/2566"
            text="ช๊อค !! พนักงานทั้งบริษัทออกไปเลี้ยงแมวน้ำ รับสมัครเพื่อนใหม่ด่วน !!"
          />
          <NewComponent
            date="01/04/2566"
            text="ข้าวแดงอร่อยมาก รีวิวโดยโลลิคอนคนนึงที่กำลังเขียนโปรแกรมอยู่"
          />

          <NewComponent
            date="01/04/2566"
            text="เลื่อนอีกแล้ว ! Mirao No Boken ผู้แต่งบอก น้องสาวหายไป ต้องไปตามหา"
          />
        </div>
      </Section>

      <Section>
        <div className="margin-24">
          <h1>
            <b>Article</b>
          </h1>
          <div className="row">
            <div className="col-sm-4">
              <a href="http://www.google.com">
                <Image
                  src={article1}
                  layout={"responsive"}
                  style={{ padding: 20 }}
                />
              </a>
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
