import { Link } from "react-router-dom";

export default function Section({ title, titleAlign = "left", link, children }) {
  return (
    <section className="py-8 sm:py-12">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <h2 className={`text-2xl font-bold text-dark-gray-2 ${titleAlign === "center" ? "w-full text-center" : ""}`}>{title}</h2>
        {link && <Link className="font-medium text-primary hover:underline" to={link}>Ver todos →</Link>}
      </div>
      {children}
    </section>
  );
}
