'use client';

import Image from "next/image";
import about1Img from '../../../public/about-1.png';
import about2Img from '../../../public/about-2.png';
import { Check } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";

export function About() {
  const router = useRouter();

  const handleComprar = () => {
    router.push('/checkout');
  };

  return (
    <section className="bg-[#FDF6ec] py-16">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative" data-aos="fade-up-right" data-aos-delay="300">
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
              <Image
                src={about1Img}
                alt="Foto do cachorro"
                fill
                quality={100}
                className="object-cover hover:scale-110 duration-300"
                priority
              />
            </div>

            <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white">
              <Image
                src={about2Img}
                alt="Foto do cachorro 2"
                fill
                quality={100}
                priority
              />
            </div>
          </div>

          <div className="space-y-6 mt-10" data-aos="fade-up-left" data-aos-delay="300">
            <h2 className="text-4xl font-bold">SOBRE</h2>
            <p>
              Eficaz contra, moscas, baratas, formigas, cupins, vespas, piolhos, lêndeas,
              besouros, lacraias, gongolos, pulgas, carrapatos, entre outros, ele também combate
              pragas de plantas.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Check className="text-black-500" />
                Qualidade é nossa prioridade.
              </li>
            </ul>

            {/* Container flex para os botões lado a lado */}
            <div className="flex flex-wrap items-center gap-2">
              {/* Botão de Contato via WhatsApp */}
              <a
                target="_blank"
                href="https://wa.me/556799998800?text=Olá vim pelo site e gostaria de mais informações"
                className="bg-[#22C55E] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <WhatsappLogo className="w-5 h-5 text-white" />
                Contato via WhatsApp
              </a>

              {/* Botão Comprar Agora com o mesmo padrão */}
              <button
                onClick={handleComprar}
                className="bg-[#22C55E] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                Comprar Agora
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
