
import React, { useState, useEffect } from 'react';
import { X, Check } from 'lucide-react';

const ComparisonSection = () => {
  const [activeTab, setActiveTab] = useState<'comum' | 'dinamico'>('comum');
  const [isVisible, setIsVisible] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('comparison-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

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
    <section id="comparison-section" className="py-20 bg-gradient-to-b from-voxy-dark to-voxy-dark-light relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-red-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-1/4 w-60 h-60 bg-voxy-cyan/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
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
                      Preset Comum (Estático)
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-red-400">•</span>
                      <span className="text-gray-300">Configuração fixa para 'voz genérica'</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-red-400">•</span>
                      <span className="text-gray-300">Não se adapta ao seu timbre</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-red-400">•</span>
                      <span className="text-gray-300">Resultado artificial e forçado</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-red-400">•</span>
                      <span className="text-gray-300">Funciona bem só em 20% dos casos</span>
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
                      Preset Dinâmico (Inteligente)
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-voxy-cyan rounded-full"></div>
                      <span className="text-gray-300">Knobs inteligentes que se ajustam</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-voxy-cyan rounded-full"></div>
                      <span className="text-gray-300">Testado em 1.168 vozes diferentes</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-voxy-cyan rounded-full"></div>
                      <span className="text-gray-300">Resultado natural e profissional</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-voxy-cyan rounded-full"></div>
                      <span className="text-gray-300">95% de taxa de sucesso comprovada</span>
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
