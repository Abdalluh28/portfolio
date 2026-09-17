import Footer from "@/components/Footer";
import ContactSection from "./components/ContactSection";
import ContributionsSnippet from "./components/ContributionsSnippet";
import FeaturedProjects from "./components/FeaturedProjects";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <FeaturedProjects />
            <ContributionsSnippet />
            <SkillsSection />
            <ContactSection />
            <Footer />
        </>
    );
}
