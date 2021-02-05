import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import ListProductComponent from "./component/ListProductComponent";
import AddProductComponent from "./component/AddProductComponent";
import LoginComponent from "./component/LoginComponent";
import EditProductComponent from "./component/EditProductComponent";
function App() {
  return (
    <div className="container">
      <Router>
        <div className="col-md-6">
          <h1 className=" text-center" style={style}>
            React Product App
          </h1>
          <Switch>
            <Route path="/" exact component={LoginComponent} />
            <Route path="/products" exact component={ListProductComponent} />
            <Route path="/add-product" exact component={AddProductComponent} />
            <Route
              path="/edit-product"
              exact
              component={EditProductComponent}
            />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

const style = {
  color: "blue",
  margin: "10px",
};

export default App;
