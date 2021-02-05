import React, { Component } from "react";
import ApiService from "../service/ApiService";
class ListProductComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      message: null,
    };
    this.addProduct = this.addProduct.bind(this);
    this.reloadProductList = this.reloadProductList.bind(this);
  }
  addProduct() {
    window.localStorage.removeItem("productId");
    this.props.history.push("/add-product");
  }
  deleteProduct(productId) {
    ApiService.deleteProduct(productId).then((res) => {
      this.setState({ message: "Product deleted successfully" });
      this.setState({
        products: this.state.products.filter(
          (product) => product.id !== productId
        ),
      });
    });
  }
  editProduct(id) {
    window.localStorage.setItem("productId", id);
    this.props.history.push("/edit-product");
  }

  componentDidMount() {
    this.reloadProductList();
  }
  reloadProductList() {
    ApiService.fetchProducts().then((res) => {
      this.setState({ products: res.data });
    });
  }

  render() {
    return (
      <div>
        <h2 className="text-center">List of Products</h2>

        <table className="table table-striped">
          <thead>
            <tr>
              <th className="hidden">Id</th>
              <th>Product Code</th>
              <th>Product Name</th>
              <th>Product Desc</th>
              <th>Product Price</th>
              <th>Product Age</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.products.map((product) => (
              <tr key={product.id}>
                <td>{product.productCode}</td>
                <td>{product.productName}</td>
                <td>{product.productDesc}</td>
                <td>{product.productPrice}</td>
                <td>{product.productAge}</td>
                <td>
                  <span
                    className="glyphicon glyphicon-remove"
                    onClick={() => this.deleteProduct(product.id)}
                  >
                    {" "}
                  </span>
                  <span
                    className="glyphicon glyphicon-pencil"
                    onClick={() => this.editProduct(product.id)}
                  >
                    {" "}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          className="btn btn-success"
          style={{ width: "100px" }}
          onClick={() => this.addProduct()}
        >
          {" "}
          Add Product
        </button>
      </div>
    );
  }
}

export default ListProductComponent;
