import Section from "./Section";
import Image from "next/image";
import SEO from "../../public/SEO.png";
import SealAraiOfficer from "../../public/SealAraiOfficer.png";
import SealArtistOfficer from "../../public/SealArtistOfficer.png";

const ResponsiveDiv = ({ children }) => {
  return (
    <div>
      <div class="d-md-none" style={{ padding: 40 }}>
        {children}
      </div>
      <div class="d-none d-md-block">{children}</div>
    </div>
  );
};

export default function Staff({ children, style }) {
  return (
    <Section>
      <div style={{ paddingLeft: 24 }}>
        <h1>
          <b>Staff</b>
        </h1>
        <div className="row" style={{ justifyContent: "center" }}>
          <div className="col-md-4">
            <ResponsiveDiv>
              <Image src={SEO} layout={"responsive"} />
              <h2 className="staff-center-txt">Seal Excutive Officer</h2>
            </ResponsiveDiv>
          </div>
        </div>
        <div className="row" style={{ justifyContent: "space-evenly" }}>
          <div className="col-md-4">
            <ResponsiveDiv>
              <Image src={SealArtistOfficer} layout={"responsive"} />
              <h2 className="staff-center-txt">Seal Artist Officer</h2>
            </ResponsiveDiv>
          </div>
          <div className="col-md-4">
            <ResponsiveDiv>
              <Image src={SealAraiOfficer} layout={"responsive"} />
              <h2 className="staff-center-txt">Seal Araimairu Officer</h2>
            </ResponsiveDiv>
          </div>
        </div>
      </div>
    </Section>
  );
}
