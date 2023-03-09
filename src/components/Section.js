export default function Section({ children, style }) {
  return (
    <>
      <div class="row section" style={{ ...style, marginTop: 60 }}>
        <div class="col-sm-2"></div>
        <div class="col-sm-8">{children}</div>
        <div class="col-sm-2"></div>
      </div>
    </>
  );
}
