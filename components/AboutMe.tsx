"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Check } from "./icons/Check";
import { Button } from "@heroui/button";
import { ArrowRight } from "@/components/icons/ArrowRight";

export default function AboutMe() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={`section duration-1000 pt-5 ${hasScrolled ? "-mt-40" : ""}`}
    >
      <div className="relative w-full h-[400px]">
        <Image
          src="/neli-ruseva.png"
          alt="Neli Ruseva picture"
          className="object-cover rounded-3xl border-8 border-white"
          fill
        />
      </div>
      <div className="flex flex-col gap-1 mx-2 mt-1 text-xl text-secondary-700">
        <div className="flex gap-1">
          <Check className="w-6 stroke-secondary-700" />
          <span>Психолог</span>
        </div>
        <div className="flex gap-1">
          <Check className="w-6 stroke-secondary-700" />
          <span>Хипно и EMDR терапевт</span>
        </div>
        <div className="flex gap-1">
          <Check className="w-6 stroke-secondary-700" />
          <span>Учител по Кундалини йога</span>
        </div>
        <div className="flex gap-1">
          <Check className="w-6 stroke-secondary-700" />
          <span>Биоенергиен коуч</span>
        </div>
      </div>
      <div className="mx-2 mt-4">
        <Button fullWidth className="bg-primary text-white">
          {/*#C58940*/}
          Научи повече за мен <ArrowRight className="w-6 stroke-white" />
        </Button>
      </div>
    </section>
  );
}
