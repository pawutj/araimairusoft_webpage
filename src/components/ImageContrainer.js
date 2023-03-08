export default function ImageContainer({imagepath=""}) {
    return (
      <div className="new-component">
        <div className="row" style={{ width: "100%" }}>
            <Image src={imagepath} layout={"responsive"} />
        </div>
      </div>
    );
  }
  