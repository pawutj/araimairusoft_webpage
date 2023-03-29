import Image from "next/image";
import purplewave from "../../public/purplewave.png";
import purplewave_rotate_flip from "../../public/purplewave_rotate_flip.png";
export default function PurpleSection({ children,footer }) {
  return (
    <div className="product" id="product">
      <Image src={purplewave} layout={"responsive"} style={{ padding: "0" }} />

      {children}
      {footer?<Image src={purplewave_rotate_flip} layout={"responsive"} style={{ padding: "0" }} />:""}

    </div>
  );
}
