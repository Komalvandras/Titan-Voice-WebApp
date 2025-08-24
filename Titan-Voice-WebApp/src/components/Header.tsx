import { Component, For } from 'solid-js';
import { navLinks } from '../data/appData';
import titanLogo from '../assets/titan-1.png'; // Correctly imports your logo

type Props = {
  onNavClick: (e: MouseEvent, selector: string) => void;
  activeSection: string;
};

const Header: Component<Props> = (props) => {
  return (
    <header class="bg-gray-100/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div class="container mx-auto px-4 flex justify-between items-center h-24">
        <a href="#home" onClick={(e) => props.onNavClick(e, '#home')} class="flex items-center gap-3">
          <img src="/logo.png" alt="TitanVoice Logo" class="h-23"/>          
          <span class="text-2xl font-bold text-slate-700">Titan Voice</span>
        </a>
        <nav class="hidden lg:flex items-center space-x-8">
          <For each={navLinks}>
            {(link) => (
              <a 
                href={link.href} 
                onClick={(e) => props.onNavClick(e, link.href)} 
                class="transition-colors duration-300 text-lg" // Added text-lg for consistency
                classList={{
                  'text-blue-600 font-semibold': props.activeSection === link.href.substring(1),
                  'text-gray-600 hover:text-blue-600': props.activeSection !== link.href.substring(1)
                }}
              >
                {link.name}
              </a>
            )}
          </For>
          {/* --- THIS IS THE UPDATED LOGIN BUTTON --- */}
          <a 
            href="https://pbx.titanbusinessvoice.com/portal/" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="bg-blue-800 text-white font-bold px-6 py-2 rounded-full text-lg hover:bg-blue-900" // Added text-lg
          >
            Login
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;