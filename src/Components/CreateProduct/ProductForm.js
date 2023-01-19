import { useState } from 'react';
function ProductForm(props) {
  //the multiplestate is more popular
  let [pName, updateName] = useState('');
  let [pPrice, updatePrice] = useState('');
  let [pDescription, updateDescription] = useState('');
  let [pAvailable, updateAvailaility] = useState(false);
  let [pimageUrl, updateImageUrl] = useState('');
  let [pStock, updateStock] = useState('');

  // The single state is not that popular but it works as well
  //   let [userInput, updateUserInput] = useState({
  //     pName: "",
  //     pPrice: "",
  //     pDescription: "",
  //     pAvailable: "",
  //     pImageUrl: "",
  //   });

  function nameInputHandler(event) {
    updateName(event.target.value);
    // this works for the single state but not the best practice
    // updateUserInput({
    //   ...userInput,
    //   pName: event.target.value,
    // });
    // this works best for the single state in the real world cases
    // updateUserInput((prevState)=>{
    //     return {...prevState, pName: event.target.value}
    // })
  }
  function priceInputHandler(event) {
    updatePrice(event.target.value);
    // updateUserInput({
    //   ...userInput,
    //   pPrice: event.target.value,
    // });
    // updateUserInput({
    //     ...userInput,
    //     pPrice: event.target.value,
    //   });
  }
  function descriptionInputHandler(event) {
    updateDescription(event.target.value);
    // updateUserInput({
    //   ...userInput,
    //   pDescription: event.target.value,
    // });
    // updateUserInput({
    //     ...userInput,
    //     pDescription: event.target.value,
    //   });
  }
  function availabilityInputHandler(event) {
    updateAvailaility(event.target.checked);
    // updateUserInput({
    //   ...userInput,
    //   pAvailable: event.target.value,
    // });
    // updateUserInput({
    //     ...userInput,
    //     pAvailable: event.target.value,
    //   });
  }
  function imageInputHandler(event) {
    updateImageUrl(event.target.value);
    // updateUserInput({
    //   ...userInput,
    //   pImageUrl: event.target.value,
    // });
    // updateUserInput({
    //     ...userInput,
    //     pImageUrl: event.target.value,
    //   });
  }
  function stockInputHandler(event) {
    updateStock(event.target.value);
  }

  function createProductEventHandler(event) {
    event.preventDefault();
    let product = {
      pID: 1,
      pName: pName,
      desc: pDescription,
      isAvailable: Boolean(pAvailable),
      image: pimageUrl,
      price: Number(pPrice),
      stock: Number(pStock),
    };
    updateName('');
    updatePrice('');
    updateDescription('');
    updateAvailaility(false);
    updateImageUrl('');
    // console.log(product);
    props.createProduct(product);
    props.onCancel();
  }
  return (
    <form className="row g-3" onSubmit={createProductEventHandler}>
      <div className="col-md-6">
        <label htmlFor="name">Product Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Product Name"
          value={pName}
          onChange={nameInputHandler}
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="price">Product Price</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          className="form-control"
          id="price"
          value={pPrice}
          placeholder="Product Price"
          onChange={priceInputHandler}
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="Product-stock">Product Stock</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          className="form-control"
          id="stock"
          value={pStock}
          placeholder="How many in stock?"
          onChange={stockInputHandler}
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Product Description</label>
        <input
          type="text"
          className="form-control"
          id="description"
          placeholder="Product Description"
          value={pDescription}
          onChange={descriptionInputHandler}
        />
      </div>

      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="isAvailable"
          checked={pAvailable}
          onChange={availabilityInputHandler}
        />
        <label className="form-check-label" htmlFor="isAvailable">
          Is product available in stock?
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="select-image">Select product image</label>
        <input
          type="file"
          className="form-control"
          id="select-image"
          value={pimageUrl}
          onChange={imageInputHandler}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Add Product
      </button>
      <button type="button" onClick={props.onCancel}>
        Cancel
      </button>
    </form>
  );
}

export default ProductForm;
