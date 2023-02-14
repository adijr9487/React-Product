import React from "react";
import "./App.css";
import Product from "./components/Product";
import Loader from "./utils/loader/loader";
// import products from "./data/product.js"
function App() {
  const [products, setProducts] = React.useState(null);

  React.useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => console.log(error));
  }, []);

  const product = () => {
    if (products === null) {
      return <Loader />;
    } else {
      return products.map((product) => (
        <Product key={product.id} product={product} />
      ));
    }
  };

  return <div className="App">{product()}</div>;
}

export default App;
