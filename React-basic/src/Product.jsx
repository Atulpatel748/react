import "./Product.css";
import Price from "./Price.jsx";

function Product({ title, idx }) {
  let oldPrices = ["12,495", "11,900", "1,599", "599"];
  let newPrices = ["8,999", "9,199", "899", "278"];
  let description = [
    ["8,000 DPI", "5 Programmable"],
    ["intuitive surface", "designed for iPad Pro"],
    ["designed for iPad Pro", "intuitive surface"],
    ["wireless", "optical orientation"],
  ];

  return (
    <div className="Product">
      <div className="product-text">
        <h4>{title}</h4>
        <p className="product-feature">{description[idx][0]}</p>
        <p className="product-feature">{description[idx][1]}</p>
      </div>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    </div>
  );
}

export default Product;
