import { Check } from "./icons/Check";
import { Facebook } from "./icons/Facebook";

export default function Footer() {
  return (
    <footer className="w-full bg-default px-5 py-10 mt-20">
      <div className="text-3xl text-white text-center">Нели Русева</div>
      <div className="flex justify-center gap-2 mt-4">
        <Facebook className="w-10 stroke-white" />
        <Check className="w-10 stroke-white" />
      </div>
      <div>COPY</div>
    </footer>
  );
}
