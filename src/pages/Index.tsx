
import HeroSection from '@/components/HeroSection';
import EcosystemSection from '@/components/EcosystemSection';
import CompatibilitySection from '@/components/CompatibilitySection';
import ComparisonSection from '@/components/ComparisonSection';
import PresetCategoriesSection from '@/components/PresetCategoriesSection';
import BonusSection from '@/components/BonusSection';
import OfferSection from '@/components/OfferSection';
import DeliverySection from '@/components/DeliverySection';
import FAQSection from '@/components/FAQSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      <EcosystemSection />
      <CompatibilitySection />
      <ComparisonSection />
      <PresetCategoriesSection />
      <BonusSection />
      <OfferSection />
      <DeliverySection />
      <FAQSection />
    </div>
  );
};

export default Index;
