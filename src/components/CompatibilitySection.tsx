import React, { useState, useEffect } from 'react';
import { Keyboard, Laptop, Mic, Settings, Home } from 'lucide-react';
const CompatibilitySection = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const categories = [{
    id: 'daws',
    title: 'TODAS AS DAWs',
    icon: Keyboard,
    items: [
      { name: 'Reaper', logo: '/logos/daws/Reaper_logo.png' },
      { name: 'FL Studio', logo: '/logos/daws/FLStudio_Logo.png' },
      { name: 'Logic Pro', logo: '/logos/daws/LogicPro_Logo.png' },
      { name: 'Pro Tools', logo: '/logos/daws/ProTools_Logo.png' },
      { name: 'Ableton', logo: '/logos/daws/Ableton_Logo.png' },
      { name: 'Studio One', logo: '/logos/daws/StudioOne_Logo.png' }
    ]
  }, {
    id: 'systems',
    title: 'Windows\ne Mac',
    icon: Laptop,
    items: [
      { name: 'Windows\n(10 e 11)', logo: '/logos/systems/Windows_Logo.svg.png' },
      { name: 'Catalina', logo: '/logos/systems/Mac_Catalina10.png' },
      { name: 'Big Sur', logo: '/logos/systems/Mac_BigSur11.png' },
      { name: 'Monterey', logo: '/logos/systems/Mac_Monterey12.png' },
      { name: 'Ventura', logo: '/logos/systems/Mac_Ventura13.png' },
      { name: 'Sonoma', logo: '/logos/systems/Mac_Sonoma14.png' }
    ]
  }, {
    id: 'genres',
    title: 'TODOS OS GÊNEROS',
    icon: Mic,
    items: [
      { name: 'Rap/Trap e Funk', logo: '/logos/Genres/Rap_Trap.png' },
      { name: 'Pop/R&B', logo: '/logos/Genres/Pop_Rnb.png' },
      { name: 'Rock', logo: '/logos/Genres/Rock.png' },
      { name: 'E muito mais...', logo: '/logos/Genres/Todos.png' },
      { name: 'Arrocha/Forró', logo: '/logos/Genres/Forro_Arrocha.png' },
      { name: 'Sertanejo', logo: '/logos/Genres/Sertanejo.png' }
    ]
  }, {
    id: 'equipment',
    title: 'TODOS OS EQUIPAMENTOS',
    icon: Settings,
    items: [
      { name: 'Microfone\nCondensador', logo: '/logos/mic/Microfone_Condensador.png' },
      { name: 'Microfone\nDinâmico', logo: '/logos/mic/Microfone_Dinamico.png' },
      { name: 'Microfone\nCelular', logo: '/logos/mic/Celular.png', hasWarning: true }
    ]
  }];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.3
    });
    
    const section = document.getElementById('compatibility-section');
    if (section) observer.observe(section);
    
    return () => {
      observer.disconnect();
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
  return <section id="compatibility-section" className="py-20 bg-gradient-to-b from-voxy-dark-light to-voxy-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-voxy-cyan/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-voxy-cyan-light/3 rounded-full blur-2xl animate-float"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-8 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 md:mb-6 px-4">
            Compatibilidade Universal
          </h2>
          <p className="text-voxy-cyan text-base md:text-lg mb-6 md:mb-8 px-4">
            <span className="block md:hidden">Toque no centro para alternar</span>
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
                    src="/logos/systems/Windows_Mac.png" 
                    alt="Windows e Mac"
                    className="w-12 h-12 md:w-16 md:h-16 object-contain mb-1 md:mb-2 group-hover:scale-110 transition-transform"
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
                radius = isMobile ? 130 : 170;
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
                radius = isMobile ? 120 : 160;
                x = Math.cos((angle - 90) * Math.PI / 180) * radius;
                y = Math.sin((angle - 90) * Math.PI / 180) * radius;
              }
              
              return (
                <div key={`${activeCategory}-${index}`}>
                  <div className={`
                    absolute w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32
                    glass-effect rounded-xl flex flex-col items-center justify-center 
                    transition-all duration-500 z-10 group overflow-hidden
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
                              className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain mb-1"
                              style={{
                                filter: 'drop-shadow(0 3px 6px rgba(0, 0, 0, 0.4)) drop-shadow(0 0 12px rgba(0, 162, 255, 0.3))',
                                transform: 'translateZ(6px)'
                              }}
                            />
                            {/* Divisor horizontal sutil */}
                            <div className="w-8 md:w-10 lg:w-12 h-px bg-gradient-to-r from-transparent via-gray-400/30 to-transparent mb-1"></div>
                            <span className="text-white text-[10px] md:text-xs font-medium text-center leading-none w-full px-1 whitespace-pre-line">
                              {item.name}
                            </span>
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
                          top: `calc(50% + ${y + (isMobile ? 55 : 75)}px)`,
                          transform: 'translate(-50%, -50%)',
                          width: isMobile ? '800px' : '100px',
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
          <div className="flex justify-center mt-8 md:mt-12">
            <div className="flex gap-3 md:gap-2">
              {categories.map((_, index) => <button key={index} onClick={() => !isAnimating && setActiveCategory(index)} className={`w-4 h-4 md:w-3 md:h-3 rounded-full transition-all duration-300 touch-manipulation ${index === activeCategory ? 'bg-voxy-cyan scale-125' : 'bg-gray-600 hover:bg-gray-500 active:bg-gray-400'}`} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
};
export default CompatibilitySection;