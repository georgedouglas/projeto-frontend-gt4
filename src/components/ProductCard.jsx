import { Link } from "react-router-dom";
import { currency, currentPrice } from "../catalog";
import ProductImage from "./ProductImage";

export default function ProductCard({ product }) {
  const discount = Math.round(100 * (1 - currentPrice(product) / product.price));

  return (
    <article>
      <Link className="product-card group" to={`/product/${product.id}`}>
        <div className="product-image">
          {discount > 0 && <span className="discount">{discount}% OFF</span>}
          <ProductImage className="h-full w-full" image={product.image} alt="" loading="lazy" />
        </div>
        <span className="mt-4 block text-xs font-bold text-dark-gray-3">Tênis</span>
        <h3 className="mt-1 text-lg text-dark-gray-2 group-hover:text-primary">{product.name}</h3>
        <p className="mt-1 flex flex-wrap items-center gap-x-2 text-lg">
          {product.sale && <del className="text-dark-gray-3">{currency.format(product.price)}</del>}
          <strong>{currency.format(currentPrice(product))}</strong>
        </p>
      </Link>
    </article>
  );
}

