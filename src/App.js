import './App.css';
import Product from "./components/Product"
import products from "./data/product.js"
function App() {
  return (
    <div className="App">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default App;
