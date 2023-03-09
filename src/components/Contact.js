import Section from "./Section";
import PurpleSection from "./PurpleSection";
export default function Contact({ children, style }) {
  return (
    <PurpleSection>
      <div
        className="row section product --bs-gutter-x0"
        style={{ background: "#E0ECFD", marginBottom: "0" }}
      >
        <Section>
          <h1>
            <b>Contact</b>
          </h1>

          <div className="row">
            <div className="col-sm-4">
              <h2>
                <b>Office</b>
              </h2>
              <h3>69 Discord เขตอะไรไม่รู้ แขวงแมวน้ำชัยพร โลก 10XXXXX</h3>
            </div>
            <div className="col-sm-4">
              <h2>
                <b>Open Hours</b>
              </h2>
              <h3>24 ชม. (Work Anytime)</h3>
            </div>
            <div className="col-sm-4">
              <h2>
                <b>Call Us</b>
              </h2>
              <h3>06-666-6666</h3>
            </div>
          </div>
        </Section>
      </div>
    </PurpleSection>
  );
}
