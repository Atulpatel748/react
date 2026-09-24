import Product from "./Product.jsx";

function ProductTab() {
  let styles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "stretch",
    gap: "20px",
    padding: "20px 12px 40px",
  };

  return (
    <div style={styles}>
      <Product title="Logitech MX" idx={0} />
      <Product title="Apple Pencil" idx={1} />
      <Product title="Zebronics" idx={2} />
      <Product title="Petronics Toad" idx={3} />
    </div>
  );
}

export default ProductTab;
