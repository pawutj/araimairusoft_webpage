import Link from "next/link";
export default function Navbar() {
  return (
    <div className="navbar navbar-bg mynavbar color-brown navbar-expand-md">
      <h1 className="navbar-brand mynavbar-brand color-brown">
        <b>aRaimaiRuSoft</b>
      </h1>
      <div
        className="collapse navbar-collapse"
        style={{
          flexGrow: "0",
          marginTop: 16,
        }}
      >
        <ul className="nav-menu">
          <li className="navbar-ul-li-item">
            <h1>
              <Link href="#news" scroll={false}>
                <b>News</b>
              </Link>
            </h1>
          </li>
          <li className="navbar-ul-li-item">
            <h1>
              <Link href="#article" scroll={false}>
                <b>Article</b>
              </Link>
            </h1>
          </li>
          <li className="navbar-ul-li-item">
            <h1>
              <Link href="#product" scroll={false}>
                <b>Product</b>
              </Link>
            </h1>
          </li>
          <li className="navbar-ul-li-item">
            <h1>
              <Link href="#staff" scroll={false}>
                <b>Staff</b>
              </Link>
            </h1>
          </li>
          <li className="navbar-ul-li-item">
            <h1>
              <Link href="#contact" scroll={false}>
                <b>Contact</b>
              </Link>
            </h1>
          </li>
        </ul>
      </div>
    </div>
  );
}
