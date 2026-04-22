"use client";

import React from "react";
import { ArrowRight, Instagram, Linkedin } from "lucide-react";

/**
 * Ícone customizado do WhatsApp
 * Como a biblioteca Lucide-React não possui ícones de marcas nativamente,
 * esta implementação em SVG nativo garante renderização limpa e premium.
 */
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    width="24" 
    height="24" 
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

export default function LinkInBio() {
  const cards = [
    {
      title: "Consultoria",
      description: (
        <>
          <span className="block mb-3">Sessão estratégica de até 1h30, focada em resolver um ponto específico da sua presença no digital.</span>
          <span className="block">Você sai com um diagnóstico claro e um plano de ação prático, com os próximos passos definidos para aplicar imediatamente.</span>
        </>
      ),
      bgImage: "/1.jpeg",
    },
    {
      title: "Mapa do Posicionamento",
      description: (
        <>
          <span className="block mb-3">Uma entrega estratégica que organiza quem você é, como pensa, o que defende, seu tom de voz e o que te diferencia no mercado.</span>
          <span className="block">Você recebe um material estruturado que se torna a base para toda a comunicação da sua marca.</span>
        </>
      ),
      bgImage: "/2.jpeg",
    },
    {
      title: "Planejamento Estratégico",
      description: (
        <>
          <span className="block mb-3">Um projeto completo de estratégia digital que vai do diagnóstico atual ao plano de ação com cronograma de conteúdo.</span>
          <span className="block">100% personalizado, alinhado aos seus objetivos, com acompanhamento estratégico durante a implementação.</span>
        </>
      ),
      bgImage: "/3.jpeg",
    },
    {
      title: "Gestão de Redes Sociais",
      description: (
        <>
          <span className="block mb-3">A solução mais completa, onde eu desenvolvo toda a estratégia digital e cuido da execução do conteúdo do início ao fim.</span>
          <span className="block">Sua marca passa a ter posicionamento claro e comunicação alinhada com seus objetivos. Enquanto você cuida do seu negócio, eu cuido de fazer o mundo saber que ele existe.</span>
        </>
      ),
      bgImage: "/4.jpeg",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f1efea] flex flex-col items-center py-16 px-6 font-sans relative selection:bg-[#b18e72] selection:text-white pb-36 noise-overlay">
      
      {/* Background Decorativo (Sutil e luxuoso) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] max-w-[600px] h-[60vw] max-h-[600px] bg-[#e5d5c4]/30 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] max-w-[600px] h-[60vw] max-h-[600px] bg-[#b18e72]/20 rounded-full blur-[100px]"></div>
      </div>

      <main className="w-full max-w-[440px] sm:max-w-[540px] md:max-w-[680px] flex flex-col items-center z-10">
        
        {/* Header Section */}
        <header className="flex flex-col items-center mb-10 w-full animate-in opacity-0">
          {/* Avatar com borda elegante */}
          <div className="relative w-28 h-28 mb-8">
            <div className="absolute inset-0 rounded-full border border-[#b18e72]/30 scale-110"></div>
            <div className="w-full h-full rounded-full bg-[#fdfaf5] overflow-hidden flex items-center justify-center shadow-sm">
              <img 
                src="/nelly.png" 
                alt="Nelly Pimentel" 
                className="w-full h-full object-cover" 
                onError={(e) => { 
                  // Fallback se a imagem não carregar no dev environment
                  e.currentTarget.src = "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=256&auto=format&fit=crop"; 
                }}
              />
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-[34px] font-light tracking-wide text-[#1a1a1a] text-center mb-2 leading-tight">
            Nelly Pimentel
          </h1>
          <p className="text-[11px] font-medium tracking-[0.25em] text-[#b18e72] uppercase">
            Estrategista Digital
          </p>

          {/* Redes Sociais */}
          <div className="flex gap-6 mt-8">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-[#b18e72]/60 hover:text-[#b18e72] transition-colors duration-300">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-[#b18e72]/60 hover:text-[#b18e72] transition-colors duration-300">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </header>

        {/* Componente de Loop de Cards */}
        <section className="w-full flex flex-col gap-5">
          {cards.map((card, index) => (
            <a 
              key={index} 
              href="https://wa.me/5517996604166"
              target="_blank"
              rel="noreferrer"
              className={`
                group relative overflow-hidden rounded-[24px] w-full p-6 sm:p-10 
                shadow-sm hover:shadow-xl transition-all duration-500 ease-out
                hover:-translate-y-1 cursor-pointer
                text-white min-h-[320px] sm:min-h-[400px] flex flex-col justify-end
                animate-in opacity-0
              `}
              style={{ animationDelay: `${(index + 2) * 0.1}s` }}
            >
              {/* Imagem de Fundo (Responsiva ao Hover) */}
              <div 
                className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-1000 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url(${card.bgImage})` }}
              ></div>
              
              {/* Overlay Cinza Escuro/Chumbo: Expandido para Bottom alignment */}
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#2c2c2e]/90 via-[#2c2c2e]/40 to-transparent"></div>
              {/* Gradiente extra na base (subindo) garante leitura perfeita já que empurramos o texto para baixo */}
              <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#2c2c2e]/80 via-[#2c2c2e]/10 to-transparent"></div>
              
              {/* Conteúdo alinhado à esquerda naturalmente, abrindo todo o lado direito e o topo para destacar a fotografia */}
              <div className="relative z-10 w-[85%] sm:w-[70%] pr-2">
                <h2 className="text-[28px] sm:text-[34px] font-light mb-3 tracking-tight [text-shadow:_0_2px_10px_rgba(0,0,0,0.5)] leading-tight text-white">
                  {card.title}
                </h2>
                <div className="text-[13.5px] sm:text-[15.5px] leading-relaxed text-white/95 font-light [text-shadow:_0_1px_6px_rgba(0,0,0,0.5)]">
                  {card.description}
                </div>
              </div>

              {/* Seta Hover Elegante Minimalista */}
              <ArrowRight className="absolute bottom-8 right-6 sm:bottom-10 sm:right-10 w-6 h-6 text-white opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 z-10 drop-shadow-md" />
            </a>
          ))}
        </section>
      </main>

      {/* Floating CTA Button Fixo */}
      <div className="fixed bottom-8 left-0 right-0 flex justify-center px-6 z-50">
        <a 
          href="https://wa.me/5517996604166" 
          target="_blank"
          rel="noreferrer"
          className="
            flex items-center justify-between gap-3 
            bg-[#b18e72] text-[#ffffff] 
            px-1 border border-white/10
            rounded-full pl-6 pr-2 py-2
            shadow-[0_8px_30px_rgba(177,142,114,0.3)]
            hover:shadow-[0_12px_45px_rgba(177,142,114,0.45)] hover:-translate-y-1 
            transition-all duration-500 ease-out
            w-full max-w-[340px] backdrop-blur-md
          "
        >
          <div className="flex items-center gap-3">
            <WhatsAppIcon className="w-5 h-5" />
            <span className="font-medium tracking-wide text-[15px] pb-1 pt-1 opacity-95">Meu suporte</span>
          </div>
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
             <ArrowRight className="w-4 h-4" />
          </div>
        </a>
      </div>
    </div>
  );
}
