import NewComponent from "./NewComponent";

import bg from "../asset/background-table.png";
import Image from "next/image";
import article1 from "../../public/article1.png";
import article2 from "../../public/article2.png";
import article3 from "../../public/article3.png";
import Section from "./Section";

const ResponsiveDiv = ({ children }) => {
  return (
    <div>
      <div
        class="d-md-none"
        style={{ paddingLeft: 60, paddingRight: 60, paddingTop: 10 }}
      >
        {children}
      </div>
      <div class="d-none d-md-block">{children}</div>
    </div>
  );
};

export default function NewsSection() {
  return (
    <div>
      <Section>
        <div className="news-section margin-24" id="news">
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
        <div className="margin-24" id="article">
          <h1>
            <b>Article</b>
          </h1>
          <div className="row">
            <div className="col-md-4">
              <ResponsiveDiv>
                <a href="https://pawutjingjit.medium.com/restful-spring-boot-unit-test-part-1-b9cf51faf8fc">
                  <Image src={article1} layout={"responsive"} />
                </a>
              </ResponsiveDiv>
            </div>
            <div className="col-md-4">
              <ResponsiveDiv>
                <Image src={article2} layout={"responsive"} />
              </ResponsiveDiv>
            </div>
            <div className="col-md-4">
              <ResponsiveDiv>
                <Image src={article3} layout={"responsive"} />
              </ResponsiveDiv>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
