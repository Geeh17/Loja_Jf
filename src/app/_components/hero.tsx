"use client";

import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import mosImg from '../../../public/bg-hero.webp'
import Image from 'next/image'
import { useRouter } from 'next/navigation'


export function Hero() {
  const router = useRouter()

  const handleComprar = () => {
    router.push('/checkout')
  }

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

            {/* Contêiner flex para exibir os botões lado a lado */}
            <div className="flex flex-wrap items-center gap-2">
              {/* Botão de Contato via WhatsApp */}
              <a
                data-aos="fade-up"
                data-aos-delay="500"
                target="_blank"
                href="https://wa.me/556799998800?text=Olá vim pelo site e gostaria de mais informações"
                className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
              >
                <WhatsappLogo className="w-5 h-5" />
                Contato via WhatsApp
              </a>

              {/* Botão Comprar Agora com o mesmo padrão (cor e estilo) */}
              <a
                data-aos="fade-up"
                data-aos-delay="700"
                onClick={handleComprar}
                className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2 cursor-pointer"
              >
                Comprar Agora
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
              alt="Foto do dog"
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
  )
}
