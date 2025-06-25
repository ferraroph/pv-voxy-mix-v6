import React, { useState } from 'react';
import { ChevronUp, ChevronDown, Play, FileText, Download, Video, CheckCircle } from 'lucide-react';
interface CarouselCard {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
}
const VerticalCascadeCarousel = () => {
  const cards: CarouselCard[] = [{
    id: 'email',
    title: 'E-mail de Acesso',
    description: 'Recebe acesso automático por email',
    icon: Play,
    color: 'from-voxy-cyan to-voxy-cyan-light'
  }, {
    id: 'login',
    title: 'Login na Área',
    description: 'Acessa área de membros completa',
    icon: FileText,
    color: 'from-purple-500 to-pink-500'
  }, {
    id: 'download',
    title: 'Download dos Arquivos',
    description: 'Baixa todos os presets e plugins',
    icon: Download,
    color: 'from-green-500 to-emerald-500'
  }, {
    id: 'videos',
    title: 'Vídeos de Instalação',
    description: 'Segue tutoriais passo a passo',
    icon: Video,
    color: 'from-orange-500 to-red-500'
  }, {
    id: 'ready',
    title: 'Pronto para Usar',
    description: 'Começa a criar hits profissionais',
    icon: CheckCircle,
    color: 'from-voxy-cyan to-green-500'
  }];
  const [activeIndex, setActiveIndex] = useState(0);
  const getCardStyles = (cardIndex: number) => {
    // Calculate relative position to active card
    const relativePosition = cardIndex - activeIndex;

    // Define transforms for each position
    const positions = {
      '-2': {
        translateY: -80,
        scale: 0.85,
        opacity: 0.4,
        blur: 2,
        zIndex: 1
      },
      '-1': {
        translateY: -40,
        scale: 0.95,
        opacity: 0.7,
        blur: 1,
        zIndex: 2
      },
      '0': {
        translateY: 0,
        scale: 1,
        opacity: 1,
        blur: 0,
        zIndex: 3
      },
      '1': {
        translateY: 40,
        scale: 0.95,
        opacity: 0.7,
        blur: 1,
        zIndex: 2
      },
      '2': {
        translateY: 80,
        scale: 0.85,
        opacity: 0.4,
        blur: 2,
        zIndex: 1
      }
    };

    // Handle wraparound for positions beyond -2/+2
    let normalizedPosition = relativePosition;
    if (relativePosition < -2) {
      normalizedPosition = relativePosition + cards.length;
    } else if (relativePosition > 2) {
      normalizedPosition = relativePosition - cards.length;
    }

    // Clamp to available positions
    const positionKey = Math.max(-2, Math.min(2, normalizedPosition)).toString();
    const position = positions[positionKey as keyof typeof positions];
    return {
      transform: `translate(-50%, ${position.translateY}px) scale(${position.scale})`,
      opacity: position.opacity,
      filter: `blur(${position.blur}px)`,
      zIndex: position.zIndex,
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
    };
  };
  const handleDownArrow = () => {
    setActiveIndex(prev => (prev + 1) % cards.length);
  };
  const handleUpArrow = () => {
    setActiveIndex(prev => (prev - 1 + cards.length) % cards.length);
  };
  return <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-6">
      {/* Navigation Up Arrow */}
      <button onClick={handleUpArrow} className="mb-4 text-4xl text-voxy-cyan hover:text-voxy-cyan-light transition-colors duration-200 filter drop-shadow-[0_0_10px_currentColor] hover:scale-110" style={{
      textShadow: '0 0 10px currentColor'
    }}>
        <ChevronUp className="w-8 h-8" />
      </button>

      {/* Card Stage */}
      <div style={{
      height: '300px'
    }} className="flex flex-col items-center justify-center w-full max-w-md px-[156px] py-[103px]">
        {cards.map((card, index) => {
        const Icon = card.icon;
        const isActive = index === activeIndex;
        const cardStyles = getCardStyles(index);
        return <div key={card.id} className={`absolute w-full h-24 rounded-2xl glass-effect left-1/2 ${isActive ? 'bg-gray-900/90 shadow-[0_0_25px_rgba(0,255,255,0.7)]' : 'bg-gray-900/40'}`} style={cardStyles}>
              <div className="flex items-center h-full p-4 gap-4">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-r ${card.color} flex-shrink-0`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-white mb-1 truncate">
                    {card.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-tight">
                    {card.description}
                  </p>
                </div>

                {/* Right Accent Bar */}
                <div className="w-1 h-12 bg-gradient-to-b from-voxy-cyan to-voxy-cyan-light rounded-full flex-shrink-0"></div>
              </div>
            </div>;
      })}
      </div>

      {/* Navigation Down Arrow */}
      <button onClick={handleDownArrow} className="mt-4 text-4xl text-voxy-cyan hover:text-voxy-cyan-light transition-colors duration-200 filter drop-shadow-[0_0_10px_currentColor] hover:scale-110" style={{
      textShadow: '0 0 10px currentColor'
    }}>
        <ChevronDown className="w-8 h-8" />
      </button>
    </div>;
};
export default VerticalCascadeCarousel;