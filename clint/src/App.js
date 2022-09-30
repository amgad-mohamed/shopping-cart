import React, { useState } from "react";
import Filter from "./components/Filter/Filter";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./components/Product/Products";
import data from "./data.json";

function App() {
  const [products, setProducts] = useState(data);
  const [sort, setSort] = useState();
  const [size, setSize] = useState();

  const handleFilterBySize = (e) => {
    setSize(e.target.value);
    if (e.target.value === "ALL") {
      setProducts (data);
    }
    else{
      const productClone = [...products] ;
    const newProduct = productClone.filter((p) =>  p.sizes.indexOf(e.target.value) !== -1 )
    setProducts  (newProduct);}
  };
  console.log(products);

  const handleFilterBySort = (e) => {
    const order = e.target.value;
    setSort (order)
    const productClone = [...products] ;
    const newProduct = productClone.sort(function (a ,b) {
      if(order === "Lower"){
        return a.price -b.price
      }else if (order === "Highst")
       { return b.price -a.price}
       else{
        return a.id < b.id ?  1 : -1
       }
    })
    setProducts(newProduct)
  };

  return (
    <div className="layout">
      <Header />
      <main>
        <div className="wrapper">
          <Products products={products} />
          <Filter
            handleFilterBySize={handleFilterBySize}
            size={size}
            handleFilterBySort={handleFilterBySort}
            sort={sort}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
