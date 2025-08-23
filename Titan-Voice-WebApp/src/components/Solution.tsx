import { Component } from 'solid-js';

const Solution: Component = () => {
      const lineStyle = "background-image: url('https://oldsite.theteklink.com/wp-content/themes/teklink/images/linebg.png')";

  return (
    <section id="why-teklink" class="py-20 bg-white">
      <div class="container mx-auto px-4 text-center">
        {/* Main Headings */}
        <h2 class="text-3xl font-bold text-gray-800">Revolutionary Solutions. Flexible Support.</h2>
        <p class="mt-2 mb-16 text-gray-600">Get top-rated phone services ready to scale</p>
           <div class="relative w-fit mx-auto mb-16">
          <img 
            src="https://oldsite.theteklink.com/wp-content/themes/teklink/images/solutions.png" 
            alt="Solutions Diagram"
            class="relative" // Ensure image is in the same stacking context
          />

          {/* This div acts as the ::before pseudo-element */}
           <div
        class="absolute left-[-45] w-[40%] h-[7px] bg-repeat-x mr-[-20px] top-[-20px] "style={lineStyle}
      ></div>

      {/* Line AFTER the image */}
      <div
        class="absolute right-0 w-[40%] h-[7px] bg-repeat-x bottom-[-20px] "style={lineStyle}
      ></div>
        </div>
            


        <div class="space-y-16">
          {/* First Block */}
          
          <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div class="w-full md:w-1/2">
              <img 
                src="https://oldsite.theteklink.com/wp-content/uploads/img1.jpg" 
                alt="Business meeting with charts" 
                class="rounded-lg shadow-xl w-full"
              />
            </div>
            <div class="w-full md:w-1/2 text-left relative">
              <div class="bg-gray-50 border-t-4 border-blue-600 p-8 rounded-lg shadow-lg">
                {/* This div creates the arrow effect */}
                <div class="absolute -top-3 left-8 w-6 h-6 bg-gray-50 border-t-4 border-l-4 border-blue-600 transform rotate-45"></div>
                
                <p class="text-gray-700 leading-relaxed">
                  For over 20 years, the Teklink platform has delivered the best in business communications to companies operating throughout the United States and beyond. With 24/7 live monitoring, dependable tech support and redundant backup servers across multiple continents, our partners enjoy exceptional mobility, zero down time, and an unbeatable online portal packed with value-added features for every growing business.
                </p>
              </div>
            </div>
          </div>

          {/* Second Block */}
          <div class="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
            <div class="w-full md:w-1/2">
              <img 
                src="https://oldsite.theteklink.com/wp-content/uploads/cibil%20score.jpg" 
                alt="Woman working on a laptop" 
                class="rounded-lg shadow-xl w-full"
              />
            </div>
            <div class="w-full md:w-1/2 text-left relative">
              <div class="bg-gray-50 border-t-4 border-blue-600 p-8 rounded-lg shadow-lg">
                {/* Arrow for the second block */}
                <div class="absolute -top-3 left-8 md:left-auto md:right-8 w-6 h-6 bg-gray-50 border-t-4 border-r-4 border-blue-600 transform rotate-45"></div>
                
                <p class="text-gray-700 leading-relaxed">
                  Whether you’re looking to unify voice, data and internet, upgrade your virtual PBX system or streamline clients’ online experience, our wideranging services keep you seamlessly connected. And since we’re always dialing in the latest costsaving innovations, you can expect economical rates to match our minimal upfront costs. Link up with a friendly rep to customize your complete telecom package and take advantage of the most reliable, intuitive software in the industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;