import { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Section from "../components/Section";
import { asset, products } from "../catalog";
import ProductImage from "../components/ProductImage";

const collections = [
  { title: "Novo drop Supreme", image: "collection-1.png", link: "/products" },
  { title: "Coleção Adidas", image: "collection-2.png", link: "/products?filter=Adidas" },
  { title: "Novo Beats Bass", image: "collection-3.png" },
];

const slides = Array.from({ length: 8 }, (_, index) => `home-slide-${index + 1}.jpeg`);

export default function HomePage() {
  const [slide, setSlide] = useState(0);
  return (
    <>
      <section className="bg-light-gray-3">
        <div className="store-container grid items-center gap-6 py-12 sm:py-20 md:grid-cols-2">
          <div>
            <p className="mb-4 font-bold text-amber-700">Ofertas em destaque</p>
            <h1 className="max-w-xl text-4xl font-extrabold leading-tight sm:text-6xl">Ofertas em tênis</h1>
            <p className="mb-7 mt-5 max-w-md text-dark-gray-2">Encontre tênis para treinar, correr e aproveitar o dia a dia.</p>
            <Link className="store-button" to="/products">Ver ofertas</Link>
          </div>
          <img className="mx-auto aspect-video w-full rounded-lg object-cover" src={asset(slides[slide])} alt="Foto da campanha de tênis" />
        </div>
        <div className="flex flex-wrap justify-center pb-6" aria-label="Imagens do banner" role="group">
          {slides.map((image, index) => (
            <button key={image} type="button" className="grid size-8 cursor-pointer place-items-center" aria-label={`Mostrar imagem ${index + 1}`} aria-pressed={index === slide} onClick={() => setSlide(index)}>
              <span className={`size-2.5 rounded-full ${index === slide ? "bg-primary" : "bg-light-gray-2"}`} />
            </button>
          ))}
        </div>
      </section>
      <div className="store-container pb-10">
        <Section title="Coleções em destaque">
          <div className="grid gap-4 md:grid-cols-3">
            {collections.map(({ title, image, link }) => {
              const artwork = <img className="w-full rounded" src={asset(image)} alt={title} loading="lazy" />;
              return link ? <Link key={image} to={link}>{artwork}</Link> : <div key={image}>{artwork}</div>;
            })}
          </div>
        </Section>
        <Section title="Produtos em alta" link="/products">
          <div className="product-grid featured-grid">
            {products.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        </Section>
      </div>
      <section className="bg-white">
        <div className="store-container grid items-center gap-8 py-12 sm:py-16 md:grid-cols-2">
          <div className="mx-auto grid aspect-square w-full max-w-80 place-items-center rounded-full bg-[#ebe5ff] p-6">
            <ProductImage className="max-h-64 w-full rounded-lg object-contain" alt={products[1].name} image={products[1].image} loading="lazy" />
          </div>
          <div>
            <p className="mb-2 font-bold text-primary">Oferta especial</p>
            <h2 className="text-3xl font-bold sm:text-4xl">K-Swiss V8</h2>
            <p className="mb-6 mt-4 text-dark-gray-2">Conheça o modelo e confira os tamanhos disponíveis.</p>
            <Link className="store-button" to={`/product/${products[1].id}`}>Ver oferta</Link>
          </div>
        </div>
      </section>
    </>
  );
}


