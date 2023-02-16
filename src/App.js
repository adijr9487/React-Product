import React, { useState, useEffect } from "react";
import "./App.css";
import Product from "./components/Product/Product";
import Search from "./components/Search/Search";
import Loader from "./utils/loader/loader";
// import products from "./data/product.js"

function App() {
  const [products, setProducts] = useState(null);

  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => {
        setError("Error while fetching data");
      });
  }, []);

  const product = () => {
    // error
    if (error) {
      return <div className="error-card">{error}</div>;
    }
    // loading
    if (products === null) {
      return <Loader />;
    } else if (products.length === 0) {
      return <div className="error-card">No products found</div>;
    } else {
      return products.map((product) => {
        if (product.title.toLowerCase().includes(search.toLowerCase())) {
          return <Product key={product.id} product={product} />;
        }
        return null;
      });
    }
  };

  return (
    <>
      <Search setSearch={setSearch} />
      <div className="App">{product()}</div>
    </>
  );
}

export default App;
