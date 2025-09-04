import {  createSignal, onMount, onCleanup } from 'solid-js';
import Header from './Header';
import IntroSection from './IntroSection';
import Stats from './Stats';
import Solution from './Solution';
import Services from './Services';
import ScrollToTopButton from './ScrollToTopButton';
import Mission from './Mission';
import Footer from './Footer';
import Features from './Features';
import Benefits from './Benefits';
import GetLinkedCTA from './GetLinkedCTA';
import ChainCTA from './ChainCTA';
import Contact from './Contact';

// An array of the section IDs that correspond to your navigation links
const sectionIds = ['home', 'why-teklink', 'services', 'features', 'about', 'contact'];

const MainLayout = () => {
  // State to hold the ID of the currently active section
  const [activeSection, setActiveSection] = createSignal('home');

  // Function to check which section is in view
  const handleScroll = () => {
    // Offset to highlight the nav link a bit before the section top hits the very top of the viewport
    const scrollPosition = window.scrollY + 150; 

    for (const id of sectionIds) {
      const element = document.getElementById(id);
      if (element) {
        if (element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
          setActiveSection(id);
          return; // Stop checking once the active section is found
        }
      }
    }
  };


  onMount(() => {
    window.addEventListener('scroll', handleScroll);

  
    onCleanup(() => {
      window.removeEventListener('scroll', handleScroll);
    });
  });

  // Helper function for smooth scrolling navigation
  const handleNavClick = (e: MouseEvent, selector: string) => {
    e.preventDefault();
    const element = document.querySelector(selector);
    if (element) {
      const headerOffset = 96; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div class="bg-white font-sans text-gray-700">
      {/* Pass the activeSection state and nav handler to the Header */}
      <Header onNavClick={handleNavClick} activeSection={activeSection()} />
      <main>
        {/* Add 'id' attributes to your main sections for scroll spying */}
        <div id="home"><IntroSection onNavClick={handleNavClick} /></div>
        <ChainCTA/>
        <div id="why-teklink"><Solution /></div>
        <Stats />
        
        <div id="services"><Services /></div>
        <div id="features"><Features /></div>
        <GetLinkedCTA onNavClick={handleNavClick} />
        <Benefits />
        <div id="about"><Mission onNavClick={handleNavClick} /></div>
        <div id="contact"><Contact /></div>
      </main>
      <Footer onNavClick={handleNavClick} />
      <ScrollToTopButton />
    </div>
  );
};

export default MainLayout;
