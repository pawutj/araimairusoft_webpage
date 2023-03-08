import Section from './Section';
import PurpleSection from './PurpleSection';
export default function Contact({ children, style }) {
  return (
    <PurpleSection>
      <div
        className="row section product --bs-gutter-x0"
        style={{ background: '#E0ECFD', marginBottom: '0' }}
      >
        <Section>
            <h1>Contact</h1>
        </Section>
      </div>
    </PurpleSection>
  );
}
