import BlackpinkSection from "./components/homepage/blackpink-section";
import HeroSection from "./components/homepage/hero-section";
import PhotoSection from "./components/homepage/photo-section";
import ReleaseSection from "./components/homepage/release-section";
import VideoSection from "./components/homepage/video-section";

export default function Page() {
  return (
    <main>
      <HeroSection />
      <ReleaseSection />
      <VideoSection />
      <PhotoSection />
      <BlackpinkSection />
    </main>
  );
}
