const Underline = ({ width }) => (
    <div
      className="underline"
      style={{
        margin: "auto",
        marginTop: "30px",
        marginBottom: "30px",
        width: width ? width : "79px",
        height: "3px",
        backgroundColor: "#292929",
      }}
    ></div>
  );

export default Underline