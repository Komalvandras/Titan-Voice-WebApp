// src/components/Header.jsx

import { createSignal, For } from 'solid-js';
import { navLinks } from '../data/appData';
import Logo from '../assets/logo.png'; // Make sure this path is correct

type Props = {
  onNavClick: (e: MouseEvent, selector: string) => void;
  activeSection: string;
};

const Header = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = createSignal(false);

  const handleMobileLinkClick = (e: MouseEvent, selector: string) => {
    props.onNavClick(e, selector);
    setIsMenuOpen(false);
  };

  const handleMobileRouterLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header class="bg-gray-100/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div class="container mx-auto px-4 flex justify-between items-center h-24">
        <a href="#home" onClick={(e) => props.onNavClick(e, '#home')} class="flex items-center gap-3">
          {/* Corrected to use the imported logo */}
          <img src={Logo.src} alt="TitanVoice Logo" class="h-24 w-auto"/>
          <span class="text-2xl font-bold text-slate-700">TitanVoice</span>
        </a>

        {/* --- Desktop Navigation --- */}
        <nav class="hidden lg:flex items-center space-x-8">
          <For each={navLinks}>
            {(link) => (
              <a 
                href={link.href} 
                onClick={(e) => props.onNavClick(e, link.href)} 
                class="transition-colors duration-300 text-lg"
                classList={{
                  'text-blue-600 font-semibold': props.activeSection === link.href.substring(1),
                  'text-gray-600 hover:text-blue-600': props.activeSection !== link.href.substring(1)
                }}
              >
                {link.name}
              </a>
            )}
          </For>
          <div class="flex items-center gap-4">
            <a href="https://pbx.titanbusinessvoice.com/portal/" target="_blank" rel="noopener noreferrer" 
               class="bg-blue-800 text-white font-bold px-6 py-2 rounded-full text-lg hover:bg-blue-900">
              Login
            </a>
            {/* Replaced <A> with <a> */}
            <a href="/support" class="bg-blue-800 text-white font-bold px-6 py-2 rounded-full text-lg hover:bg-blue-900">
              Support
            </a>
          </div>
        </nav>

        {/* --- Hamburger Menu Button --- */}
        <div class="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen())} class="p-2 rounded-md text-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
            {isMenuOpen() ? (
              <svg xmlns="http://www.w.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
      </div>

      {/* --- Mobile Menu --- */}
      <div class={`absolute top-24 left-0 w-full bg-gray-100 shadow-lg lg:hidden transition-transform duration-300 ease-in-out ${isMenuOpen() ? 'transform translate-y-0' : 'transform -translate-y-[150%]'}`}>
        <nav class="flex flex-col items-center p-6 space-y-6">
          <For each={navLinks}>
            {(link) => (
              <a href={link.href} onClick={(e) => handleMobileLinkClick(e, link.href)} class="text-xl text-slate-700 hover:text-blue-600">
                {link.name}
              </a>
            )}
          </For>
          {/* Replaced <A> with <a> */}
          <a href="/support" onClick={handleMobileRouterLinkClick} class="bg-blue-800 text-white font-bold w-full text-center py-3 px-6 rounded-full text-lg">
            Support
          </a>
          <a href="https://pbx.titanbusinessvoice.com/portal/" target="_blank" rel="noopener noreferrer" 
             class="bg-blue-800 text-white font-bold w-full text-center py-3 px-6 rounded-full text-lg hover:bg-blue-900">
            Login
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;