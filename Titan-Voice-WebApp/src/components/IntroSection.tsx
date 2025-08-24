import { Component } from 'solid-js';
import backgroundImage from '../assets/titan-1.png';
import QuoteForm from './QuoteForm';

type Props = {
  onNavClick: (e: MouseEvent, selector: string) => void;
};

const IntroSection: Component<Props> = (props) => {
   return (
    <section id="home" class="relative min-h-[700px] lg:h-screen text-white flex items-center py-20">
      
      <div class="absolute inset-0 bg-cover bg-center" style={{ "background-image": `url(${backgroundImage})` }}></div>
      
      <div class="relative z-10 container mx-auto px-4 w-full">
        {/* Main Flex Container for the two columns */}
        <div class="flex flex-wrap items-center">
          
          {/* Left Column: Text Content */}
          <div class="w-full lg:w-1/2 pr-0 lg:pr-12 text-center lg:text-left">

            <h1 class="text-5xl md:text-7xl font-bold mb-4 leading-tight">Find Your Telecom Link</h1>
            <p class="text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-8">
              Connect to savings with custom business-class phone services, powerful hosted PBX, and a pioneering online platform.
            </p>
          </div>

          {/* Right Column: The Form */}
          <div class="w-full lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
};


export default IntroSection;