import React, { Component } from "react";
import ApiService from "../service/ApiService";

class EditProductComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: "",
      productCode: "",
      productName: "",
      productDesc: "",
      productPrice: "",
      productAge: "",
    };
  }
  componentDidMount() {
    this.loadUser();
  }
  loadUser() {
    ApiService.fetchProductById(window.localStorage.getItem("productId")).then(
      (res) => {
        let product = res.data;
        this.setState({
          productId: product.id,
          productCode: product.productCode,
          productName: product.productName,
          productDesc: product.productDesc,
          productPrice: product.productPrice,
          productAge: product.productAge,
        });
      }
    );
  }
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  saveProduct = (e) => {
    e.preventDefault();
    let product = {
      productId: this.state.productId,
      productCode: this.state.productCode,
      productName: this.state.productName,
      productDesc: this.state.productDesc,
      productPrice: this.state.productPrice,
      productAge: this.state.productAge,
    };

    ApiService.editProduct(product, product.productId).then((res) => {
      console.log(product);
      console.log(product.productId);
      this.setState({ message: "Product added successfully" });
      this.props.history.push("/products");
    });
  };

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
              readOnly={true}
              defaultValue={this.state.productCode}
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
export default EditProductComponent;
