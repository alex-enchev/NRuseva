import Image from "next/image";

export default function Hero() {
  return (
    <section
      // style="background: url('/hero.png') no-repeat center center / cover"
      className="w-screen h-screen relative"
    >
      <Image
        src="/hero.png"
        alt="Нели Русева"
        fill
        className="absolute inset-0 object-cover"
      />
      <div className="absolute inset-0 bg-black/30 backdrop-blur-xs z-0"></div>
      <div className="relative h-full z-10 text-white flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-8xl xl:text-9xl">Нели Русева</h1>
          <h2 className="text-2xl xl:text-4xl mt-4">
            Малките стъпки водят до големите промени!
          </h2>
        </div>
      </div>
    </section>
  );
}
