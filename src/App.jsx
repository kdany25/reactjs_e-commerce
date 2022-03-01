import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import NotFound from "./pages/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";
const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <ProductList />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/success">
          <Success />
        </Route>

        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <SignUp />}
        </Route>
        <Route path="/not-found">
          <NotFound/>
        </Route>
        <Redirect to="/not-found"/>
      </Switch>
    </Router>
  );
};
export default App;
