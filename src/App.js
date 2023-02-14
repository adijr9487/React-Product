import React from "react"
import './App.css';
import Product from "./components/Product"
// import products from "./data/product.js"
function App() {

  const [products, setProducts] = React.useState([])

  React.useEffect(() => {
    
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
          setProducts(data.products)
      })
      .catch((error) => console.log(error));
  
  }, []);

  return (
    <div className="App">
      {products.length > 0 && products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default App;
