import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import StatsSection from "./StatsSection";
import ReviewsSection from "./ReviewsSection";
import CTASection from "./CTASection";
import Footer from "./Footer";
import DownloadAppSection from "./DownloadApp";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-[#F8F9FF] font-sans antialiased">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
      <div className="relative h-full w-full bg-white">
        <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <StatsSection />
        <ReviewsSection />
        <DownloadAppSection />
      </main>
      <Footer className="bg-[#F8F9FF]" />
    </div>
  );
}
