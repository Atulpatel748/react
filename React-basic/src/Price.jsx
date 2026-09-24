export default function Price({ oldPrice, newPrice }) {
  let oldStyles = {
    textDecorationLine: "line-through",
    color: "#4b5563",
    opacity: 0.8,
    fontSize: "0.82rem",
  };

  let newStyles = {
    fontWeight: "700",
    color: "#111827",
    fontSize: "1.05rem",
    letterSpacing: "0.02em",
  };

  let styles = {
    background: "linear-gradient(180deg, #f3d871 0%, #e4c65d 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    minHeight: "30px",
    width: "100%",
    padding: "8px 14px",
    borderBottomLeftRadius: "18px",
    borderBottomRightRadius: "18px",
    marginTop: "14px",
    boxSizing: "border-box",
  };

  return (
    <div style={styles}>
      <span style={oldStyles}>&#8377;{oldPrice}</span>
      <span style={newStyles}>&#8377;{newPrice}</span>
    </div>
  );
}
