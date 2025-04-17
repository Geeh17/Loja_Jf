"use client";

import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr';
import mosImg from '../../../public/bg-hero.webp';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export function Hero() {
  const router = useRouter();

  const handleComprar = () => {
    router.push('/checkout');
  };

  return (
    <section className="bg-[#FFDE08] text-white relative overflow-hidden">
      <div>
        <Image
          src={mosImg}
          alt="Foto do mosquito"
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-60 lg:hidden"
        />
        <div className="absolute inset-0 bg-black opacity-40 md:hidden"></div>
      </div>

      <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10"
              data-aos="fade-down"
            >
              Seu lar livre de pragas com ZERO IN!
            </h1>
            <p className="lg:text-lg" data-aos="fade-right">
              Seu ambiente merece estar livre de pragas e seguro para toda a família.
              Com ZERO IN, você garante uma proteção eficaz contra diversas pragas,
              de forma ecológica, rápida e sem cheiro.
            </p>

            <div className="flex items-center gap-3">
              <a
                data-aos="fade-up"
                data-aos-delay="500"
                target="_blank"
                rel="noopener noreferrer"
                href="https://wa.me/5532999905289?text=Ol%C3%A1%2C+vim+pelo+site+e+gostaria+de+mais+informa%C3%A7%C3%B5es."
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2 rounded-lg flex items-center gap-2 transition-colors duration-300"
              >
                <WhatsappLogo className="w-5 h-5" />
                Contato via WhatsApp
              </a>
            </div>

            <div className="mt-8">
              <br />
              <br />
              <br />
            </div>
          </div>

          <div className="hidden md:block h-full relative">
            <Image
              src={mosImg}
              alt="Foto do mosquito"
              className="object-contain"
              fill
              sizes="(max-width: 768px) 0vw, 50vw"
              quality={100}
              priority
            />
          </div>
        </article>
      </div>
    </section>
  );
}
