import { Component } from 'solid-js';

type Props = {
  onNavClick: (e: MouseEvent, selector: string) => void;
};

const IntroSection: Component<Props> = (props) => {
  return (
    <section id="home" class="relative h-[600px] text-white">
      <div class="absolute inset-0 bg-cover bg-center" style={{ "background-image": "url('https://oldsite.theteklink.com/wp-content/uploads/2017/10/teklink-1.jpg')" }}></div>
      <div class="absolute inset-0 bg-black/50"></div>
      <div class="relative z-10 h-full flex items-center">
        <div class="container mx-auto px-4 text-center">
          <h1 class="text-5xl md:text-7xl font-bold mb-4">Find Your Telecom Link</h1>
          <p class="text-lg md:text-xl max-w-3xl mx-auto mb-8">Connect to savings with custom businessclass phone services, powerful hosted PBX, and pioneering online platform</p>
          <a href="#contact" onClick={(e) => props.onNavClick(e, '#contact')} class="bg-blue-600 text-white font-bold py-3 px-8 rounded-md hover:bg-blue-700 transition-transform duration-300 transform hover:scale-105">UPGRADE TODAY</a>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;