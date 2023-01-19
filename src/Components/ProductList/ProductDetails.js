import { useState } from 'react';
import Button from './Button';

function ProductDetails(props) {
  let badgeClass = 'badge-margin-left-240 badge ';
  badgeClass += props.isAvailable ? 'bg-success' : 'bg-danger';
  // if (hour < 18) {
  //   greeting = "Good day";
  // } else {
  //   greeting = "Good evening";
  // }

  //let productCount = 0;

  let [productCount, updateCount] = useState(0);

  function displayFormattedProductCount() {
    // return productCount > 0 ? productCount : 0;
    return productCount > 0 ? productCount : 0;
  }

  let incrementProductCount = function () {
    // productCount++;
    // console.log(productCount);
    updateCount(++productCount);
  };

  let decrementProductCount = function () {
    // productCount--;
    // console.log(productCount);
    updateCount(--productCount);
  };
  return (
    <div className="d-flex align-items-center justify-content mt-1">
      <h6 className="font-weight-bold my-2" style={{ marginRight: 30 }}>
        ${props.price}
      </h6>
      {/* <button className="btn btn-primary">-</button> */}
      <Button
        eventHandler={decrementProductCount}
        disabled={productCount === 0}
      >
        -
      </Button>
      <span style={{ padding: '0px 14px', fontSize: 14 }}>
        {displayFormattedProductCount()}
      </span>
      {/* <button className="btn btn-primary">+</button> */}
      <Button
        eventHandler={incrementProductCount}
        disabled={productCount === props.stock}
      >
        +
      </Button>
      <span className={badgeClass}>
        {props.isAvailable ? 'Available' : 'Unavailable'}
      </span>
    </div>
  );
}

export default ProductDetails;
