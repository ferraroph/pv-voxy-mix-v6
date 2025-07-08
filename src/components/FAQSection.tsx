import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const faqs = [{
    question: "Funciona no Mac?",
    answer: "SIM, a partir da versão 10 (Catalina):\n\n \n\n✅ Catalina - 10\n\n✅ Big Sur - 11\n\n✅ Monterey - 12\n\n✅ Ventura - 13\n\n✅ Sonoma - 14\n\n✅ Sequoia - 15",
    isSpecial: true
  }, {
    question: "Funciona Pra quais PROGRAMAS?",
    answer: "LITERALMENTE TODOS!!!\n\nSe ele ACEITA plugins, VAI FUNCIONAR 🔥",
    isSpecial: true
  }, {
    question: "Funciona para quais GÊNEROS MUSICAIS?",
    answer: "TODOS TAMBÉM KKK\n\nDesde RAP, Trap, Funk, R&b...\n\nAté Forró, Arrocha, pop, Rock, Reggae, enfim...\n\nFUNCIONA PRA TUDOOOO!!!\n\nO nome já diz: PRESETS DINÂMICOS",
    isSpecial: true
  }, {
    question: "Não sou Artista, nem produtor. Vai servir?",
    answer: "Se você quer TRATAR A VOZ, tirar ruídos, \"Limpar\", corrigir um áudio RUIM enfim...\n\nDEIXAR SUA VOZ PROFISSIONAL, mesmo que não vá adicionar efeitos... ADIVINHA?\n\nSim, sim e sim 🎤🎵🎶",
    isSpecial: true
  }, {
    question: "Sou produtor AVANÇADO... Vai ser útil?",
    answer: "Útil??? UUUUUTIL???\n\nIrmão (Ou irmã kk), PRESETS DINÂMICOS são ooooutra pegada.\n\nPra eles serem dinâmicos além de ter aqueles botezinhos ali, que te dá CONTROLE sobre a mixagem SEM TE SOBRECARREGAR com informação em excesso\n\nEles precisam ser TESTADOS e APROVADOS em várias vozes, equipamentos e ambientes diferentes.\n\nDa um trabalho DO CARÃLHO desenvolver, testar e APROVAR cada um desses!\n\nDe 10 que eu faço, 8 eu descarto (Porque é melhor começar um do zero do que pegar um que não se adapta em polmenos 95% dos cenários)\n\nEntão SIM, vai funcionar\n\nOBS:\n\nTa ficando cada vez mais fácil ter um trampo profissional EM VÁRIAS ÁREAS (Não só na música)\n\nA poucos anos atrás era tudo analógico, físico tudo mixado 100% DE OUVIDO...\n\nEntão deixa esse receio de lado. Se atualiza!",
    isSpecial: true
  }, {
    question: "Os plugins vem com o Voxy Mix?",
    answer: "Sim... Mais de 200 plugins da Waves (Plugins PROFISSIONAIS)\n\nE tudo que você precisa!",
    isSpecial: true
  }, {
    question: "Como vai ser entregue?",
    answer: "Você vai receber seu acesso a ÁREA DE MEMBROS pelo seu e-mail, de forma AUTOMÁTICA.\n\nDaí é só ir lá, fazer seu login na área de membros e seguir as instruções EM VÍDEO que tá lá, pra ativar o Voxy Mix\n\nATENÇÃO!!!\n\n• Confira o seu email, letra por letra na hora da compra. Email errado = Seu acesso não chega e você vai ter q solicitar manualmente pro email certo (Vamo evitar né...)\n\n• Evite usar HOTMAIL. Hotmail está com problemas pra receber emails...",
    isSpecial: true
  }];
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return <section id="faq-section" className="py-12 md:py-20 bg-gradient-to-b from-voxy-dark-light-smooth to-voxy-dark relative overflow-hidden">
    {/* Background Effects - Responsivos */}
    <div className="absolute inset-0">
      <div className="absolute top-1/4 right-1/4 w-48 h-48 md:w-80 md:h-80 bg-red-500/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 left-1/3 w-32 h-32 md:w-64 md:h-64 bg-voxy-cyan/5 rounded-full blur-2xl animate-float" style={{
        animationDelay: '2s'
      }}></div>
    </div>

    <div className="container mx-auto px-4 md:px-6 relative z-10">
      <div className="text-center mb-8 md:mb-16">
        <div className="flex items-center justify-center gap-4 mb-4 md:mb-6">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white font-inter tracking-tight px-2">
            Dúvidas Frequentes
          </h2>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-3 md:space-y-4">
          {faqs.map((faq, index) => <div key={index} className="transition-all duration-300">
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
                <div className="pt-3 md:pt-4 border-t border-white/10">                      {faq.isSpecial ? (
                  <div className="text-white/80 leading-relaxed font-inter font-light text-sm md:text-base">
                    {faq.answer.split('\n').map((line, lineIndex) => {
                      if (line.trim() === '') return <br key={lineIndex} />;

                      // Texto em vermelho (linhas com palavras em maiúsculo ou com !!!)
                      if (line.includes('!!!') || line.includes('SIM,') || line.includes('LITERALMENTE') ||
                        line.includes('TODOS TAMBÉM') || line.includes('FUNCIONA PRA TUDOOOO') ||
                        line.includes('DEIXAR SUA VOZ PROFISSIONAL') || line.includes('Útil???') ||
                        line.includes('Sim... Mais de 200') || line.includes('ÁREA DE MEMBROS') ||
                        line.includes('ATENÇÃO!!!')) {
                        return <p key={lineIndex} className="text-red-500 font-medium mb-2">{line}</p>;
                      }

                      // Linhas com checkmarks (mantém verde)
                      if (line.includes('✅')) {
                        return <p key={lineIndex} className="flex items-center mb-1">{line}</p>;
                      }

                      // Emojis e texto especial
                      if (line.includes('🔥') || line.includes('🎤🎵🎶')) {
                        return <p key={lineIndex} className="mb-2">{line}</p>;
                      }

                      // Texto normal
                      return <p key={lineIndex} className="mb-2">{line}</p>;
                    })}
                  </div>
                ) : (
                  <p className="text-white/80 leading-relaxed font-inter font-light text-sm md:text-base">
                    {faq.answer}
                  </p>
                )}
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