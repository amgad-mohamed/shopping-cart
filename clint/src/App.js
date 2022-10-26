import React from "react";
import Cart from "./components/Cart/Cart";
import Filter from "./components/Filter/Filter";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./components/Product/Products";
import { Provider } from "react-redux";

import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="layout">
        <Header />
        <main>
          <div className="wrapper">
            <Products />
            <Filter />
          </div>
          <Cart />
        </main>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
