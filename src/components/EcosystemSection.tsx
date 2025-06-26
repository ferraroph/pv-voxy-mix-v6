
import { Settings, Cpu, Check } from 'lucide-react';

const EcosystemSection = () => {

  return (
    <section id="ecosystem-section" className="py-20 bg-gradient-to-b from-black/95 via-black to-black/95 relative overflow-hidden"
             style={{ 
               background: 'linear-gradient(to bottom, rgba(0,0,0,0.95), rgba(0,0,0,1), rgba(0,0,0,0.95))',
               transition: 'background 0.5s ease-in-out'
             }}>
      {/* Background 3D Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-voxy-cyan/3 rounded-full blur-3xl animate-float opacity-40"></div>
        <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-voxy-cyan-light/5 rounded-full blur-2xl animate-float opacity-30" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-voxy-cyan/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 font-inter tracking-tight">
            O Ecossistema
            <span className="block text-transparent bg-gradient-to-r from-voxy-cyan to-voxy-cyan-light bg-clip-text" 
                  style={{ textShadow: '0 0 20px rgba(0, 162, 255, 0.5)' }}>
              Voxy Mix
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-inter font-light">
            São 'só' presets? É um plugin? O que é o Voxy Mix?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Presets Dinâmicos Card */}
          <div className="transition-all duration-500 hover:scale-105">
            <div className="glass-effect rounded-2xl p-8 h-full hover:scale-105 transition-all duration-500 group relative"
                 style={{
                   background: 'rgba(30, 30, 30, 0.4)',
                   backdropFilter: 'blur(16px)',
                   border: '1px solid rgba(0, 162, 255, 0.3)',
                   boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.1), 0 0 20px rgba(0, 162, 255, 0.2)'
                 }}>
              
              {/* SVG Image with 3D Effect and Controlled Overflow */}
              <div className="relative mb-8 h-48 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-voxy-cyan/20"
                   style={{ overflow: 'visible' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-voxy-cyan/10 to-transparent rounded-xl"></div>
                
                {/* SVG Background Image - permitindo vazamento controlado e opacidade 100% */}
                <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 1 }}>
                  <img 
                    src="/Session2/Stack_Presets.svg" 
                    alt="Stack Presets" 
                    className="w-auto object-contain"
                    style={{ 
                      height: '160%',
                      opacity: 1,
                      transform: 'translateY(-10%) perspective(1000px) rotateY(5deg)',
                      filter: 'drop-shadow(0 8px 16px rgba(0, 162, 255, 0.3))'
                    }}
                  />
                </div>
                
                {/* Number 50 overlay - mais pra baixo */}
                <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 3, transform: 'translateY(15%)' }}>
                  <span className="text-8xl font-black text-voxy-cyan opacity-90 font-inter"
                        style={{ 
                          textShadow: '0 0 30px rgba(0, 162, 255, 0.8), 0 4px 8px rgba(0, 0, 0, 0.5)',
                          filter: 'drop-shadow(0 0 10px rgba(0, 162, 255, 0.5))'
                        }}>
                    50
                  </span>
                </div>
                
                {/* Blue box with icon - sempre na frente */}
                <div className="absolute bottom-4 left-4" style={{ zIndex: 10 }}>
                  <div className="w-12 h-12 bg-gradient-to-r from-voxy-cyan to-voxy-cyan-light rounded-lg flex items-center justify-center"
                       style={{ boxShadow: '0 0 20px rgba(0, 162, 255, 0.6)' }}>
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 font-inter tracking-tight">PRESETS DINÂMICOS</h3>
              <p className="text-white/80 mb-6 leading-relaxed font-inter font-light">
                Configurações inteligentes que se adaptam em tempo real à sua voz, eliminando o som genérico e artificial.
              </p>

              {/* Checklist */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-voxy-cyan rounded-full flex items-center justify-center"
                       style={{ boxShadow: '0 0 10px rgba(0, 162, 255, 0.5)' }}>
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-white/80 text-sm font-inter">Knobs inteligentes que se ajustam automaticamente</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-voxy-cyan rounded-full flex items-center justify-center"
                       style={{ boxShadow: '0 0 10px rgba(0, 162, 255, 0.5)' }}>
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-white/80 text-sm font-inter">Testado em 1.168 vozes diferentes</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-voxy-cyan rounded-full flex items-center justify-center"
                       style={{ boxShadow: '0 0 10px rgba(0, 162, 255, 0.5)' }}>
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-white/80 text-sm font-inter">95% de taxa de sucesso comprovada</span>
                </div>
              </div>
            </div>
          </div>

          {/* Gerenciador de Presets Card */}
          <div className="transition-all duration-500 hover:scale-105">
            <div className="glass-effect rounded-2xl p-8 h-full hover:scale-105 transition-all duration-500 group relative"
                 style={{
                   background: 'rgba(30, 30, 30, 0.4)',
                   backdropFilter: 'blur(16px)',
                   border: '1px solid rgba(0, 162, 255, 0.3)',
                   boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.1), 0 0 20px rgba(0, 162, 255, 0.2)'
                 }}>
              
              {/* SVG Image with 3D Effect */}
              <div className="relative mb-8 h-48 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-voxy-cyan/20"
                   style={{ overflow: 'visible' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-voxy-cyan-light/10 to-transparent rounded-xl"></div>
                
                {/* SVG Background Image - vazamento controlado e opacidade 100% */}
                <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 1 }}>
                  <img 
                    src="/Session2/Stack_StudioVerse.svg" 
                    alt="Stack StudioVerse" 
                    className="w-auto object-contain"
                    style={{ 
                      height: '160%',
                      opacity: 1,
                      transform: 'translateY(-10%) perspective(1000px) rotateY(-5deg)',
                      filter: 'drop-shadow(0 8px 16px rgba(0, 162, 255, 0.3))'
                    }}
                  />
                </div>
                
                {/* Grid overlay removido para não interferir */}
                
                {/* Blue box with icon - sempre na frente */}
                <div className="absolute bottom-4 left-4" style={{ zIndex: 10 }}>
                  <div className="w-12 h-12 bg-gradient-to-r from-voxy-cyan to-voxy-cyan-light rounded-lg flex items-center justify-center"
                       style={{ boxShadow: '0 0 20px rgba(0, 162, 255, 0.6)' }}>
                    <Cpu className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 font-inter tracking-tight">GERENCIADOR DE PRESETS</h3>
              <p className="text-white/80 mb-6 leading-relaxed font-inter font-light">
                Plataforma completa com mais de 200 plugins profissionais WAVES integrados em um só lugar.
              </p>

              {/* Checklist */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-voxy-cyan rounded-full flex items-center justify-center"
                       style={{ boxShadow: '0 0 10px rgba(0, 162, 255, 0.5)' }}>
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-white/80 text-sm font-inter">Interface intuitiva e organizada</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-voxy-cyan rounded-full flex items-center justify-center"
                       style={{ boxShadow: '0 0 10px rgba(0, 162, 255, 0.5)' }}>
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-white/80 text-sm font-inter">Gerenciamento avançado de categorias</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-voxy-cyan rounded-full flex items-center justify-center"
                       style={{ boxShadow: '0 0 10px rgba(0, 162, 255, 0.5)' }}>
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-white/80 text-sm font-inter">Backup automático das configurações</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
