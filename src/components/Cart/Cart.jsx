import styles from "./Cart.module.css";

function Cart({ cart, subtotal, removeFromCart, updateQuantity }) {
  return (
    <>
      <h1>Your Basket</h1>

      <div className={styles.cartGrid}>
        {cart.map(({ id, name, price, quantity }) => (
          <div key={id} className={styles.cards}>
            <div className={styles.cartInfo}>
              <h2>{name}</h2>
              <p className={styles.priceDisplay}>
                <span>K{price.toFixed(2)}</span>
              </p>

              <p>Quantity: {quantity}</p>

              <div className={styles.cartInputBox}>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => updateQuantity(id, parseInt(e.target.value))}
                />
                <button onClick={() => removeFromCart(id)}>Remove</button>
              </div>
            </div>
          </div>
        ))}

        {cart.length === 0 && (
          <p className={styles.errMessage}>Your basket is currently empty.</p>
        )}
      </div>

      <div className={styles.subtotalWrapper}>
        <h3>
          Subtotal: <span>K{subtotal.toFixed(2)}</span>
        </h3>
      </div>
    </>
  );
}

export default Cart;
