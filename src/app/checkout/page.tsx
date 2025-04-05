'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CheckoutFlow() {
  const [step, setStep] = useState<'shipping' | 'payment'>('shipping');
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    cidade: '',
    bairro: '',
    cep: '',
    endereco: '',
  });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleShippingSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStep('payment');
  };

  const handlePayment = () => {
    setIsProcessing(true);
    // Simula o processamento do pagamento por 2 segundos
    setTimeout(() => {
      const { nome, telefone, cidade, bairro, cep, endereco } = formData;
      const mensagem = encodeURIComponent(
        `Olá, vendedor! Novo pedido:\nNome: ${nome}\nTelefone: ${telefone}\nCidade: ${cidade}\nBairro: ${bairro}\nCEP: ${cep}\nEndereço: ${endereco}`
      );
      // Substitua 'SEUNUMERO' pelo número no formato internacional, ex: 5511999999999
      const whatsappURL = `https://wa.me/5532991481582?text=${mensagem}`;
      router.push(whatsappURL);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12">
      <div className="max-w-md w-full mx-auto bg-white p-8 shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Checkout</h1>
        
        {/* Indicador de Etapas */}
        <div className="flex justify-between mb-8">
          <div className={`w-1/2 text-center ${step === 'shipping' ? 'font-bold text-green-600' : 'text-gray-400'}`}>
            Dados de Envio
          </div>
          <div className={`w-1/2 text-center ${step === 'payment' ? 'font-bold text-green-600' : 'text-gray-400'}`}>
            Pagamento
          </div>
        </div>

        {step === 'shipping' && (
          <form onSubmit={handleShippingSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1" htmlFor="nome">
                Nome
              </label>
              <input
                id="nome"
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-1" htmlFor="telefone">
                Telefone
              </label>
              <input
                id="telefone"
                type="text"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-1" htmlFor="cidade">
                Cidade
              </label>
              <input
                id="cidade"
                type="text"
                name="cidade"
                value={formData.cidade}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-1" htmlFor="bairro">
                Bairro
              </label>
              <input
                id="bairro"
                type="text"
                name="bairro"
                value={formData.bairro}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-1" htmlFor="cep">
                CEP
              </label>
              <input
                id="cep"
                type="text"
                name="cep"
                value={formData.cep}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 mb-1" htmlFor="endereco">
                Endereço
              </label>
              <input
                id="endereco"
                type="text"
                name="endereco"
                value={formData.endereco}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors"
            >
              Continuar para o Pagamento
            </button>
          </form>
        )}

        {step === 'payment' && (
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-4">Pagamento</h2>
            <p className="text-gray-600 mb-6">
              Revise seus dados e finalize o pagamento.
            </p>
            <button
              onClick={handlePayment}
              disabled={isProcessing}
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              {isProcessing ? "Processando Pagamento..." : "Finalizar Pagamento"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
