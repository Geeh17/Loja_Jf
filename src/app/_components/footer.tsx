import Image from 'next/image'

export function Footer() {
  return (
    <section className="bg-[#FFDE08] py-16 text-zinc-900">
      <div className="container mx-auto px-4">
        
        <footer className="flex flex-col items-center text-center gap-6 mb-12">
          <p className="text-lg font-medium">
            Cuidando do seu lar com amor e dedicação.
          </p>
          <a
            href="https://wa.me/5532999905289"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2 rounded-lg transition-colors duration-300"
          >
            Contato via WhatsApp
          </a>
        </footer>

        <div className="text-center text-sm border-t pt-6 border-white/30">
          &copy; {new Date().getFullYear()} Todos os direitos reservados.
        </div>

      </div>
    </section>
  )
}
