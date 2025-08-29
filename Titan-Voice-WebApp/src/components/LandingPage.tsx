// Asset imports: Astro will process these paths during the build
import logo from '../assets/logo.png';
import backgroundVideo from '../assets/titan-2.mp4';


const LandingPage = () => {
  return (
    <section class="relative h-screen w-screen flex flex-col justify-center items-center overflow-hidden text-white">
      {/* Background Video */}
      <video
        autoplay
        loop
        muted
        playsinline
        class="absolute top-0 left-0 w-full h-full object-cover z-0 positioned-fixed"
      >
        {/* The `src` is correctly passed from the import */}
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div class="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content */}
      <div class="relative z-20 flex flex-col items-center text-center p-4">
        {/* Use the imported logo variable for the src attribute */}
        <img src={logo.src} alt="TitanVoice Logo" class="w-64 md:w-96 mb-8 animate-fade-in-down"/>

        <h1 class="text-4xl md:text-5xl font-bold mb-10 animate-fade-in-up" style="animation-delay: 0.3s;">
          Welcome to <br /> our new brand
        </h1>

        <div class="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style="animation-delay: 0s;">
          {/* Use standard <a> tags for navigation in Astro */}
          <a
            href="/website"
            class="bg-white text-blue-900 font-bold py-3 px-8 rounded-full text-lg transition-transform duration-300 transform hover:scale-105"
          >
            ENTER OUR WEBSITE
          </a>

          {/* Use standard <a> tags for navigation in Astro */}
          <a
            href="/promo"
            class="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full text-lg transition-transform duration-300 transform hover:scale-105 hover:bg-white/10"
          >
            FREE PHONES PROMO
          </a>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
