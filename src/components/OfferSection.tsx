
import { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

const OfferSection = () => {
  const valueItems = ['50+ Presets Dinâmicos', 'Mais de 200 Plugins da WAVES', 'Tutoriais de instalação e uso', 'Atualizações Vitalícias', 'Grupo de Networking Exclusivo', 'AULAS BÔNUS: Como criar seus próprios presets e CALIBRAR usando IA'];

  return <section className="relative py-20 bg-voxy-dark overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0">
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-voxy-cyan/15 via-voxy-cyan/5 to-transparent rounded-full blur-3xl"></div>
        
        {/* Poeira de Dados */}
        <div className="absolute inset-0 opacity-8">
          {[...Array(15)].map((_, i) => <div key={`dust-${i}`} className="absolute text-voxy-cyan/15 text-xs animate-float blur-sm" style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${4 + Math.random() * 6}s`
        }}>
              01
            </div>)}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Countdown Timer */}
        <div className="max-w-2xl mx-auto mb-12">
          <CountdownTimer />
        </div>

        {/* Main Offer Card com Glass-Levitation */}
        <div className="max-w-2xl mx-auto">
          <div className="relative backdrop-blur-sm border border-voxy-cyan/30 rounded-2xl p-8 shadow-2xl mb-8 glass-effect" style={{
          backgroundColor: 'rgba(30, 30, 30, 0.5)',
          boxShadow: '0 8px 32px rgba(0, 162, 255, 0.2)'
        }}>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-voxy-cyan/5 to-transparent rounded-2xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
                Garanta Seu Acesso Completo
              </h2>

              {/* Value Stack */}
              <div className="space-y-4 mb-8">
                {valueItems.map((item, index) => <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-voxy-cyan flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>)}
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="text-5xl font-bold text-voxy-cyan mb-2">
                  R$ 97,90
                </div>
                <p className="text-gray-400">
                  Pagamento único • Sem mensalidades
                </p>
              </div>

              {/* Premium CTA Button Final - Estética_Botões.png */}
              <button className="w-full group relative px-8 py-4 bg-gradient-to-br from-voxy-cyan via-voxy-cyan-light to-voxy-cyan rounded-xl font-bold text-white text-xl transition-all duration-300 hover:-translate-y-1" style={{
              boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.1), inset 0 -2px 4px rgba(0,0,0,0.3), 0 0 20px rgba(0, 162, 255, 0.4)',
              textShadow: '0 1px 2px rgba(0,0,0,0.5)'
            }}>
                <div className="absolute inset-0 bg-gradient-to-br from-voxy-cyan to-voxy-cyan-light rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity" style={{
                filter: 'blur(8px)'
              }}></div>
                <span className="relative z-10 text-base px-0 mx-0">GARANTIR ACESSO VIP</span>
              </button>
            </div>

            {/* Levitation Reflection Effect */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-gradient-radial from-voxy-cyan/20 to-transparent rounded-full blur-lg"></div>
          </div>

          {/* Guarantee Card only */}
          <div className="max-w-lg mx-auto">
            <div className="backdrop-blur-sm border border-yellow-500/30 rounded-xl p-6 shadow-xl glass-effect" style={{
            backgroundColor: 'rgba(30, 30, 30, 0.4)'
          }}>
              <div className="text-center">
                <div className="text-4xl mb-3">🛡️</div>
                <h3 className="text-3xl font-bold text-yellow-400 mb-3">
                  Garantia de 30 Dias
                </h3>
                <p className="text-sm font-bold text-amber-400 -mr-3 -ml-3 -mt-1 mb-3">
                  Esse é o nível que a gente se garante...
                </p>
                <p className="text-gray-300 mt-8 text-sm leading-relaxed">
                   A ferramenta está hospedada na Cakto, uma das plataformas mais fácil de pedir reembolso...
                </p>
                <p className="text-gray-300 mt-4 text-sm leading-relaxed">
                   Se eu quisesse esconder uma ferramenta ruim eu colocaria em outras que<br></br>dificultam o reembolso 😉
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default OfferSection;
