import { Component } from 'solid-js';
import Header from './components/Header';
import IntroSection from './components/IntroSection';
import Stats from './components/Stats';
import Solution from './components/Solution';
import Services from './components/Services';
import ScrollToTopButton from './components/ScrollToTopButton';
import Mission from './components/Mission';
import Footer from './components/Footer';
import Features from './components/Features';
import CTA from './components/CTA';
import Benefits from './components/Benefits';
// ... import other components

const App: Component = () => {

  // Helper function for smooth scrolling navigation
  const handleNavClick = (e: MouseEvent, selector: string) => {
    e.preventDefault();
    const element = document.querySelector(selector);
    if (element) {
        const headerOffset = 96; // Height of the sticky header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
  };

  return (
    <div class="bg-white font-sans text-gray-700">
      <Header onNavClick={handleNavClick} />
      <main>
         <IntroSection onNavClick={handleNavClick} />
         <Stats />
         <Solution />
         <Services/>
         
         
         <Features/>
         {/* <CTA
          title="Your Chain Is As Strong As Your <strong>Strongest Link</strong>"
          buttonText="TEAM UP TODAY"
          targetHref="#contact"
          backgroundImageUrl="https://oldsite.theteklink.com/wp-content/themes/teklink/images/map.png"
          onNavClick={handleNavClick}
         /> */}
         <Mission onNavClick={handleNavClick} />
         
         <Benefits/>
         <ScrollToTopButton/>
         <Footer onNavClick={handleNavClick} />
          
           
      





      </main>
    </div>
  );
};

export default App;