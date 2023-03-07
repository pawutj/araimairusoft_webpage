export default function NewComponent({ text = "" }) {
  return (
    <div className="new-component">
      <div className="row" style={{ width: "100%" }}>
        <div className="col-2"> 07/07/07</div>
        <div className="col-10"> {text}</div>
      </div>
    </div>
  );
}
