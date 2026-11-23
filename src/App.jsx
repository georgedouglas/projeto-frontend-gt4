
import { Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import ProductListingPage from "./pages/ProductListingPage";
import ProductViewPage from "./pages/ProductViewPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/products"
          element={<ProductListingPage />}
        />

        <Route
          path="/produtos"
          element={<ProductListingPage />}
        />

        <Route
          path="/product/:id"
          element={<ProductViewPage />}
        />

        <Route
          path="/categorias"
          element={<h1>Categorias</h1>}
        />

        <Route
          path="/pedidos"
          element={<h1>Meus Pedidos</h1>}
        />

        <Route
          path="*"
          element={<h1>Página não encontrada</h1>}
        />

        
        <Route
          path="/cadastro"
          element={
            <h1 className="text-2xl font-bold">
              Cadastro de usuário — em desenvolvimento
            </h1>
          }
        />

        <Route
          path="/entrar"
          element={
            <h1 className="text-2xl font-bold">
              Login — em desenvolvimento
            </h1>
          }
        />

      </Routes>
    </Layout>
  );
}

export default App;
