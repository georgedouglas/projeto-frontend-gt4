import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "../components/ProductCard";
import Section from "../components/Section";
import { currency, currentPrice, products } from "../catalog";
import ProductImage from "../components/ProductImage";

const galleryColors = ["#e2e1fa", "#ffedc9", "#ffc8c4"];
const sizes = [37, 38, 39, 40, 41, 42, 43];

function ProductDetail({ product }) {
  const [photo, setPhoto] = useState(0);
  const [size, setSize] = useState(null);
  const gallery = [product.image, ...(product.gallery ?? [])];
  const related = products.filter((item) => item.id !== product.id).slice(0, 4);

  function movePhoto(step) {
    setPhoto((index) => (index + step + gallery.length) % gallery.length);
  }

  return (
    <div className="store-container py-8 sm:pb-20">
      <nav aria-label="Caminho da página" className="mb-7 flex flex-wrap gap-2 text-sm text-dark-gray-2">
        <Link className="hover:text-primary" to="/">Home</Link><span>/</span>
        <Link className="hover:text-primary" to="/products">Produtos</Link><span>/</span>
        <span aria-current="page">{product.name}</span>
      </nav>
      <div className="grid gap-8 md:grid-cols-[1.3fr_1fr] lg:gap-12">
        <div>
          <div className="relative grid aspect-[5/4] place-items-center rounded" style={{ backgroundColor: galleryColors[photo] }}>
            <ProductImage className="h-full min-h-0 w-full object-contain p-10" image={gallery[photo]} alt={`${product.name}, foto ${photo + 1}`} />
            {gallery.length > 1 && (
              <>
                <button className="gallery-arrow left-2" aria-label="Foto anterior" onClick={() => movePhoto(-1)}><ChevronLeft /></button>
                <button className="gallery-arrow right-2" aria-label="Próxima foto" onClick={() => movePhoto(1)}><ChevronRight /></button>
              </>
            )}
          </div>
          {gallery.length > 1 && <div className="mt-4 flex gap-3">
            {gallery.map((image, index) => (
              <button key={image} className={`grid size-20 cursor-pointer place-items-center rounded border-2 p-1 ${photo === index ? "border-primary" : "border-transparent"}`} style={{ backgroundColor: galleryColors[index] }} aria-label={`Ver foto ${index + 1}`} aria-pressed={photo === index} onClick={() => setPhoto(index)}>
                <ProductImage image={image} alt="" className="h-full w-full object-contain" />
              </button>
            ))}
          </div>}
        </div>
        <div>
          <h1 className="text-3xl font-extrabold sm:text-4xl">{product.name}</h1>
          <p className="mt-3 text-sm text-dark-gray-3">{product.category} · {product.brand} · {product.gender} · {product.condition}</p>
          <p className="my-5 flex flex-wrap items-baseline gap-3">
            <strong className="text-3xl">{currency.format(currentPrice(product))}</strong>
            {product.sale && <del className="text-dark-gray-3">{currency.format(product.price)}</del>}
          </p>
          <h2 className="mb-1 font-bold text-dark-gray-2">Descrição do produto</h2>
          <p className="text-dark-gray-2">Modelo {product.brand} da coleção {product.category.toLowerCase()}. Consulte a numeração abaixo.</p>
          <fieldset className="mt-7">
            <legend className="mb-2 font-bold text-dark-gray-2">Tamanho</legend>
            <div className="flex flex-wrap gap-2">
              {sizes.map((number) => <label key={number} className="cursor-pointer">
                <input className="peer sr-only" type="radio" name="size" value={number} checked={size === number} onChange={() => setSize(number)} />
                <span className="grid size-11 place-items-center rounded border border-light-gray-2 bg-white font-bold peer-checked:border-primary peer-checked:bg-primary peer-checked:text-white peer-focus-visible:outline-2">{number}</span>
              </label>)}
            </div>
          </fieldset>
        </div>
      </div>
      <Section title="Produtos relacionados" link="/products">
        <div className="product-grid featured-grid">
          {related.map((item) => <ProductCard key={item.id} product={item} />)}
        </div>
      </Section>
    </div>
  );
}

export default function ProductViewPage() {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  return product ? <ProductDetail key={id} product={product} /> : (
    <div className="store-container py-16">
      <h1 className="mb-4 text-2xl font-bold">Produto não encontrado</h1>
      <Link className="text-primary underline" to="/products">Voltar aos produtos</Link>
    </div>
  );
}

