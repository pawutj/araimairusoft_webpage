import Section from './Section';
import Image from 'next/image';
import SEO from '../../public/SEO.png';
import SealAraiOfficer from '../../public/SealAraiOfficer.png';
import SealArtistOfficer from '../../public/SealArtistOfficer.png';



export default function Staff({ children, style }) {
  return (
    <Section>
      <h1>Staff</h1>
      <div className="row" style={{justifyContent:"center"}}>

        <div className="col-sm-4">
          <Image src={SEO} layout={'responsive'} style={{ padding: '0' }} />
          <h2 className='staff-center-txt'>Seal Excutive Officer</h2>
        </div>
      </div>
      <div className="row" style={{justifyContent:"space-evenly"}}>
        <div className="col-sm-4">
          <Image src={SealArtistOfficer} layout={'responsive'} style={{ padding: '0' }} />
          <h2 className='staff-center-txt'>Seal Artist Officer</h2>

        </div>
        <div className="col-sm-4">
          <Image src={SealAraiOfficer} layout={'responsive'} style={{ padding: '0' }} />
          <h2 className='staff-center-txt'>Seal Araimairu Officer</h2>

        </div>
      </div>
    </Section>
  );
}
