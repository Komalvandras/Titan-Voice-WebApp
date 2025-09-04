// src/components/ChainCTA.tsx
import icon1 from '../assets/titan-6.png';
import icon2 from '../assets/titan-7.png';
import icon3 from '../assets/titan-8.png';
import icon4 from '../assets/titan-9.png';
import icon5 from '../assets/titan-5.png';

const ChainCTA = () => {
  
  const title = "Award Winning Trusted Platform";

  return (
    <section
      id='chain-CTA'
      class="relative py-24 text-black bg-white"
    > 
      <div class="relative z-10 container mx-auto px-4 text-center">
        <h3 class="text-4xl font-bold mb-12">{title}</h3>
        
        {/* --- Icons Section --- */}
        <div class="flex flex-wrap justify-center items-center gap-8 md:gap-20">

          {/* Icon 5: Globe */}
          <div class="flex flex-col items-center text-center">
             {/* Increased size by another 15% to h-36 w-36 */}
             <img src={icon5.src} alt="Platform Icon 5" class="w-36 h-36 object-contain"/>
          </div>
          {/* Icon 1: Award */}
          <div class="flex flex-col items-center text-center">
             <img src={icon1.src} alt="Platform Icon 1" class="w-36 h-36 object-contain"/>
          </div>

          {/* Icon 2: Shield */}
          <div class="flex flex-col items-center text-center">
             <img src={icon2.src} alt="Platform Icon 2" class="w-36 h-36 object-contain"/>
          </div>

          {/* Icon 3: Users */}
          <div class="flex flex-col items-center text-center">
             <img src={icon3.src} alt="Platform Icon 3" class="w-36 h-36 object-contain"/>
          </div>
          <div class="flex flex-col items-center text-center">
             <img src={icon4.src} alt="Platform Icon 4" class="w-36 h-36 object-contain"/>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ChainCTA;