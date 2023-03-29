import Section from './Section';
import PurpleSection from './PurpleSection';
import footer from '../asset/footer.png';
import join_us from '../../public/join_us.png';
import Image from 'next/image';
import purplewave_rotate_flip from "../../public/footer.png";

export default function Contact({ children, style }) {
  return (
    <PurpleSection>
      <div
        className="row section product --bs-gutter-x0"
        style={{ background: '#E0ECFD', marginBottom: '0' }}
      >
        <Section>
          <div style={{ marginLeft: 24 }} id="contact">
            <div className="row thai-font">
              <div className="col-sm-4">
                <h1 className='thai-font' style={{ marginBottom: 40 }}>
                  <b>Join Now</b>
                </h1>
                <h1 className='thai-font' style={{ marginBottom: 28 }}>
                  <b>ประกาศรับสมัคร</b>
                </h1>
                  <ul className="liststyledot ">
                    <li className="liststyledot paragraph ">กรรมกรนักวาดรูป</li>
                    <li className="liststyledot paragraph">กรรมกรเลื่อนปุ่ม</li>
                    <li className="liststyledot paragraph">กรรมกรเขียนบท</li>

                  </ul>
              </div>
              <div className="col-sm-8">
              <Image src={join_us} layout={"responsive"} style={{ padding: "0" }} />

              </div>
            </div>
          </div>
          <div style={{ marginLeft: 24 }} id="contact">
            <h1 style={{ marginBottom: 24 }}>
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
