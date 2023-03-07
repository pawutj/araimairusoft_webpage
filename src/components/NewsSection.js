import NewComponent from "./NewComponent";

import bg from "../asset/background-table.png";

export default function NewsSection() {
  return (
    <div
      className="news-section"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: 800,
      }}
    >
      <NewComponent text="sakura moyu" />
      <NewComponent text="sakura moyu" />
      <NewComponent text="sakura moyu" />
      <NewComponent text="sakura moyu" />
    </div>
  );
}
