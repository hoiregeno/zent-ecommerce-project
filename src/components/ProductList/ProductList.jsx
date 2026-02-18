import { products } from "../../data/productData";
import styles from "./ProductList.module.css";

function ProductList({ addToCart }) {
  return (
    <>
      <h1>Store</h1>
      <div className={styles.productList}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            {/* --- IMAGES --- */}
            <div className={styles.imgWrapper}>
              <img src={product.src} alt={product.name} loading="lazy" />
            </div>

            {/* --- PRODUCT INFO --- */}
            <div className={styles.productInfo}>
              <h2>{product.name}</h2>
              <p>{product.desc}</p>
              <p>K{product.price.toFixed(2)}</p>
              <button onClick={() => addToCart(product)}>Add</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductList;
