import Image from 'next/image';
import purplewave from '../../public/purplewave.png';
import purplewave_rotate_flip from '../../public/purplewave_rotate_flip.png';


export default function PurpleSection({children}) {

  return (
    <div className="section product">
      <Image src={purplewave} layout={'responsive'} style={{ padding: '0' }} />

      {children}
      <Image
        src={purplewave_rotate_flip}
        layout={'responsive'}
        style={{ padding: '0' }}
      />
    </div>
  );
}
