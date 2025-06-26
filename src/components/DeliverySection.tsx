import React from 'react';
import VerticalCascadeCarousel from './VerticalCascadeCarousel';
const DeliverySection = () => {
  return <section id="delivery-section" className="py-20 bg-gradient-to-b from-voxy-dark to-voxy-dark-light relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-voxy-cyan/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-1/3 w-64 h-64 bg-green-500/5 rounded-full blur-2xl animate-float" style={{
        animationDelay: '3s'
      }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            
            <h2 className="text-4xl md:text-5xl font-black text-white">
              Como Você Vai Receber
            </h2>
          </div>
          <p className="text-voxy-cyan text-lg">
            Área de membros completa com todo o suporte
          </p>
        </div>

        {/* Vertical Cascade Carousel */}
        <div>
          <VerticalCascadeCarousel />
        </div>
      </div>
    </section>;
};
export default DeliverySection;