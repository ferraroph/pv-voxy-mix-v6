import React, { useState, useEffect } from 'react';
import { Keyboard, Laptop, Mic, Settings, Home } from 'lucide-react';
const CompatibilitySection = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const categories = [{
    id: 'daws',
    title: 'TODAS AS DAWs',
    icon: Keyboard,
    items: [
      { name: 'Reaper', logo: '/logos/daws/Reaper_logo.webp' },
      { name: 'FL Studio', logo: '/logos/daws/FLStudio_Logo.webp' },
      { name: 'Logic Pro', logo: '/logos/daws/LogicPro_Logo.webp' },
      { name: 'Pro Tools', logo: '/logos/daws/ProTools_Logo.webp' },
      { name: 'Ableton', logo: '/logos/daws/Ableton_Logo.webp' },
      { name: 'Studio One', logo: '/logos/daws/StudioOne_Logo.webp' }
    ]
  }, {
    id: 'systems',
    title: 'Windows\ne Mac',
    icon: Laptop,
    items: [
      { name: 'Windows\n(10 e 11)', logo: '/logos/systems/Windows_Logo.webp' },
      { name: 'Catalina', logo: '/logos/systems/Mac_Catalina10.webp' },
      { name: 'Big Sur', logo: '/logos/systems/Mac_BigSur11.webp' },
      { name: 'Monterey', logo: '/logos/systems/Mac_Monterey12.webp' },
      { name: 'Ventura', logo: '/logos/systems/Mac_Ventura13.webp' },
      { name: 'Sonoma', logo: '/logos/systems/Mac_Sonoma14.webp' }
    ]
  }, {
    id: 'genres',
    title: 'TODOS OS GÊNEROS',
    icon: Mic,
    items: [
      { name: 'Rap/Trap e Funk', logo: '/logos/Genres/Rap_Trap.webp' },
      { name: 'Pop/R&B', logo: '/logos/Genres/Pop_Rnb.webp' },
      { name: 'Rock', logo: '/logos/Genres/Rock.webp' },
      { name: 'E muito mais...', logo: '/logos/Genres/Todos.webp' },
      { name: 'Arrocha/Forró', logo: '/logos/Genres/Forro_Arrocha.webp' },
      { name: 'Sertanejo', logo: '/logos/Genres/Sertanejo.webp' }
    ]
  }, {
    id: 'equipment',
    title: 'TODOS OS EQUIPAMENTOS',
    icon: Settings,
    items: [
      { name: 'Microfone\nCondensador', logo: '/logos/mic/Microfone_Condensador.webp' },
      { name: 'Microfone\nDinâmico', logo: '/logos/mic/Microfone_Dinamico.webp' },
      { name: 'Microfone\nCelular', logo: '/logos/mic/Celular.webp', hasWarning: true }
    ]
  }];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  const handleCenterClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveCategory(prev => (prev + 1) % categories.length);
      setTimeout(() => {
        setIsAnimating(false);
      }, 300);
    }, 200);
  };
  const currentCategory = categories[activeCategory];
  const Icon = currentCategory.icon;
  return <section id="compatibility-section" className="py-20 bg-gradient-to-b from-voxy-dark to-voxy-dark relative overflow-hidden">
    {/* Background Effects */}
    <div className="absolute inset-0">
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-voxy-cyan/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-voxy-cyan-light/3 rounded-full blur-2xl animate-float"></div>
    </div>

    <div className="container mx-auto px-6 relative z-10">
      <div className="text-center mb-14 md:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 md:mb-6 px-4">
          <span className="block text-transparent bg-gradient-to-r from-voxy-cyan to-voxy-cyan-light bg-clip-text"
            style={{
              textShadow: '0 0 20px rgba(0, 162, 255, 0.5)',

            }}>
            Compatibilidade Universal</span>
        </h2>
        <p className="text-white text-base md:text-lg mb-6 md:mb-8 px-4">
          <span className="block md:hidden">Toque em "Todas as Daws" para alternar</span>
          <span className="hidden md:block">Clique no centro para alternar entre categorias</span>
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        {/* Interactive Hub - Responsivo */}
        <div className="relative flex items-center justify-center min-h-[320px] md:min-h-[420px]">
          {/* Central Hub - Tamanhos responsivos */}
          <div className="relative z-20">
            {/* Pulsating Ring - Responsivo */}
            <div className="absolute inset-0 w-32 h-32 md:w-48 md:h-48 border-2 border-voxy-cyan rounded-full animate-pulse-glow opacity-50"></div>
            <div className="absolute inset-2 md:inset-4 w-28 h-28 md:w-40 md:h-40 border border-voxy-cyan/30 rounded-full animate-pulse opacity-30"></div>

            {/* Center Element - CLICKABLE - Responsivo */}
            <button className="relative w-32 h-32 md:w-48 md:h-48 glass-effect rounded-full flex flex-col items-center justify-center cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300 group bg-transparent border-none z-30 touch-manipulation" onClick={handleCenterClick}>
              {currentCategory.id === 'systems' ? (
                <img
                  src="/logos/systems/Windows_Mac.webp"
                  alt="Windows e Mac"
                  className="w-16 h-16 md:w-20 md:h-20 object-contain mb-1 md:mb-2 group-hover:scale-110 transition-transform"
                  style={{
                    filter: 'drop-shadow(0 3px 6px rgba(0, 0, 0, 0.4)) drop-shadow(0 0 12px rgba(0, 162, 255, 0.3))'
                  }}
                />
              ) : (
                <Icon className="w-8 h-8 md:w-12 md:h-12 text-voxy-cyan mb-1 md:mb-2 group-hover:scale-110 transition-transform" />
              )}
              <span className="text-white font-bold text-center text-xs md:text-sm px-2 md:px-4 leading-tight">
                {currentCategory.title}
              </span>
            </button>
          </div>

          {/* Satellite Elements Container - Responsivo */}
          <div className="absolute inset-0 z-10">
            {currentCategory.items.map((item, index) => {
              let x, y, radius;

              // Layout especial para categoria equipment (3 cards: 1 no topo, 2 embaixo)
              if (currentCategory.id === 'equipment') {
                radius = isMobile ? 150 : 190; // Aumentado: 130→150, 170→190
                if (index === 0) {
                  // Card do topo (Microfone Condensador)
                  x = 0;
                  y = -radius * 0.87;
                } else if (index === 1) {
                  // Card inferior esquerdo (Microfone Dinâmico)
                  x = -radius * 0.8;
                  y = radius * 0.5;
                } else {
                  // Card inferior direito (Microfone Celular)
                  x = radius * 0.8;
                  y = radius * 0.5;
                }
              } else {
                // Layout circular para outras categorias
                const angle = index * 360 / currentCategory.items.length;
                radius = isMobile ? 140 : 180; // Aumentado: 120→140, 160→180
                x = Math.cos((angle - 90) * Math.PI / 180) * radius;
                y = Math.sin((angle - 90) * Math.PI / 180) * radius;
              }

              return (
                <div key={`${activeCategory}-${index}`}>
                  <div className={`
                    absolute w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36
                    glass-effect rounded-xl flex flex-col items-center justify-center 
                    transition-all duration-500 z-10 group overflow-visible
                    ${isAnimating ? 'scale-0 opacity-0' : 'scale-100 opacity-100 hover:scale-110 active:scale-95'}
                  `} style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: 'translate(-50%, -50%)',
                      animationDelay: `${index * 100}ms`,
                      // Efeito 3D uniforme para todos os cards
                      boxShadow: 'inset 0 0 16px rgba(0, 162, 255, 0.10), 0 12px 24px rgba(0, 0, 0, 0.5), 0 6px 12px rgba(0, 162, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.08)'
                    }}>
                    {item.logo ? (
                      <div className="flex flex-col items-center justify-center h-full w-full p-1 md:p-2 relative z-10">
                        <img
                          src={item.logo}
                          alt={item.name}
                          className={`object-contain mb-1 ${
                            // Controle por categoria completa - tamanhos aumentados
                            currentCategory.id === 'systems' ? 'w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32' : // Windows/Mac maiores
                              currentCategory.id === 'daws' ? 'w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16' : // DAWs maiores
                                currentCategory.id === 'genres' ? 'w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28' : // Gêneros GIGANTES + vazamento
                                  currentCategory.id === 'equipment' ? 'w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32' : // Equipamentos GIGANTESCOS
                                    // Controle individual por item específico (exemplo)
                                    item.name === 'FL Studio' ? 'w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20' : // FL Studio específico maior
                                      item.name === 'Windows\n(10 e 11)' ? 'w-13 h-13 md:w-15 md:h-15 lg:w-19 lg:h-19' : // Windows específico
                                        // Padrão caso não encontre condição
                                        'w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14'
                            }`}
                          style={{
                            filter: 'drop-shadow(0 3px 6px rgba(0, 0, 0, 0.4)) drop-shadow(0 0 12px rgba(0, 162, 255, 0.3))',
                            // Efeito 3D: Gêneros vazando MUITO para cima (25-30%)
                            transform: currentCategory.id === 'genres'
                              ? 'translateZ(10px) translateY(-18px)' // MUITO mais para cima
                              : currentCategory.id === 'equipment'
                                ? 'translateZ(6px) translateY(-15px)' // Equipamentos vazando para cima
                                : 'translateZ(6px)'
                          }}
                        />
                        {/* Divisor horizontal sutil - só para Windows */}
                        {item.name === 'Windows\n(10 e 11)' && (
                          <div className="w-8 md:w-10 lg:w-12 h-px bg-gradient-to-r from-transparent via-gray-400/30 to-transparent mb-1"></div>
                        )}
                        {/* Texto apenas para Windows, Mac sem texto */}
                        {item.name === 'Windows\n(10 e 11)' && (
                          <span className="text-white text-[10px] md:text-xs font-medium text-center leading-none w-full px-1 whitespace-pre-line">
                            {item.name}
                          </span>
                        )}
                        {/* Para outros sistemas (não Mac), mostrar nome normal */}
                        {currentCategory.id !== 'systems' && (
                          <>
                            {/* Divisória sempre presente para outras categorias - CONTROLE VERTICAL */}
                            <div className={`w-8 md:w-10 lg:w-12 h-px bg-gradient-to-r from-transparent via-gray-400/50 to-transparent relative z-20 ${
                              // Controle da divisória por categoria
                              currentCategory.id === 'genres'
                                ? 'mb-2' // Gêneros: divisória mais próxima do texto
                                : currentCategory.id === 'equipment'
                                  ? '-top-3 mb-1' // Equipamentos: divisória MUITO mais alta
                                  : 'mb-1' // Outras: divisória normal (4px)
                              // Controle individual da divisória (exemplo)
                              // item.name === 'Forró/Arrocha' ? 'mb-3' : 'mb-2' // Só o Forró com divisória ainda mais alta
                              }`}></div>
                            {/* Texto com posição fixa para não vazar - CONTROLE DE TAMANHO E POSIÇÃO */}
                            <span className={`text-white font-medium text-center leading-none w-full px-1 whitespace-pre-line ${currentCategory.id === 'genres'
                              ? 'text-[11px] md:text-[12px] absolute bottom-3 left-0 right-0' // Gêneros: letras MAIORES e mais ALTAS
                              : currentCategory.id === 'equipment'
                                ? 'text-[10px] md:text-xs relative -top-2' // Equipamentos: texto MUITO mais alto
                                : 'text-[10px] md:text-xs' // Outras: texto normal
                              // Controle individual do texto (exemplo)
                              // item.name === 'Pop/R&B' ? 'text-[13px] md:text-[14px] absolute bottom-3 left-0 right-0' : // Pop maior e mais alto
                              }`}>
                              {item.name}
                            </span>
                          </>
                        )}
                      </div>
                    ) : (
                      <span className="text-white text-[10px] md:text-xs font-medium text-center px-2 leading-tight truncate relative z-10">
                        {item.name}
                      </span>
                    )}
                  </div>

                  {/* Mensagem de aviso para Microfone Celular */}
                  {item.hasWarning && currentCategory.id === 'equipment' && index === 2 && (
                    <div className={`
                          absolute text-red-500 text-[9px] md:text-[10px] font-medium text-center leading-tight
                          transition-all duration-500 z-20
                          ${isAnimating ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}
                        `} style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(55% + ${y + (isMobile ? 55 : 75)}px)`,
                        transform: 'translate(-50%, -50%)',
                        width: isMobile ? '800px' : '200px',
                        animationDelay: `${(index + 1) * 100}ms`
                      }}>
                      <span className="text-red-500"> Celular = GRAVAÇÃO</span>
                      <br />
                      <span className="text-red-500">(Não é App de celular)</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Category Counter - Melhor espaçamento */}
        <div className="flex justify-center mt-16 md:mt-12">
          <div className="flex gap-8 md:gap-2">
            {categories.map((_, index) => <button key={index} onClick={() => !isAnimating && setActiveCategory(index)} className={`w-4 h-4 md:w-3 md:h-3 rounded-full transition-all duration-300 touch-manipulation ${index === activeCategory ? 'bg-voxy-cyan scale-125' : 'bg-gray-600 hover:bg-gray-500 active:bg-gray-400'}`} />)}
          </div>
        </div>
      </div>
    </div>
  </section>
};
export default CompatibilitySection;