// src/components/LandingPage.tsx

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
        class="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div class="relative z-20 flex flex-col items-center text-center p-4">
        <img src={logo.src} alt="TitanVoice Logo" class="w-64 md:w-96 mb-8 animate-fade-in-down"/>

        <h1 class="text-4xl md:text-5xl font-bold mb-10 animate-fade-in-up" style="animation-delay: 0.3s;">
          Welcome to <br /> our new brand
        </h1>

        <div class="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style="animation-delay: 0s;">
          {/* --- UPDATED BUTTON --- */}
          <a
            href="/website"
            // Increased padding and text size by another ~25% for mobile
            class="bg-titan-blue text-white font-bold py-8 px-16 text-4xl sm:py-5 sm:px-12 sm:text-2xl rounded-full transition-transform duration-300 transform hover:scale-105"
          >
            ENTER OUR WEBSITE
          </a>

          {/* --- UPDATED BUTTON --- */}
          <a
            href="/promo"
            class="bg-titan-blue text-white font-bold py-8 px-16 text-4xl sm:py-5 sm:px-12 sm:text-2xl rounded-full transition-transform duration-300 transform hover:scale-105"
          >
            CURRENT PROMOTIONS
          </a>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;