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
        <ul className="nav-menu ">
          <li className="navbar-ul-li-item">
            <h1>
              <b>News</b>
            </h1>
          </li>
          <li className="navbar-ul-li-item">
            <h1>
              <b>Article</b>
            </h1>
          </li>
          <li className="navbar-ul-li-item">
            <h1>
              <b>Product</b>
            </h1>
          </li>
          <li className="navbar-ul-li-item">
            <h1>
              <b>Staff</b>
            </h1>
          </li>
          <li className="navbar-ul-li-item">
            <h1>
              <b>Contact</b>
            </h1>
          </li>
        </ul>
      </div>
    </div>
  );
}
