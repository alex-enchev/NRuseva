import ProductCard from "@/components/ProductCard";

export default function Consultations() {
  return (
    <section className="section mt-20">
      <div className="text-4xl text-deep-brown sticky top-3 z-[200]">
        Консултации
      </div>
      <div className="text-lg text-secondary">Какво предлагаме?</div>
      <div className="grid grid-cols-1 gap-10 mt-5">
        {[1, 2, 3, 4].map((item) => (
          <ProductCard key={item} />
        ))}
      </div>
    </section>
  );
}
