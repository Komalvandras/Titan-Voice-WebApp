// src/components/ScrollToTopButton.tsx

import { createSignal, onMount, Show } from 'solid-js';
import { FaSolidAngleUp } from 'solid-icons/fa';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = createSignal(false);

  const handleScroll = () => {
    // Show button when scrolled more than 500px
    setIsVisible(window.scrollY > 500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  onMount(() => {
    window.addEventListener('scroll', handleScroll);
  });

  return (
    <Show when={isVisible()}>
      <button
        onClick={scrollToTop}
        class="fixed bottom-6 right-6 bg-blue-700 hover:bg-blue-800 text-white p-4 rounded-full shadow-lg transition-opacity duration-300 z-50"
        aria-label="Scroll to top"
      >
        <FaSolidAngleUp size={24} />
      </button>
    </Show>
  );
};

export default ScrollToTopButton;