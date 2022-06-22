import { useState, useEffect } from "react";
import "./app.css";
import ProductCard from "./ProductCard";
import Navbar from "./Navbar";
import ProductDetail from "./ProductDetail";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [products, setProducts] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        let res = await fetch("http://localhost:8000/api/products");
        let data = await res.json();
        setProducts(data);
        setIsPending(false);
      } catch (err) {
        setError(err.message);
      }
    }
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <section className="products">
              {isPending && !error && <p>Loading...</p>}
              {error && <p>{error}</p>}

              {!isPending &&
                products &&
                products.map((product, index) => {
                  return <ProductCard key={index} data={product} />;
                })}
            </section>
          }
        />
        <Route path="/about" element={<h1>Welcome to About Page</h1>} />
        <Route path="/products/:productID" element={<ProductDetail/>} />
        <Route path="*" element={<h1>Sorry, Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
