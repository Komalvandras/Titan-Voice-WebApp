import { Component, For } from 'solid-js';
import { navLinks, NavLink } from '../data/appData';
import logo from '../assets/TitanVoice-Logo.png';

type Props = {
  onNavClick: (e: MouseEvent, selector: string) => void;
};

const Header: Component<Props> = (props) => {
  return (
    <header class="bg-gray-100/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div class="container mx-auto px-4 flex justify-between items-center h-24">
        <a href="#home" onClick={(e) => props.onNavClick(e, '#home')}>
          <img src="/logo.png" alt="TitanVoice Logo" class="h-23"/>          

                    
        </a>
        <nav class="hidden lg:flex items-center space-x-6">
        
          <For each={navLinks}>
            {(link) => (
              <a href={link.href} onClick={(e) => props.onNavClick(e, link.href)} class="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                {link.name}
              </a>
            )}
          </For>
          <a href="https://portal.theteklink.com/" target="_blank" class="bg-blue-800 text-white px-6 py-2 rounded-md hover:bg-blue-900 transition-colors duration-300">Login</a>
        </nav>
        {/* A mobile menu button could be added here */}
      </div>
    </header>
  );
};

export default Header;