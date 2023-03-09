import Image from "next/image";
import purplewave from "../../public/purplewave.png";
import purplewave_rotate_flip from "../../public/footer.png";
export default function PurpleSection({ children }) {
  return (
    <div className="product">
      <Image src={purplewave} layout={"responsive"} style={{ padding: "0" }} />

      {children}
    </div>
  );
}
