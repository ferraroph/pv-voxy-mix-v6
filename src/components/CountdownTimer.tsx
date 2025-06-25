import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 16,
    hours: 12,
    minutes: 30,
    seconds: 26
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return {
            ...prev,
            seconds: prev.seconds - 1
          };
        } else if (prev.minutes > 0) {
          return {
            ...prev,
            minutes: prev.minutes - 1,
            seconds: 59
          };
        } else if (prev.hours > 0) {
          return {
            ...prev,
            hours: prev.hours - 1,
            minutes: 59,
            seconds: 59
          };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59
          };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div 
      className="w-full bg-gradient-to-br from-red-600 via-red-500 to-red-600 py-4 px-6 rounded-lg shadow-2xl border border-red-400/30"
      style={{
        boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.1), inset 0 -2px 4px rgba(0,0,0,0.3), 0 0 20px rgba(239, 68, 68, 0.4)',
      }}
    >
      <div className="text-center">
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
      </div>
    </div>
  );
};

export default CountdownTimer;
