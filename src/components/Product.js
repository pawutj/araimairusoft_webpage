import NewComponent from './NewComponent';
import ImageContainer from './ImageContrainer';
import Image from 'next/image';
import purplewave from '../../public/purplewave.png';
import purplewave_rotate_flip from '../../public/purplewave_rotate_flip.png';
import product_mbk from '../../public/product_mbk.png';
import product_ksns from '../../public/product_ksns.png';
import product_mns from '../../public/product_mns.png';
import PurpleSection from './PurpleSection';
export default function Product() {
  const product_list = [product_mbk, product_ksns, product_mns];

  return (
    <PurpleSection>

      <div
        className="row section product --bs-gutter-x0"
        style={{ background: '#E0ECFD', marginBottom: '0' }}
      >
        <div class="col-sm-2"></div>
        <div class="col-sm-8">
          <div className="news-section child-margin-24">
            <h1>Product</h1>
            {product_list.map((img) => (
              <Image src={img} layout={'responsive'} style={{ padding: '0' }} />
            ))}
          </div>
        </div>
        <div class="col-sm-2"></div>
      </div>

    </PurpleSection>
  );
}
