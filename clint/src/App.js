import React, { useEffect, useState } from "react";
import Cart from "./components/Cart/Cart";
import Filter from "./components/Filter/Filter";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./components/Product/Products";
import { Provider } from "react-redux";
import data from "./data.json";
import store from "./store/store";

function App() {
  const [products, setProducts] = useState(data);
  const [sort, setSort] = useState();
  const [size, setSize] = useState();
  const [cartItem, setCartItem] = useState(
    JSON.parse(localStorage.getItem("cartItem")) || []
  );

  const handleFilterBySize = (e) => {
    setSize(e.target.value);
    if (e.target.value === "ALL") {
      setProducts(data);
    } else {
      const productClone = [...products];
      const newProduct = productClone.filter(
        (p) => p.sizes.indexOf(e.target.value) !== -1
      );
      setProducts(newProduct);
    }
  };

  const handleFilterBySort = (e) => {
    const order = e.target.value;
    setSort(order);
    const productClone = [...products];
    const newProduct = productClone.sort(function (a, b) {
      if (order === "Lower") {
        return a.price - b.price;
      } else if (order === "Highst") {
        return b.price - a.price;
      } else {
        return a.id < b.id ? 1 : -1;
      }
    });
    setProducts(newProduct);
  };

  const addToCart = (product) => {
    const cartItemsClone = [...cartItem];
    var isProductExist = false;
    cartItemsClone.forEach((p) => {
      if (p.id === product.id) {
        p.qty++;
        isProductExist = true;
      }
    });
    if (!isProductExist) {
      cartItemsClone.push({ ...product, qty: 1 });
    }
    setCartItem(cartItemsClone);
  };
  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartItem));
  });
  const removeFromCart = (product) => {
    const cartItemsClone = [...cartItem];
    setCartItem(cartItemsClone.filter((p) => p.id !== product.id));
  };

  return (
    <Provider store={store}>
      <div className="layout">
        <Header />
        <main>
          <div className="wrapper">
            <Products products={products} addToCart={addToCart} />
            <Filter
              productNumber={products.length}
              handleFilterBySize={handleFilterBySize}
              size={size}
              handleFilterBySort={handleFilterBySort}
              sort={sort}
            />
          </div>
          <Cart cartItem={cartItem} removeFromCart={removeFromCart} />
        </main>

        <Footer />
      </div>
    </Provider>
  );
}

export default App;
