import { useState, useEffect } from 'react';
const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Multi-Layered Cinematic Background */}
      <div className="absolute inset-0 z-0">
        {/* Layer 1: Base Radial Gradient */}
        <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at center, #111827 0%, #050508 100%)'
      }}></div>
        
        {/* Layer 2: Animated Grid/Starfield */}
        <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(0, 162, 255, 0.1) 1px, transparent 1px),
              radial-gradient(circle at 75% 75%, rgba(0, 200, 255, 0.1) 1px, transparent 1px)
            `,
        backgroundSize: '80px 80px, 120px 120px',
        animation: 'panGrid 60s linear infinite'
      }}></div>
        
        {/* Layer 3: Atmospheric Light Beams */}
        <div className="absolute inset-0">
          {/* Light Beam 1 */}
          <div className="absolute w-[800px] h-[600px] opacity-10" style={{
          top: '10%',
          left: '20%',
          background: 'radial-gradient(ellipse, rgba(0, 162, 255, 0.3) 0%, rgba(147, 51, 234, 0.2) 50%, transparent 70%)',
          filter: 'blur(100px)',
          animation: 'atmosphericDrift1 20s ease-in-out infinite alternate'
        }}></div>
          
          {/* Light Beam 2 */}
          <div className="absolute w-[600px] h-[800px] opacity-15" style={{
          top: '40%',
          right: '15%',
          background: 'radial-gradient(ellipse, rgba(0, 255, 200, 0.2) 0%, rgba(59, 130, 246, 0.3) 40%, transparent 70%)',
          filter: 'blur(120px)',
          animation: 'atmosphericDrift2 25s ease-in-out infinite alternate-reverse'
        }}></div>
          
          {/* Light Beam 3 */}
          <div className="absolute w-[500px] h-[500px] opacity-12" style={{
          bottom: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'radial-gradient(circle, rgba(0, 162, 255, 0.25) 0%, rgba(168, 85, 247, 0.15) 60%, transparent 80%)',
          filter: 'blur(80px)',
          animation: 'atmosphericDrift3 18s ease-in-out infinite alternate'
        }}></div>
        </div>
        
        {/* Layer 4: Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => <div key={i} className="absolute w-1 h-1 bg-voxy-cyan rounded-full opacity-60" style={{
          left: `${Math.random() * 100}%`,
          animation: `floatParticle${i % 3 + 1} ${15 + Math.random() * 10}s linear infinite`,
          animationDelay: `${Math.random() * 10}s`
        }}></div>)}
        </div>
        
        {/* Bottom Fade Transition */}
        <div className="absolute bottom-0 left-0 right-0 h-40" style={{
        background: 'linear-gradient(to top, #050508 0%, transparent 100%)'
      }}></div>
      </div>

      <div className={`container mx-auto px-6 text-center relative z-10 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
        {/* Typography - Exact Reference Match */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mt-10 mb--1.5 leading-tight">
            ACESSO VIP
          </h1>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span style={{
            textShadow: '0 0 30px rgba(0, 255, 136, 0.5)'
          }} className="text-transparent bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text font-extrabold ">
              DESBLOQUEADO
            </span>
          </h1>
        </div>

        {/* Body Text - Quebras específicas por dispositivo */}
        <div className="mb-12 max-w-2xl mx-auto px-2">
          {/* Versão Mobile Muito Pequeno (até 375px) - 3 linhas */}
          <div className="block sm:hidden">
            <p className="text-sm text-white leading-relaxed text-center block min-[376px]:hidden">
              Você é{' '}
              <span className="font-bold text-green-400">UM DOS POUCOS</span>
              <br />
              com a chance de dominar
              <br />
              <span className="font-bold text-green-400">A NOVA ERA DA MIXAGEM</span>
            </p>
            
            {/* Versão Mobile Normal (376px+) - 2 linhas */}
            <p className="text-sm text-white leading-relaxed text-center hidden min-[376px]:block">
              Você é{' '}
              <span className="font-bold text-green-400">UM DOS POUCOS</span>{' '}
              com a chance de
              <br />
              dominar{' '}
              <span className="font-bold text-green-400">A NOVA ERA DA MIXAGEM</span>
            </p>
          </div>
          
          {/* Versão Desktop/Tablet (640px+) */}
          <p className="hidden sm:block md:text-xl text-white leading-relaxed text-center text-base">
            Você é{' '}
            <span className="font-bold text-green-400">UM DOS POUCOS</span>{' '}
            com a chance de dominar
            <br />
            <span className="font-bold text-green-400">A NOVA ERA DA MIXAGEM</span>
          </p>
        </div>

        {/* Vertical Video Player */}
        <div className={`relative mx-auto mb-12 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <div style={{
          position: 'relative',
          width: '100%',
          maxWidth: '379px',
          margin: '0 auto',
          borderRadius: '15px',
          overflow: 'hidden',
          background: '#000',
          aspectRatio: '9 / 16',
          boxShadow: '0 0 0 2px rgba(0, 162, 255, 0.8), 0 0 40px rgba(0, 162, 255, 0.4)'
        }}>
            <iframe src="https://player.vimeo.com/video/1082327492?autoplay=0&loop=0&title=0&byline=0&portrait=0&dnt=1" style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            border: 'none'
          }} frameBorder="0" allow="fullscreen; picture-in-picture" allowFullScreen>
            </iframe>
          </div>
        </div>

        {/* CTA Button */}
        <div className={`transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <a href="#oferta">
            <button className="group relative px-12 py-4 text-white text-lg font-bold uppercase tracking-wide rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-r from-voxy-cyan to-voxy-cyan-light"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-voxy-cyan/80 to-voxy-cyan-light/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 rounded-2xl" style={{
            boxShadow: '0 0 40px rgba(0, 255, 200, 0.6), 0 8px 25px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
          }}></div>
            <div className="absolute inset-0 rounded-2xl border-2 border-white/20 animate-pulse"></div>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-transparent via-transparent to-black/10"></div>
            <span className="relative z-10 drop-shadow-sm">
              GARANTIR ACESSO VIP
            </span>
            <div className="absolute inset-0 -top-2 -bottom-2 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500 skew-x-12"></div>
          </button>
          </a>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes panGrid {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-80px, -80px); }
        }
        
        @keyframes atmosphericDrift1 {
          0% { transform: translate(0, 0) scale(1); opacity: 0.08; }
          50% { opacity: 0.12; }
          100% { transform: translate(30px, -20px) scale(1.1); opacity: 0.06; }
        }
        
        @keyframes atmosphericDrift2 {
          0% { transform: translate(0, 0) scale(1); opacity: 0.10; }
          50% { opacity: 0.15; }
          100% { transform: translate(-40px, 25px) scale(0.9); opacity: 0.08; }
        }
        
        @keyframes atmosphericDrift3 {
          0% { transform: translate(-50%, 0) scale(1); opacity: 0.09; }
          50% { opacity: 0.14; }
          100% { transform: translate(-50%, -15px) scale(1.05); opacity: 0.07; }
        }
        
        @keyframes floatParticle1 {
          0% { transform: translateY(100vh) translateX(0); opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          100% { transform: translateY(-100px) translateX(20px); opacity: 0; }
        }
        
        @keyframes floatParticle2 {
          0% { transform: translateY(100vh) translateX(0); opacity: 0; }
          15% { opacity: 0.8; }
          85% { opacity: 0.8; }
          100% { transform: translateY(-100px) translateX(-15px); opacity: 0; }
        }
        
        @keyframes floatParticle3 {
          0% { transform: translateY(100vh) translateX(0); opacity: 0; }
          12% { opacity: 0.7; }
          88% { opacity: 0.7; }
          100% { transform: translateY(-100px) translateX(10px); opacity: 0; }
        }
      `}</style>
    </section>;
};
export default HeroSection;