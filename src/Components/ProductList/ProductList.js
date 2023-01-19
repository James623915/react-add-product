import Products from './Products';

function ProductList(props) {
  // console.log(props.newProduct);

  // if (props.newProductList.length === 0) return <h1>No products available!</h1>;

  return props.newProductList.length === 0 ? (
    <h1>No products available!</h1>
  ) : (
    <ul className="list-group shadow">
      {props.newProductList.map((product) => {
        return (
          <Products
            key={product.pID}
            id={product.pID}
            name={product.pName}
            description={product.desc}
            isAvailable={product.isAvailable}
            imageUrl={product.image}
            price={product.price}
            stock={product.stock}
          />
        );
      })}
    </ul>
  );
}
export default ProductList;
