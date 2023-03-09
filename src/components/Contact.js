import Section from "./Section";
import PurpleSection from "./PurpleSection";
import footer from "../asset/footer.png";
import purplewave_rotate_flip from "../../public/footer.png";
import Image from "next/image";
export default function Contact({ children, style }) {
  return (
    <PurpleSection>
      <div
        className="row section product --bs-gutter-x0"
        style={{ background: "#E0ECFD", marginBottom: "0" }}
      >
        <Section>
          <h1 style={{ marginBottom: 24, marginTop: 24 }}>
            <b>Contact</b>
          </h1>

          <div className="row">
            <div className="col-sm-4">
              <h2 style={{ marginBottom: 16 }}>
                <b>Office</b>
              </h2>
              <h3 className="thai-font">
                69 Discord เขตอะไรไม่รู้ แขวงแมวน้ำชัยพร โลก 10XXXXX
              </h3>
            </div>
            <div className="col-sm-4">
              <h2 style={{ marginBottom: 16 }}>
                <b>Open Hours</b>
              </h2>
              <h3 className="thai-font">24 ชม. (Work Anytime)</h3>
            </div>
            <div className="col-sm-4">
              <h2 style={{ marginBottom: 16 }}>
                <b>Call Us</b>
              </h2>
              <h3 className="thai-font">06-666-6666</h3>
            </div>
          </div>
        </Section>
        <Image
          src={purplewave_rotate_flip}
          layout={"responsive"}
          style={{ padding: "0" }}
        />
        <div style={{ backgroundColor: "#003888", height: 85 }}></div>
      </div>
    </PurpleSection>
  );
}
