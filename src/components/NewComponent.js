export default function NewComponent({ date = "07/07/07", text = "" }) {
  return (
    <div className="new-component">
      <div className="row" style={{ width: "100%", fontSize: 16 }}>
        <div className="col-2 d-none d-lg-block">
          <h3 className="thai-font">{date} </h3>
        </div>
        <div className="col-10 thai-font">
          <h3 className="thai-font">{text} </h3>
        </div>
      </div>
    </div>
  );
}
