
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";
import "./App.css";

const plants = [
  // Air-Purifying Plants
  { id: 1, name: "Snake Plant", price: 15, category: "Air-Purifying Plants", image: "https://images.unsplash.com/photo-1593482892290-f54927ae1bb2?w=400" },
  { id: 2, name: "Peace Lily", price: 18, category: "Air-Purifying Plants", image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400" },
  { id: 3, name: "Spider Plant", price: 12, category: "Air-Purifying Plants", image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400" },
  { id: 4, name: "Boston Fern", price: 16, category: "Air-Purifying Plants", image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400" },
  { id: 5, name: "Rubber Plant", price: 22, category: "Air-Purifying Plants", image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400" },
  { id: 6, name: "Areca Palm", price: 25, category: "Air-Purifying Plants", image: "https://images.unsplash.com/photo-1459156212016-c812468e2115?w=400" },

  // Aromatic Plants
  { id: 7, name: "Lavender", price: 14, category: "Aromatic Plants", image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400" },
  { id: 8, name: "Rosemary", price: 10, category: "Aromatic Plants", image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400" },
  { id: 9, name: "Mint", price: 8, category: "Aromatic Plants", image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400" },
  { id: 10, name: "Basil", price: 9, category: "Aromatic Plants", image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400" },
  { id: 11, name: "Jasmine", price: 20, category: "Aromatic Plants", image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400" },
  { id: 12, name: "Lemon Balm", price: 11, category: "Aromatic Plants", image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400" },

  // Decorative Plants
  { id: 13, name: "Monstera", price: 30, category: "Decorative Plants", image: "https://images.unsplash.com/photo-1545241047-6083a3684587?w=400" },
  { id: 14, name: "Pothos", price: 13, category: "Decorative Plants", image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400" },
  { id: 15, name: "Calathea", price: 24, category: "Decorative Plants", image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400" },
  { id: 16, name: "ZZ Plant", price: 21, category: "Decorative Plants", image: "https://images.unsplash.com/photo-1593482892290-f54927ae1bb2?w=400" },
  { id: 17, name: "Fiddle Leaf Fig", price: 35, category: "Decorative Plants", image: "https://images.unsplash.com/photo-1459156212016-c812468e2115?w=400" },
  { id: 18, name: "Anthurium", price: 28, category: "Decorative Plants", image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400" }
];

function ProductList({ onViewCart, onHome }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const categories = [...new Set(plants.map((plant) => plant.category))];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div className="product-page">
      <nav style={styles.navbar}>
        <h2>🌿 Paradise Nursery</h2>
        <div style={styles.links}>
          <button onClick={onHome}>Home</button>
          <a href="#plants">Plants</a>
          <button onClick={onViewCart}>
            🛒 Cart ({cartCount})
          </button>
        </div>
      </nav>

      <main id="plants" style={styles.main}>
        <h1>Our Beautiful Houseplants</h1>
        <p>Find the perfect plants for your home.</p>

        {categories.map((category) => (
          <section key={category}>
            <h2>{category}</h2>

            <div style={styles.grid}>
              {plants
                .filter((plant) => plant.category === category)
                .map((plant) => {
                  const alreadyAdded = cartItems.some(
                    (item) => item.id === plant.id
                  );

                  return (
                    <div key={plant.id} style={styles.card}>
                      <img
                        src={plant.image}
                        alt={plant.name}
                        style={styles.image}
                        loading="lazy"
                      />

                      <h3>{plant.name}</h3>
                      <p>${plant.price.toFixed(2)}</p>

                      <button
                        disabled={alreadyAdded}
                        onClick={() => handleAddToCart(plant)}
                        style={styles.addButton}
                      >
                        {alreadyAdded ? "Added to Cart" : "Add to Cart"}
                      </button>
                    </div>
                  );
                })}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "15px",
    padding: "15px 30px",
    backgroundColor: "#245b39",
    color: "white"
  },
  links: {
    display: "flex",
    gap: "15px",
    alignItems: "center"
  },
  main: {
    padding: "30px",
    maxWidth: "1200px",
    margin: "auto"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    marginBottom: "40px"
  },
  card: {
    padding: "20px",
    borderRadius: "12px",
    border: "1px solid #ddd",
    textAlign: "center",
    backgroundColor: "#fff"
  },
  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "8px"
  },
  addButton: {
    padding: "12px 18px",
    backgroundColor: "#2e7d32",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  }
};

export default ProductList;
