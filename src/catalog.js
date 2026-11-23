export const asset = (name) => import.meta.env.BASE_URL + name;
export const currency = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
export const normalize = (text) => text.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();

export const products = [
  { id: "nike-revolution", name: "Tênis Nike Revolution 6 Next Nature", brand: "Nike", category: "Corrida", gender: "Masculino", condition: "Novo", price: 299, sale: 219, image: "product-thumb-1.jpeg", gallery: ["product-thumb-2.jpeg", "produc-image-3.jpeg"] },
  { gallery: ["produc-image-4.jpeg"], id: "k-swiss-v8", name: "Tênis K-Swiss V8", brand: "K-Swiss", category: "Casual", gender: "Masculino", condition: "Novo", price: 299, sale: 209, image: "product-thumb-1.jpeg" },
  { id: "adidas-run", name: "Tênis Adidas Run", brand: "Adidas", category: "Corrida", gender: "Feminino", condition: "Novo", price: 349, sale: 279, image: "produc-image-5.jpeg" },
  { id: "puma-street", name: "Tênis Puma Street", brand: "Puma", category: "Casual", gender: "Unissex", condition: "Novo", price: 249, image: "product-thumb-3.jpeg" },
  { id: "nike-court", name: "Tênis Nike Court", brand: "Nike", category: "Esporte e lazer", gender: "Feminino", condition: "Novo", price: 329, image: "product-thumb-4.jpeg" },
  { id: "kswiss-classic", name: "Tênis K-Swiss Classic", brand: "K-Swiss", category: "Casual", gender: "Unissex", condition: "Usado", price: 179, image: "product-thumb-5.jpeg" },
  { id: "adidas-urban", name: "Tênis Adidas Urban", brand: "Adidas", category: "Casual", gender: "Masculino", condition: "Novo", price: 319, sale: 249, image: "produc-image-1.jpeg" },
  { id: "puma-active", name: "Tênis Puma Active", brand: "Puma", category: "Esporte e lazer", gender: "Unissex", condition: "Novo", price: 269, image: "produc-image-2.jpeg" },
];

export const currentPrice = (product) => product.sale ?? product.price;

