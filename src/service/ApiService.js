import React, { Component } from "react";

import axios from "axios"; //http library
import { API_URL } from "./ApiUrl";

console.log(API_URL);

const LOGIN_API_URL = API_URL + "authenticate";
const PRODUCT_API_BASE_URL = API_URL + "products";

// const LOGIN_API_URL = "http://localhost:8080/authenticate";
// const PRODUCT_API_BASE_URL = "http://localhost:8080/products";

class ApiService extends Component {
  fetchProducts() {
    return axios.get(PRODUCT_API_BASE_URL, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  }

  fetchProductById(productId) {
    return axios.get(PRODUCT_API_BASE_URL + "/" + productId, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  }

  deleteProduct(productId) {
    return axios.delete(PRODUCT_API_BASE_URL + "/" + productId, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  }

  addProduct(product) {
    return axios.post("" + PRODUCT_API_BASE_URL + "/add", product, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  }

  editProduct(product, id) {
    console.log(id);
    return axios.put(PRODUCT_API_BASE_URL + "/edit/" + id, product, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  }

  //

  fetchToken(token) {
    localStorage.setItem("token", token);
    console.log(" token is " + token);
  }
}

export default new ApiService();
