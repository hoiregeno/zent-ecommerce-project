import { useState, useEffect } from "react";

export const useCart = () => {
  // --- A. State & Initialization ---
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("items");
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error("Failed to parse cart data:", error);
      return [];
    }
  });

  // --- B. Persistence (Side Effects) ---
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(cart));
  }, [cart]);

  // --- C. Actions / Handlers ---
  const addToCart = (product) => {
    // 1. Ensure product has a valid ID
    if (!product?.id) return;

    // 2. Check if the item already exists
    const isDuplicate = cart.some((item) => item.id === product.id);

    if (isDuplicate) {
      alert(`${product.name} is already in the cart!`);
      return;
    }

    // 3. Update the cart array
    setCart((prev) =>
      // Add item to array with base quantity if item is new
      [...prev, { ...product, quantity: 1 }],
    );
  };

  const removeFromCart = (productId) => {
    if (window.confirm(`Are you sure to remove item?`)) {
      // Update cart array
      setCart((prev) => prev.filter((item) => item.id !== productId));
    }
  };

  const updateQuantity = (productId, amount) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId
          ? // max() ensures quantity never drops below 1
            { ...item, quantity: Math.max(1, amount) }
          : item,
      ),
    );
  };

  // Derived State (any value that can be calculated using the existing state)
  // D. Recalculate subtotal automatically only when cart changes
  const subtotal = cart.reduce(
    (acc, { price, quantity }) => acc + price * quantity, // Removed redundant "|| 1"
    0,
  );

  // E. Return a object with props
  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    subtotal,
  };
};
