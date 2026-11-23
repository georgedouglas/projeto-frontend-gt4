import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { currentPrice, normalize, products } from "../catalog";

const filters = [
  { key: "brand", label: "Marca" },
  { key: "category", label: "Categoria" },
  { key: "gender", label: "Gênero" },
  { key: "condition", label: "Estado" },
];

export default function ProductListingPage() {
  const [params, setParams] = useSearchParams();
  const query = params.get("filter")?.trim() ?? "";
  const order = params.get("sort") ?? "";
  const results = products.filter((product) => {
    const keywords = normalize(`${product.name} ${product.brand} ${product.category} ${product.gender}`);
    return keywords.includes(normalize(query)) && filters.every(({ key }) => {
      const selected = params.getAll(key);
      return !selected.length || selected.includes(product[key]);
    });
  });

  if (order === "asc") results.sort((a, b) => currentPrice(a) - currentPrice(b));
  if (order === "desc") results.sort((a, b) => currentPrice(b) - currentPrice(a));

  function updateFilters(key, values) {
    const next = new URLSearchParams(params);
    next.delete(key);
    values.forEach((value) => next.append(key, value));
    setParams(next);
  }

  return (
    <section className="store-container py-10 sm:pb-20">
      <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-lg font-bold text-dark-gray-2">
          {query ? `Resultados para “${query}”` : "Produtos"}
          <span className="ml-2 text-sm font-normal">· {results.length} {results.length === 1 ? "produto" : "produtos"}</span>
        </h1>
        <label className="flex items-center gap-2 rounded border border-light-gray-2 bg-white px-3 py-2 text-sm">
          Ordenar por
          <select className="p-1" value={order} onChange={(event) => updateFilters("sort", event.target.value ? [event.target.value] : [])}>
            <option value="">Mais relevantes</option>
            <option value="asc">Menor preço</option>
            <option value="desc">Maior preço</option>
          </select>
        </label>
      </div>
      <div className="grid items-start gap-6 md:grid-cols-[210px_minmax(0,1fr)] lg:grid-cols-[250px_minmax(0,1fr)]">
        <aside aria-label="Filtros de produtos" className="rounded bg-white p-5">
          <h2 className="mb-4 border-b border-light-gray-2 pb-3 font-bold">Filtrar por</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
            {filters.map(({ key, label }) => {
              const selected = params.getAll(key);
              return (
                <fieldset key={key}>
                  <legend className="mb-2 text-sm font-bold">{label}</legend>
                  {[...new Set(products.map((product) => product[key]))].sort((a, b) => a.localeCompare(b, "pt-BR")).map((value) => (
                    <label key={value} className="mb-2 flex cursor-pointer items-center gap-2 text-sm">
                      <input type="checkbox" className="size-4 accent-primary" checked={selected.includes(value)} onChange={(event) => updateFilters(key, event.target.checked ? [...selected, value] : selected.filter((item) => item !== value))} />
                      {value}
                    </label>
                  ))}
                </fieldset>
              );
            })}
          </div>
        </aside>
        {results.length ? (
          <div className="product-grid catalog-grid">
            {results.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        ) : <p className="rounded bg-white p-6">Nenhum produto encontrado. Ajuste a busca ou os filtros.</p>}
      </div>
    </section>
  );
}
