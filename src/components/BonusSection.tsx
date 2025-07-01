import React from 'react';
import { Gift } from 'lucide-react';
const BonusSection = () => {
  const bonuses = [{
    id: 'waves-plugins',
    title: '200 Plugins WAVES',
    description: 'Os mesmos plugins usados por artistas internacionais. Os MELHORES plugins do mercado.',
    value: 'R$ 497,00',
    status: 'INCLUSO',
    icon: '🎛️',
    color: 'from-voxy-cyan to-voxy-cyan-light'
  }, {
    id: 'updates',
    title: 'Atualizações Vitalícias',
    description: 'Quando adicionamos MAIS PRESETS, você recebe AUTOMATICAMENTE. Sem pagar a mais.',
    value: 'VALOR INESTIMÁVEL',
    status: 'INCLUSO',
    icon: '∞',
    color: 'from-purple-500 to-blue-500'
  }, {
    id: 'lives',
    title: 'Lives EXCLUSIVAS',
    description: 'Aprenda a técnica que usamos para CRIAR e MELHORAR seus próprios presets únicos.',
    value: 'R$ 197,00',
    status: 'INCLUSO',
    icon: '👥',
    color: 'from-green-500 to-emerald-500'
  }];
  return <section id="bonus-section" className="py-14 sm:py-16 lg:py-20 bg-gradient-to-b from-voxy-dark to-voxy-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-green-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-2xl animate-float" style={{
        animationDelay: '3s'
      }}></div>
      </div>

      <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-4 mb-4 sm:mb-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white font-inter tracking-tight leading-tight">
              Bônus Exclusivos Inclusos
            </h2>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Bonus Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">`
            {bonuses.map(bonus => <div key={bonus.id} className="scale-100 md:scale-110 opacity-100 z-20 w-full">
                <div className="glass-effect rounded-2xl p-6 sm:p-8 h-full text-center" style={{
              background: 'rgba(30, 30, 30, 0.6)',
              backdropFilter: 'blur(16px)',
              border: '2px solid rgba(0, 162, 255, 0.5)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(0, 162, 255, 0.3)'
            }}>
                  {/* Icon */}
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-2xl flex items-center justify-center text-xl sm:text-2xl bg-gradient-to-r ${bonus.color}`} style={{
                boxShadow: '0 0 20px rgba(0, 162, 255, 0.4)'
              }}>
                    {bonus.icon}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 font-inter tracking-tight leading-tight">
                    {bonus.title}
                  </h3>

                  <p className="text-sm sm:text-base text-white/80 mb-4 sm:mb-6 leading-relaxed font-inter font-light">
                    {bonus.description}
                  </p>

                  {/* Value */}
                  <div className="space-y-2">
                    <div className="text-green-400 font-bold text-base sm:text-lg font-inter">
                      {bonus.value} → {bonus.status}
                    </div>
                    <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-voxy-cyan to-green-500 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default BonusSection;