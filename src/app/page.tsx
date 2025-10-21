import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CharacterSection from "@/components/CharacterSection";
import NewsSection from "@/components/NewsSection";
import GallerySection from "@/components/GallerySection";
import StorySection from "@/components/StorySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="">
        <Hero />
        <NewsSection />
        <StorySection />
        <CharacterSection />
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
}
