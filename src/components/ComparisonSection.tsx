
import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

const ComparisonSection = () => {
  const [activeTab, setActiveTab] = useState<'comum' | 'dinamico'>('comum');
  const [isFlipping, setIsFlipping] = useState(false);

  const handleTabChange = (tab: 'comum' | 'dinamico') => {
    if (tab === activeTab || isFlipping) return;
    
    setIsFlipping(true);
    
    setTimeout(() => {
      setActiveTab(tab);
      setTimeout(() => {
        setIsFlipping(false);
      }, 300);
    }, 150);
  };

  return (
    <section id="comparison-section" className="py-20 bg-gradient-to-b from-voxy-dark to-voxy-dark-light-smooth relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-red-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-1/4 w-60 h-60 bg-voxy-cyan/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Por Que Funciona Tão Bem?
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Toggle Tabs */}
          <div className="flex justify-center mb-12">
            <div className="glass-effect rounded-2xl p-2 flex">
              <button
                onClick={() => handleTabChange('comum')}
                className={`px-8 py-4 rounded-xl font-bold transition-all duration-300 ${
                  activeTab === 'comum'
                    ? 'bg-red-500/20 text-red-400 border border-red-500/50'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Preset Comum
              </button>
              <button
                onClick={() => handleTabChange('dinamico')}
                className={`px-8 py-4 rounded-xl font-bold transition-all duration-300 ${
                  activeTab === 'dinamico'
                    ? 'bg-voxy-cyan/20 text-voxy-cyan border border-voxy-cyan/50'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Preset Dinâmico
              </button>
            </div>
          </div>

          {/* Comparison Card */}
          <div className="relative">
            <div className={`transition-all duration-300 ${
              isFlipping ? 'transform rotateX-90 opacity-50' : 'transform rotateX-0 opacity-100'
            }`}>
              {activeTab === 'comum' ? (
                <div className="glass-effect rounded-2xl p-8 border-2 border-red-500/50 bg-red-500/5">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center animate-pulse-red">
                      <X className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-red-400">
                      Preset Comum
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-red-400">•</span>
                      <span className="text-gray-300">Mixagem GENÉRICA, sem testes em outras vozes = Resultado artificial e DESCALIBRADO</span>
                    </div>
                    <div className="flex items-center gap-3 -mr-3">
                      <span className="text-red-400">•</span>
                      <span className="text-gray-300">Não se adapta a voz, ao ambiente gravado, nem ao microfone usado </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-red-400">•</span>
                      <span className="text-gray-300"> Difícil de mecher e quando não é EXAGERADO você não sente NENHUMA diferença</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-red-400">•</span>
                      <span className="text-gray-300">Geralmente funciona só em PROGRAMAS ESPECÍFICOS</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="glass-effect rounded-2xl p-8 border-2 border-voxy-cyan/50 bg-voxy-cyan/5">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-voxy-cyan rounded-full flex items-center justify-center animate-pulse-glow">
                      <Check className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-voxy-cyan">
                      Preset DINÂMICO
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-voxy-cyan rounded-full"></div>
                      <span className="text-gray-300">Mixagens TESTADAS e calibradas com mais de mil vozes diferentes</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-voxy-cyan rounded-full"></div>
                      <span className="text-gray-300"> Se adaptam DE IMEDIATO a 95% dos casos, e os outros 5% você ajusta fácil com os "botões" (também testados)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-voxy-cyan rounded-full"></div>
                      <span className="text-gray-300">É isso que torna possível ter um Resultado PROFISSIONAL em MINUTOS, até pra quem NÃO SABE PRODUZIR</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-voxy-cyan rounded-full"></div>
                      <span className="text-gray-300">Funciona em TODOS OS PROGRAMAS, todos os gêneros e é compatível com Windows e Mac</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
