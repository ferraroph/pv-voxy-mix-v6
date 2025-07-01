import { useState, useEffect, useRef, useCallback } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 7,
    seconds: 46
  });
  const [isExpired, setIsExpired] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const observerRef = useRef(null);
  const containerRef = useRef(null);

  // Função para calcular tempo restante baseado no timestamp inicial
  const calculateTimeLeft = useCallback((startTime) => {
    const totalSeconds = 7 * 60 + 46; // 7 minutos e 46 segundos em segundos
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const remaining = Math.max(0, totalSeconds - elapsed);

    if (remaining === 0) {
      setIsExpired(true);
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: 0,
      hours: 0,
      minutes: Math.floor(remaining / 60),
      seconds: remaining % 60
    };
  }, []);

  // Inicializar countdown baseado na primeira visualização
  const initializeCountdown = useCallback(() => {
    const STORAGE_KEY = 'voxy_countdown_start';
    let startTime = localStorage.getItem(STORAGE_KEY);

    if (!startTime) {
      // Primeira vez vendo o countdown
      const currentTime = Date.now();
      localStorage.setItem(STORAGE_KEY, currentTime.toString());
      startTime = currentTime.toString();
    }

    const startTimeNumber = parseInt(startTime);

    // Calcular tempo restante
    const remaining = calculateTimeLeft(startTimeNumber);
    setTimeLeft(remaining);
    setHasStarted(true);

    // Se já expirou, marcar como expirado
    if (remaining.days === 0 && remaining.hours === 0 && remaining.minutes === 0 && remaining.seconds === 0) {
      setIsExpired(true);
    }
  }, [calculateTimeLeft]);

  // Observer para detectar quando o countdown entra na viewport
  useEffect(() => {
    if (!containerRef.current) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            initializeCountdown();
          }
        });
      },
      { threshold: 0.1 }
    );

    observerRef.current.observe(containerRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [hasStarted, initializeCountdown]);

  // Timer para atualizar countdown
  useEffect(() => {
    if (!hasStarted || isExpired) return;

    const timer = setInterval(() => {
      const STORAGE_KEY = 'voxy_countdown_start';
      const startTime = localStorage.getItem(STORAGE_KEY);
      
      if (startTime) {
        const startTimeNumber = parseInt(startTime);
        const remaining = calculateTimeLeft(startTimeNumber);
        setTimeLeft(remaining);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [hasStarted, isExpired, calculateTimeLeft]);

  return (
    <div 
      ref={containerRef}
      className="w-full bg-gradient-to-br from-red-600 via-red-500 to-red-600 py-3 px-6 rounded-lg shadow-2xl border border-red-400/30"
      style={{
        boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.1), inset 0 -2px 4px rgba(0,0,0,0.3), 0 0 20px rgba(239, 68, 68, 0.4)',
      }}
    >
      <div className="text-center">
        {isExpired ? (
          <>
            <p 
              className="text-base -ml-5 -mr-5 text-white font-semibold mb-4 text-base"
              style={{
                textShadow: '0 1px 2px rgba(0,0,0,0.5)'
              }}
            >
              ÚLTIMA CHANCE - VAGAS FECHANDO
            </p>
            
            <div className="flex justify-center gap-4">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div 
                  key={unit} 
                  className="bg-black/30 backdrop-blur-sm rounded-lg px-4 py-3 min-w-[80px] border border-red-300/20"
                  style={{
                    boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.1), inset 0 -1px 2px rgba(0,0,0,0.3)'
                  }}
                >
                  <div 
                    className="text-2xl font-bold text-white mb-1"
                    style={{
                      textShadow: '0 1px 2px rgba(0,0,0,0.5)'
                    }}
                  >
                    {value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-xs text-gray-200 capitalize">
                    {unit === 'days' ? 'Dias' : unit === 'hours' ? 'Horas' : unit === 'minutes' ? 'Minutos' : 'Segundos'}
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <p 
              className="text-white font-semibold mb-4 text-base"
              style={{
                textShadow: '0 1px 2px rgba(0,0,0,0.5)'
              }}
            >
              SEU ACESSO ENCERRA EM BREVE...
            </p>
            
            <div className="flex justify-center gap-4">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div 
                  key={unit} 
                  className="bg-black/30 backdrop-blur-sm rounded-lg px-4 py-3 min-w-[80px] border border-red-300/20"
                  style={{
                    boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.1), inset 0 -1px 2px rgba(0,0,0,0.3)'
                  }}
                >
                  <div 
                    className="text-2xl font-bold text-white mb-1"
                    style={{
                      textShadow: '0 1px 2px rgba(0,0,0,0.5)'
                    }}
                  >
                    {value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-xs text-gray-200 capitalize">
                    {unit === 'days' ? 'Dias' : unit === 'hours' ? 'Horas' : unit === 'minutes' ? 'Minutos' : 'Segundos'}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CountdownTimer;
