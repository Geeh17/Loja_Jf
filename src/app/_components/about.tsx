'use client';

import { useState } from 'react';
import Image from "next/image";
import about2Img from '../../../public/about-2.png';
import { Check } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function About() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [bairro, setBairro] = useState('');

  const handleComprar = () => {
    if (!nome || !telefone || !cep || !rua || !bairro) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const mensagem = `Olá! Fiz uma compra do Zero In.

📦 Dados para envio:
👤 Nome: ${nome}
📞 Telefone: ${telefone}
📮 CEP: ${cep}
🏠 Rua: ${rua}
🏘️ Bairro: ${bairro}`;

    const numero = '5532999905289';
    const urlWhatsapp = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(urlWhatsapp, '_blank');

    // Redireciona para o checkout (coloque o link do Mercado Pago)
    window.location.href = 'https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=SUA_PREFERENCE_ID';
  };

  return (
    <section className="bg-[#FDF6ec] py-16">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative" data-aos="fade-up-right" data-aos-delay="300">
            <div className="relative w-full h-[400px] rounded-3xl bg-black">
              <video
                controls
                className="w-full h-full object-cover rounded-3xl"
              >
                <source src="/video-zero-in.mp4" type="video/mp4" />
                Seu navegador não suporta a reprodução de vídeo.
              </video>
            </div>
            <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white">
              <Image
                src={about2Img}
                alt="Foto do produto2"
                fill
                quality={100}
                priority
              />
            </div>
          </div>

          <div className="space-y-6 mt-10" data-aos="fade-up-left" data-aos-delay="300">
            <div className="flex items-center gap-3">
              <span className="text-4xl font-bold text-green-600">R$ 89,00</span>
            </div>

            <p>
              Na compra, você recebe:
              <br />
              • 1 frasco de 500ml de <strong>Zero In</strong><br />
              • 1 <strong>borrifador</strong> para aplicação prática
            </p>

            <p>
              🛡️ <strong>Zero In</strong> é eficaz no combate a:<br />
              Moscas, baratas, formigas, cupins, vespas, piolhos, lêndeas, besouros, lacraias,
              gongolos, pulgas, carrapatos e muito mais.<br />
              Também atua contra pragas de plantas, sendo uma solução completa e ecológica
              para o seu lar.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Check className="text-black-500" />
                Qualidade é nossa prioridade.
              </li>
            </ul>

            <div className="flex flex-wrap items-center gap-2">
              <a
                target="_blank"
                href="https://wa.me/5532999905289?text=Olá%2C+vim+pelo+site+e+gostaria+de+mais+informações"
                className="bg-[#22C55E] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <WhatsappLogo className="w-5 h-5 text-white" />
                Contato via WhatsApp
              </a>

              <button
                onClick={() => setMostrarFormulario(true)}
                className="bg-[#22C55E] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                Comprar Agora
              </button>
            </div>

            {mostrarFormulario && (
              <div className="mt-6 space-y-4">
                <input
                  type="text"
                  placeholder="Nome completo"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
                <input
                  type="tel"
                  placeholder="Telefone de contato"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  placeholder="CEP"
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  placeholder="Rua"
                  value={rua}
                  onChange={(e) => setRua(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  placeholder="Bairro"
                  value={bairro}
                  onChange={(e) => setBairro(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
                <button
                  onClick={handleComprar}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md w-full font-semibold"
                >
                  Finalizar Compra
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
