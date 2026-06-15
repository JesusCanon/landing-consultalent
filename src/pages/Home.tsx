import Navbar from "../components/Navbar";
import HeroSection from "../sections/HeroSection";
import ProblemSection from "../sections/ProblemSection";
import SolutionSection from "../sections/SolutionSection";
import BenefitsSection from "../sections/BenefitsSection";
import HowItWorksSection from "../sections/HowItWorksSection";
import CTASection from "../sections/CTASection";
import FormSection from "../sections/FormSection";
import FAQSection from "../sections/FAQSection";
import FooterSection from "../sections/FooterSection";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <BenefitsSection />
      <HowItWorksSection />
      <CTASection />
      <FormSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}

export default Home;
