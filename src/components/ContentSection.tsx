
import { useState } from 'react';
import { CheckCircle, PlusCircle, Play, FileText, Image } from 'lucide-react';

const ContentSection = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const contentItems = [
    {
      id: 'presets',
      title: '50+ Presets Dinâmicos',
      description: 'Configurações profissionais em 6 categorias diferentes',
      icon: <CheckCircle className="w-8 h-8 text-voxy-cyan" />,
      highlight: true
    },
    {
      id: 'plugins',
      title: '200+ Plugins WAVES',
      description: 'Acesso completo aos melhores plugins do mercado',
      icon: <PlusCircle className="w-8 h-8 text-voxy-cyan" />
    },
    {
      id: 'studioverse',
      title: 'StudioVerse Completo',
      description: 'Plataforma integrada para mixagem profissional',
      icon: <Play className="w-8 h-8 text-voxy-cyan" />
    },
    {
      id: 'updates',
      title: 'Atualizações Vitalícias',
      description: 'Receba todas as novidades sem custo adicional',
      icon: <FileText className="w-8 h-8 text-voxy-cyan" />
    },
    {
      id: 'community',
      title: 'Grupo Exclusivo',
      description: 'Networking com outros produtores profissionais',
      icon: <Image className="w-8 h-8 text-voxy-cyan" />
    },
    {
      id: 'lives',
      title: 'Lives Exclusivas',
      description: 'Sessões ao vivo com o criador do Voxy Mix',
      icon: <Play className="w-8 h-8 text-voxy-cyan" />,
      highlight: true
    }
  ];

  return (
    <section className="relative py-20 bg-voxy-dark overflow-hidden">
      {/* Background Atmosphere - Diorama Vivo */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-voxy-cyan/10 via-voxy-cyan/3 to-transparent rounded-full blur-3xl"></div>
        
        {/* Poeira de Dados */}
        <div className="absolute inset-0 opacity-8">
          {[...Array(20)].map((_, i) => (
            <div 
              key={`dust-${i}`} 
              className="absolute text-voxy-cyan/15 text-xs blur-sm"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 6}s`,
                animation: 'float 6s ease-in-out infinite alternate'
              }}
            >
              {Math.random() > 0.5 ? '01' : '10'}
            </div>
          ))}
        </div>
        
        {/* Ecos de Áudio waveform elements */}
        {[...Array(5)].map((_, i) => (
          <div 
            key={`wave-${i}`} 
            className="absolute opacity-15"
            style={{
              left: `${5 + i * 20}%`,
              top: `${30 + i * 10}%`,
              width: `${20 + i * 5}px`,
              height: `2px`,
              background: 'linear-gradient(90deg, transparent, #00A2FF, transparent)',
              filter: 'blur(1px)',
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="md:text-5xl font-bold text-white mb-6 text-2xl">
            Seu Arsenal de Mixagem
            <span className="block text-voxy-cyan">Dinâmica</span>
          </h2>
        </div>

        {/* Floating Bonus Element */}
        <div 
          className="absolute top-20 right-10 z-20"
          style={{
            animation: 'float 6s ease-in-out infinite alternate'
          }}
        >
          <div className="bg-black/60 backdrop-blur-sm border border-voxy-cyan/40 rounded-lg px-4 py-2 shadow-lg my-[26px] mx-0">
            <p className="text-voxy-cyan font-semibold text-sm">BÔNUS EXCLUSIVOS</p>
            <p className="text-white text-xs">Com acesso ao Pré-lançamento</p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {contentItems.map(item => {
            const isHovered = hoveredCard === item.id;
            return (
              <div 
                key={item.id} 
                className={`relative group cursor-pointer transition-all duration-300 ${
                  item.highlight ? 'md:col-span-2' : ''
                } ${isHovered ? 'transform -translate-y-2' : ''}`}
                onMouseEnter={() => setHoveredCard(item.id)} 
                onMouseLeave={() => setHoveredCard(null)} 
                onClick={() => setHoveredCard(isHovered ? null : item.id)}
              >
                <div 
                  className={`relative h-full backdrop-blur-sm border rounded-xl p-6 shadow-2xl transition-all duration-300 ${
                    isHovered ? 'border-voxy-cyan shadow-voxy-cyan/30' : 'border-voxy-cyan/20'
                  }`}
                  style={isHovered ? {
                    backgroundColor: 'rgba(30, 30, 30, 0.5)',
                    boxShadow: '0 8px 32px rgba(0, 162, 255, 0.3)'
                  } : {
                    backgroundColor: 'rgba(30, 30, 30, 0.5)'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-voxy-cyan/5 to-transparent rounded-xl"></div>
                  
                  <div className="relative z-10">
                    <div className="mb-4">
                      {item.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-gradient-radial from-voxy-cyan/20 to-transparent rounded-full blur-sm transition-opacity duration-300 ${isHovered ? 'opacity-60' : 'opacity-30'}`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
