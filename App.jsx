
import React, { useState } from "react";
import "./App.css";
import AboutUs from "./AboutUs";
import ProductList from "./ProductList";
import CartItem from "./CartItem";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      {page === "home" && (
        <div className="landing-page">
          <div className="landing-content">
            <h1>Paradise Nursery</h1>
            <p>Where Green Meets Serenity</p>
            <p>
              Welcome to Paradise Nursery! Discover beautiful
              houseplants to brighten your home.
            </p>
            <AboutUs />
            <button
              className="get-started-button"
              onClick={() => setPage("plants")}
            >
              Get Started
            </button>
          </div>
        </div>
      )}

      {page === "plants" && (
        <ProductList
          onViewCart={() => setPage("cart")}
          onHome={() => setPage("home")}
        />
      )}

      {page === "cart" && (
        <CartItem
          onContinueShopping={() => setPage("plants")}
          onHome={() => setPage("home")}
        />
      )}
    </div>
  );
}

export default App;
