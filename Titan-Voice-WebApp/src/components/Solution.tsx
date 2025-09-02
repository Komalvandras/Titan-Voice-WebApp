

const Solution = () => {
  return (
    <section class="py-24 bg-white overflow-hidden"> {/* Added overflow-hidden to contain elements */}
      <div class="container mx-auto px-4">
        {/* Main container for the two solution blocks */}
        <div class="space-y-24">

          {/* --- Top Block with Overlap --- */}
          <div class="relative flex flex-col md:flex-row items-center justify-start">
            {/* Image (takes up about 60% of the width on desktop) */}
            <div class="w-full md:w-3/5">
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Professional analyzing data on futuristic screens" 
                class="rounded-lg shadow-xl w-full"
              />
            </div>
            {/* Overlapping Text Box (positioned absolutely relative to the container) */}
            <div class="w-full md:w-1/2 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 z-10 mt-[-4rem] md:mt-0">
              <div class="bg-white p-8 rounded-lg shadow-2xl border-l-8 border-titan-blue">
                <p class="text-gray-700 leading-relaxed text-lg">
                  For over 20 years, the TitanVoice platform has delivered the best in business communications to companies operating throughout the United States and beyond. With 24/7 live monitoring, dependable tech support and redundant backup servers across multiple continents, our partners enjoy exceptional mobility, zero down time, and an unbeatable online portal packed with value-added features for every growing business.
                </p>
              </div>
            </div>
          </div>

          {/* --- Bottom Block with Overlap --- */}
          <div class="relative flex flex-col md:flex-row items-center justify-end">
            {/* Image (on the right) */}
            <div class="w-full md:w-3/5">
              <img 
                src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Customer support representative working on a laptop" 
                class="rounded-lg shadow-xl w-full"
              />
            </div>
             {/* Overlapping Text Box (on the left) */}
            <div class="w-full md:w-1/2 md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 z-10 mt-[-4rem] md:mt-0">
              <div class="bg-white p-8 rounded-lg shadow-2xl border-r-8 border-titan-blue">
                <p class="text-gray-700 leading-relaxed text-lg">
                  Whether you’re looking to unify voice, data and internet, upgrade your virtual PBX system or streamline clients’ online experience, our wide-ranging services keep you seamlessly connected. And since we’re always dialing in the latest cost-saving innovations, you can expect economical rates to match our minimal upfront costs. Link up with a friendly rep to customize your complete telecom package and take advantage of the most reliable, intuitive software in the industry.
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