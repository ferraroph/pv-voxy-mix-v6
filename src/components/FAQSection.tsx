import React, { useState, useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';
const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const faqs = [{
    question: "Funciona no Mac?",
    answer: "Sim! O Voxy Mix é totalmente compatível com macOS. Funciona perfeitamente no Logic Pro, GarageBand e qualquer DAW que você use no Mac."
  }, {
    question: "Funciona em quais programas?",
    answer: "O Voxy Mix é universal e funciona em TODAS as DAWs principais: FL Studio, Logic Pro, Ableton Live, Pro Tools, Reaper, Studio One, Cubase, e muitas outras."
  }, {
    question: "Funciona para quais gêneros musicais?",
    answer: "Os presets dinâmicos se adaptam a qualquer gênero: Rap, Trap, Pop, R&B, Rock, Funk, Forró, Sertanejo, Gospel, e muito mais. A tecnologia se ajusta ao seu estilo."
  }, {
    question: "Não sei mixar. Vou conseguir usar?",
    answer: "SIM! Esse é exatamente o público-alvo. Os presets são plug-and-play. Você só carrega, grava sua voz e já fica profissional. Incluímos tutoriais passo-a-passo."
  }, {
    question: "Os plugins vêm inclusos?",
    answer: "Sim! Você recebe mais de 200 plugins WAVES profissionais no pacote, os mesmos usados pelos maiores estúdios do mundo. Tudo integrado no Gerenciador."
  }, {
    question: "Como é a entrega?",
    answer: "100% digital. Após a compra, você recebe acesso imediato à área de membros com todos os downloads, tutoriais e suporte completo."
  }];
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.3
    });
    const section = document.getElementById('faq-section');
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return <section id="faq-section" className="py-12 md:py-20 bg-gradient-to-b from-black to-voxy-dark relative overflow-hidden">
      {/* Background Effects - Responsivos */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-48 h-48 md:w-80 md:h-80 bg-red-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/3 w-32 h-32 md:w-64 md:h-64 bg-voxy-cyan/5 rounded-full blur-2xl animate-float" style={{
        animationDelay: '2s'
      }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className={`text-center mb-8 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-4 mb-4 md:mb-6">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white font-inter tracking-tight px-2">
              Dúvidas Frequentes
            </h2>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-3 md:space-y-4">
            {faqs.map((faq, index) => <div key={index} className={`transition-all duration-500 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="glass-effect rounded-xl md:rounded-2xl p-4 md:p-6 cursor-pointer hover:scale-[1.01] md:hover:scale-[1.02] transition-all duration-300 touch-manipulation" style={{
              background: 'rgba(30, 30, 30, 0.6)',
              backdropFilter: 'blur(16px)',
              border: activeIndex === index ? '1px solid rgba(0, 162, 255, 0.5)' : '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: activeIndex === index ? '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 162, 255, 0.3)' : '0 8px 32px rgba(0, 0, 0, 0.2)'
            }} onClick={() => toggleFAQ(index)}>
                  <div className="flex items-start md:items-center justify-between gap-3">
                    <h3 className="text-base md:text-lg font-bold text-white font-inter flex-1 leading-tight md:leading-normal">
                      {faq.question}
                    </h3>
                    <div className={`w-8 h-8 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${activeIndex === index ? 'bg-voxy-cyan text-white rotate-180' : 'bg-white/10 text-white/60'}`}>
                      {activeIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </div>
                  
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-96 opacity-100 mt-3 md:mt-4' : 'max-h-0 opacity-0'}`}>
                    <div className="pt-3 md:pt-4 border-t border-white/10">
                      <p className="text-white/80 leading-relaxed font-inter font-light text-sm md:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default FAQSection;