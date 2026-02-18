import { useCart } from "./hooks/useCart";
import { Cart, ProductList } from "./components/index";

function App() {
  const { cart, addToCart, subtotal, removeFromCart, updateQuantity } =
    useCart();

  return (
    <>
      <main>
        {/* --- Store Section --- */}
        <section>
          <ProductList addToCart={addToCart} />
        </section>

        {/* --- Cart Section --- */}
        <aside>
          <Cart
            cart={cart}
            subtotal={subtotal}
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
          />
        </aside>
      </main>
    </>
  );
}

export default App;
