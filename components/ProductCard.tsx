"use client";

import Image from "next/image";
import { Button } from "@heroui/react";
import { ArrowRight } from "@/components/icons/ArrowRight";
// import { Card, CardFooter, Image } from "@heroui/react";

export default function ProductCard() {
  return (
    // <Card isFooterBlurred className="border-none" radius="lg">
    //   <Image
    //     alt="Woman listing to music"
    //     className="object-cover h-[500px]"
    //     src="/product-card-2.png"
    //   />
    //   <CardFooter className="justify-between before:bg-sage-dark border border-white/20 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
    //     <div className="flex flex-col">
    //       <p className="text-lg text-white/80">Психологически консултации.</p>
    //       <p className="text-tiny text-white/80">Психологически консултации.</p>
    //     </div>
    //     <Button
    //       className="text-tiny text-white bg-white/20"
    //       color="default"
    //       radius="lg"
    //       size="sm"
    //       variant="flat"
    //     >
    //       <ArrowRight className="w-5 stroke-white" />
    //     </Button>
    //   </CardFooter>
    // </Card>

    <>
      <div className="relative w-full h-[500px]">
        <Image
          src="/product-card-2.png"
          alt="Product image"
          fill
          className="object-cover rounded-3xl"
        />
        <div className="absolute bottom-0 inset-x-0 bg-sage-dark/20 backdrop-blur-lg border border-white/20 mx-2 mb-2 z-10 p-3 px-4 rounded-2xl">
          <div className="flex flex-col">
            <span className="text-xl text-white truncate">
              Психологически консултации.
            </span>
            <span className="text-sm text-white truncate">
              MDR и Хипнотерапия. Биоенергиен коучинг.
            </span>
          </div>
          <div className="flex justify-between items-center mt-1">
            <span className="text-white text-2xl">55лв.</span>
            <Button size="sm" radius="full" className="bg-sage-light/50 !p-0">
              <ArrowRight className="w-5 stroke-white" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
