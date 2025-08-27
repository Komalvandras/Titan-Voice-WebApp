// src/components/Footer.tsx

import {  For } from 'solid-js';
import { navLinks } from '../data/appData';

type Props = {
  onNavClick: (e: MouseEvent, selector: string) => void;
};

const Footer = (props:any) => {
  return (
    <footer class="bg-gray-800 text-gray-300 py-10">
      <div class="container mx-auto px-4 text-center">
        <nav class="flex justify-center flex-wrap gap-x-6 gap-y-2 mb-6">
          <For each={navLinks}>
            {(link) => (
              <a
                href={link.href}
                onClick={(e) => props.onNavClick(e, link.href)}
                class="hover:text-white transition-colors duration-300"
              >
                {link.name}
              </a>
            )}
          </For>
          <a href="https://pbx.titanbusinessvoice.com/portal/" target="_blank" class="hover:text-white transition-colors duration-300">Login</a>
        </nav>
        <div class="text-sm text-gray-500">
          <a
            target="_blank"
            href="http://www.shiateichman.com/"
            class="hover:text-gray-400"
          >
            Design & Developed by STCA
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;