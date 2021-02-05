import React, { Component } from "react";
import ApiService from "../service/ApiService";
class addProductComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productCode: "",
      productName: "",
      productDesc: "",
      productPrice: "",
      productAge: "",
      message: null,
    };
  }
  saveProduct = (e) => {
    e.preventDefault();
    let product = {
      productCode: this.state.productCode,
      productName: this.state.productName,
      productDesc: this.state.productDesc,
      productPrice: this.state.productPrice,
      productAge: this.state.productAge,
    };
    ApiService.addProduct(product).then((res) => {
      this.setState({ message: "Product added successfully" });
      this.props.history.push("/products");
    });
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <h2 className="text-center">Add Product</h2>
        <form>
          <div className="form-group">
            <label>Product Code:</label>
            <input
              type="text"
              placeholder="productcode"
              name="productCode"
              className="form-control"
              value={this.state.productCode}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label>Product Name:</label>
            <input
              type="text"
              placeholder="productname"
              name="productName"
              className="form-control"
              value={this.state.productName}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label>Product Description: </label>
            <input
              placeholder="Product Description"
              name="productDesc"
              className="form-control"
              value={this.state.productDesc}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label>Product Price: </label>
            <input
              type="number"
              step="0.01"
              placeholder="Product Price"
              name="productPrice"
              className="form-control"
              value={this.state.productPrice}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label>Product Age:</label>
            <input
              type="number"
              placeholder="Product Age"
              name="productAge"
              className="form-control"
              value={this.state.productAge}
              onChange={this.onChange}
            />
          </div>

          <button className="btn btn-success" onClick={this.saveProduct}>
            Save
          </button>
        </form>
      </div>
    );
  }
}
export default addProductComponent;
