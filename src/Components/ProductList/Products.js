import ProductDetails from './ProductDetails';

// let productCount = 0;
//let imageUrl = require("../images/fresh-milk.png");
// let style = {
//   padding: "0px 20px",
//   fontSize: 14,
// };
// let isAvailable = "Available";

// let badgeClass = "badge-margin-left-240 badge ";
// badgeClass += isAvailable === "Available" ? "bg-success" : "bg-danger";

// function displayFormattedProductCount() {
//   return productCount > 0 ? productCount : "Zero";
// }
function Products(props) {
  // let badgeClass = "badge-margin-left-240 badge ";
  // badgeClass += props.isAvailable ? "bg-success" : "bg-danger";
  return (
    <li
      className="list-group-item"
      style={{ background: props.isAvailable ? 'white' : '#dedede' }}
    >
      <div className="media align-iems-lg-center flex-column flex-lg-row p-3 d-flex">
        <div className="media-body order-2 order-lg-1">
          <h5 className="mt-0 font-weight-bold mb-2">{props.name}</h5>
          <p className="text-info small">({props.stock} Stock)</p>
          <p className="font-italic text-muted mb-0 small">
            {props.description}
          </p>
          <ProductDetails
            price={props.price}
            isAvailable={props.isAvailable}
            stock={props.stock}
          />
        </div>
        <img
          src={props.imageUrl}
          alt="generic placeholder"
          width="200"
          className="ml-lg-5 order-1 order-lg-2"
        />
      </div>
    </li>
  );
}

export default Products;
