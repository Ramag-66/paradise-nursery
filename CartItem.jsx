
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";
import "./App.css";

function CartItem({ onContinueShopping, onHome }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalQuantity = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleIncrease = (item) => {
    dispatch(updateQuantity({
      id: item.id,
      quantity: item.quantity + 1
    }));
  };

  const handleDecrease = (item) => {
    dispatch(updateQuantity({
      id: item.id,
      quantity: item.quantity - 1
    }));
  };

  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    alert("Coming Soon! Checkout will be available soon.");
  };

  return (
    <div className="cart-page">
      <nav style={styles.navbar}>
        <h2>🌿 Paradise Nursery</h2>

        <div style={styles.links}>
          <button onClick={onHome}>Home</button>
          <button onClick={onContinueShopping}>Plants</button>
          <button>🛒 Cart ({totalQuantity})</button>
        </div>
      </nav>

      <main style={styles.container}>
        <h1>Shopping Cart</h1>

        <h2>Total Cart Amount: ${totalAmount.toFixed(2)}</h2>
        <p>Total Items: {totalQuantity}</p>

        {cartItems.length === 0 ? (
          <p>Your shopping cart is empty.</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div key={item.id} style={styles.cartItem}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={styles.image}
                />

                <div style={styles.details}>
                  <h3>{item.name}</h3>

                  <p>Unit Price: ${item.price.toFixed(2)}</p>

                  <p>
                    Total Cost: $
                    {(item.price * item.quantity).toFixed(2)}
                  </p>

                  <div style={styles.quantityControls}>
                    <button
                      onClick={() => handleDecrease(item)}
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => handleIncrease(item)}
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => handleDelete(item.id)}
                    style={styles.deleteButton}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div style={styles.actions}>
          <button
            onClick={onContinueShopping}
            style={styles.shoppingButton}
          >
            Continue Shopping
          </button>

          <button
            onClick={handleCheckout}
            style={styles.checkoutButton}
          >
            Checkout
          </button>
        </div>
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
    padding: "15px 30px",
    backgroundColor: "#245b39",
    color: "white",
    gap: "15px"
  },

  links: {
    display: "flex",
    alignItems: "center",
    gap: "15px"
  },

  container: {
    maxWidth: "1000px",
    margin: "auto",
    padding: "30px"
  },

  cartItem: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "25px",
    padding: "20px",
    marginBottom: "20px",
    border: "1px solid #ddd",
    borderRadius: "12px",
    backgroundColor: "#f9f9f9"
  },

  image: {
    width: "150px",
    height: "150px",
    objectFit: "cover",
    borderRadius: "10px"
  },

  details: {
    flex: 1,
    minWidth: "200px"
  },

  quantityControls: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    marginBottom: "15px"
  },

  deleteButton: {
    backgroundColor: "#c62828",
    color: "white",
    padding: "10px 18px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  },

  actions: {
    display: "flex",
    flexWrap: "wrap",
    gap: "15px",
    marginTop: "30px"
  },

  shoppingButton: {
    backgroundColor: "#2e7d32",
    color: "white",
    padding: "14px 24px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
  },

  checkoutButton: {
    backgroundColor: "#1565c0",
    color: "white",
    padding: "14px 24px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
  }
};

export default CartItem;
