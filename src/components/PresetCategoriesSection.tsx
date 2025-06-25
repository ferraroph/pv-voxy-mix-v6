import React, { useState } from 'react';
import { Settings, Mic, Wand2, Volume2, Sparkles, Users, Radio, Headphones, ChevronLeft, ChevronRight, LucideIcon } from 'lucide-react';
const PresetCategoriesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const categories: Array<{
    id: string;
    title: string;
    icon: LucideIcon;
    description: string;
    color: string;
  }> = [{
    id: 'completos',
    title: 'Presets Completos',
    icon: Settings,
    description: 'Tudo em um só preset. Carregue e sua voz já fica profissional instantaneamente.',
    color: 'from-voxy-cyan to-voxy-cyan-light'
  }, {
    id: 'principal',
    title: 'Voz Principal',
    icon: Mic,
    description: 'Mixagem completa para vocal principal. Presença, clareza e impacto.',
    color: 'from-purple-500 to-pink-500'
  }, {
    id: 'limpeza',
    title: 'Limpeza Vocal',
    icon: Wand2,
    description: 'Remove ruídos, ecos e imperfeições mantendo a naturalidade da voz.',
    color: 'from-orange-500 to-red-500'
  }, {
    id: 'adlibs',
    title: 'Adlibs / "Dobras"',
    icon: Volume2,
    description: 'Tratamento específico para adlibs que se encaixam perfeitamente na mix.',
    color: 'from-green-500 to-teal-500'
  }, {
    id: 'efeitos',
    title: 'Efeitos Especiais',
    icon: Sparkles,
    description: 'Reverbs, delays e modulações para criar atmosferas únicas.',
    color: 'from-yellow-500 to-orange-500'
  }, {
    id: 'retorno',
    title: 'Canais de Retorno',
    icon: Radio,
    description: 'Presets para sends e returns, criando espacialização profissional.',
    color: 'from-blue-500 to-indigo-500'
  }, {
    id: 'backing',
    title: 'Backing Vocals',
    icon: Users,
    description: 'Crie o encaixe perfeito. Presets que posicionam suas segundas vozes no espaço certo da mix, dando corpo e profundidade sem embolar o vocal principal.',
    color: 'from-rose-500 to-pink-500'
  }, {
    id: 'podcast',
    title: 'Podcast / Vídeo',
    icon: Headphones,
    description: 'Clareza de estúdio para seu conteúdo. Elimine ruídos, dê peso e presença à sua narração, garantindo que sua mensagem seja ouvida com qualidade profissional.',
    color: 'from-cyan-500 to-blue-500'
  }];
  const getCardPosition = (index: number) => {
    const totalCards = categories.length;
    const relativeIndex = (index - activeIndex + totalCards) % totalCards;

    // Adjust for center positioning
    let adjustedIndex = relativeIndex;
    if (adjustedIndex > totalCards / 2) {
      adjustedIndex = adjustedIndex - totalCards;
    }

    // 3D arc positioning
    const angleStep = 40; // degrees between cards
    const angle = adjustedIndex * angleStep;
    const radius = 200;
    const depth = Math.abs(adjustedIndex) * 50;
    const isActive = index === activeIndex;
    const distance = Math.abs(adjustedIndex);
    return {
      transform: `rotateY(${angle}deg) translateZ(${radius - depth}px)`,
      scale: isActive ? 1 : 0.8,
      opacity: isActive ? 1 : 0.6,
      blur: isActive ? 0 : 4,
      zIndex: isActive ? 10 : 1
    };
  };
  const handlePrevious = () => {
    setActiveIndex(prev => (prev - 1 + categories.length) % categories.length);
  };
  const handleNext = () => {
    setActiveIndex(prev => (prev + 1) % categories.length);
  };
  return <section className="py-12 md:py-20 bg-gradient-to-b from-voxy-dark-light to-voxy-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-voxy-cyan/3 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 md:w-80 md:h-80 bg-purple-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white mb-4 md:mb-6 px-2">
            {categories.length} Categorias de Presets Inclusos
          </h2>
        </div>

        {/* 3D Card Carousel with Navigation - Responsivo mas mantendo funcionalidade */}
        <div className="flex flex-col items-center gap-0 max-w-6xl mx-auto">
          
          {/* 3D Card Carousel with Navigation */}
          <div className="relative flex items-center justify-center w-full">
            
            {/* Left Arrow - Responsivo */}
            <button onClick={handlePrevious} className="absolute left-0 md:left-0 z-20 p-2 md:p-4 text-voxy-cyan hover:text-voxy-cyan-light transition-colors duration-300 hover:scale-110 touch-manipulation" style={{
            transform: 'translateY(-50%)',
            top: '50%'
          }}>
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            {/* 3D Carousel Container - Responsivo */}
            <div className="relative h-48 md:h-64 w-full max-w-sm md:max-w-2xl" style={{
            transformStyle: 'preserve-3d',
            perspective: '800px'
          }}>
              {categories.map((category, index) => {
              const position = getCardPosition(index);
              const Icon = category.icon;
              return <div key={category.id} className="absolute left-1/2 top-1/2 transition-all duration-500 ease-in-out cursor-pointer touch-manipulation" style={{
                transform: `translate(-50%, -50%) ${position.transform} scale(${position.scale})`,
                opacity: position.opacity,
                filter: `blur(${position.blur}px)`,
                zIndex: position.zIndex
              }} onClick={() => setActiveIndex(index)}>
                    <div className="w-36 h-20 md:w-48 md:h-24 p-3 md:p-4 flex items-center gap-2 md:gap-3 rounded-lg md:rounded-xl border border-voxy-cyan/40 bg-gray-900/90 backdrop-blur-lg shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-voxy-cyan/60 transition-all duration-300">
                      <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center bg-gradient-to-r ${category.color} shadow-lg flex-shrink-0`}>
                        <Icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                      </div>
                      <h3 className="text-white font-bold text-xs md:text-sm leading-tight">
                        {category.title}
                      </h3>
                    </div>
                  </div>;
            })}
            </div>

            {/* Right Arrow - Responsivo */}
            <button onClick={handleNext} className="absolute right-0 md:right-0 z-20 p-2 md:p-4 text-voxy-cyan hover:text-voxy-cyan-light transition-colors duration-300 hover:scale-110 touch-manipulation" style={{
            transform: 'translateY(-50%)',
            top: '50%'
          }}>
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
            </button>
          </div>

          {/* Description Box - Responsivo */}
          <div className="w-full max-w-4xl">
            <div style={{
            background: 'rgba(15, 15, 15, 0.95)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1), 0 0 60px rgba(0,162,255,0.15)'
          }} className="p-4 md:p-8 text-center rounded-xl md:rounded-2xl border border-voxy-cyan/40 bg-gray-900/90 backdrop-blur-lg shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                {categories[activeIndex].description}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>;
};
export default PresetCategoriesSection;