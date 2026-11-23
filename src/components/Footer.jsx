
import { Link } from "react-router-dom";
import Logo from "./Logo";

function Footer() {
  return (
    <footer className="bg-dark-gray px-6 py-10 text-white">
      <div className="mx-auto max-w-7xl">

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-[2.5fr_1.3fr_1.3fr_1.7fr]">
            <div className="">
                <Link to="/" aria-label="Ir para a página inicial">
                    <Logo variant="white" />
                    </Link>

                    <p className="mt-6 text-sm">
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.
                    </p>
            </div>

            <div className="">
                <h2 className="text-lg font-bold">Informações</h2>
                <ul className="mt-4 space-y-2">
                    <li>Sobre Drip Store</li>
                    <li>Segurança</li>
                    <li>Wishlist</li>
                    <li>Blog</li>
                    <li>Trabalhe conosco</li>
                    <li>Meus Pedidos</li>
                </ul>
            </div>

            <div className="">
                <h2 className="text-lg font-bold">Categorias</h2>
                <ul className="mt-4 space-y-2">
                    <li>Camisetas</li>
                    <li>Calças</li>
                    <li>Bonés</li>
                    <li>Headphones</li>
                    <li>Tênis</li>
                </ul>
            </div>

            <div className="">
                <h2 className="text-lg font-bold">Contato</h2>
                <p className="mt-2 pb-2 pt-2">Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
                <p className="mt-2">(85) 3051-3411</p>
            </div>
        </div>

        <div className="mt-8 border-t border-white/20 pt-6 text-center">
          <p>© 2026 Digital Store</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
