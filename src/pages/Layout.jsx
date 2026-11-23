
import Header from "../components/Header";
import Footer from "../components/Footer";

function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="w-full flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default Layout;

