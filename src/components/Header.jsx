
import { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Search, ShoppingCart, Menu, X } from "lucide-react";

import Logo from "./Logo";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Produtos", path: "/products" },
  { label: "Categorias", path: "/categorias" },
  { label: "Meus Pedidos", path: "/pedidos" },
];

function Header() {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  function handleSearch(event) {
    event.preventDefault();

    const term = search.trim();

    if (!term) return;

    const params = new URLSearchParams({
      filter: term,
    });

    navigate(`/products?${params.toString()}`);
    setMenuOpen(false);
  }

  function handleCloseMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="bg-white">
      <div className="mx-auto max-w-7xl px-6">

        {/* Parte superior */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-5 py-6 lg:flex-nowrap lg:gap-x-8 lg:pt-9">

          {/* Logo */}
          <Link
            to="/"
            onClick={handleCloseMenu}
            className="shrink-0"
            aria-label="Ir para a página inicial"
          >
            <Logo
              variant="primary"
              className="w-[190px] sm:w-[253px]"
            />
          </Link>

          {/* Pesquisa */}
          <form
            onSubmit={handleSearch}
            role="search"
            className="order-3 flex w-full items-center rounded bg-light-gray-3 lg:order-none lg:min-w-0 lg:flex-1"
          >
            <label htmlFor="product-search" className="sr-only">
              Pesquisar produtos
            </label>

            <input
              id="product-search"
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Pesquisar produto..."
              className="h-[60px] min-w-0 flex-1 bg-transparent px-5 text-base text-dark-gray-2 outline-none placeholder:text-light-gray"
            />

            <button
              type="submit"
              aria-label="Pesquisar"
              className="flex h-[60px] w-[60px] shrink-0 cursor-pointer items-center justify-center text-light-gray transition-colors hover:text-primary"
            >
              <Search size={24} />
            </button>
          </form>

          {/* Cadastro e login */}
          <div className="ml-auto hidden shrink-0 items-center gap-6 lg:flex">

            <Link
              to="/cadastro"
              className="text-base text-dark-gray-2 underline underline-offset-2 hover:text-primary"
            >
              Cadastre-se
            </Link>

            <Link
              to="/entrar"
              className="flex h-10 w-[114px] items-center justify-center rounded bg-primary text-sm font-bold text-white transition-colors hover:bg-tertiary"
            >
              Entrar
            </Link>
          </div>

          {/* Carrinho */}
          <span
            role="img"
            aria-label="Carrinho de compras"
            className="ml-auto shrink-0 text-primary lg:ml-0"
          >
            <ShoppingCart size={26} strokeWidth={2} />
          </span>

          {/* Menu mobile */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            className="cursor-pointer text-dark-gray lg:hidden"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Navegação */}
        <nav
          id="main-navigation"
          aria-label="Navegação principal"
          className={`flex-col gap-8 pb-5 pt-4 lg:flex lg:flex-row lg:items-center lg:pt-8 ${
            menuOpen ? "flex" : "hidden"
          }`}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              onClick={handleCloseMenu}
              className={({ isActive }) =>
                `w-fit border-b-2 pb-1 text-base transition-colors ${
                  (isActive || (item.path === "/products" && (pathname.startsWith("/product/") || pathname === "/produtos")))
                    ? "border-primary font-bold text-primary"
                    : "border-transparent text-dark-gray-2 hover:text-primary"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          {/* Login e cadastro no celular */}
          <div className="flex gap-5 border-t border-light-gray-2 pt-5 lg:hidden">
            <Link
              to="/cadastro"
              onClick={handleCloseMenu}
              className="text-dark-gray-2 underline"
            >
              Cadastre-se
            </Link>

            <Link
              to="/entrar"
              onClick={handleCloseMenu}
              className="font-bold text-primary"
            >
              Entrar
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;


