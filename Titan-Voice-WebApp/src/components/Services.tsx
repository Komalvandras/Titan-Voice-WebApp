import {  createSignal, For } from 'solid-js';
import {services } from '../data/appData';
import { FaSolidChevronLeft, FaSolidChevronRight } from 'solid-icons/fa';

const Services = () => {
  const [activeIndex, setActiveIndex] = createSignal(0);

  const nextService = () => setActiveIndex((prev) => (prev + 1) % services.length);
  const prevService = () => setActiveIndex((prev) => (prev - 1 + services.length) % services.length);

  // Function to determine the transform style for each card
  const getTransformStyle = (index: number) => {
    const offset = index - activeIndex();
    if (offset === 0) {
      return 'transform: translateX(0) scale(1); opacity: 1; z-index: 2;';
    }
    const sign = Math.sign(offset);
    const scale = 'scale(0.8)';
    const rotation = `rotateY(${-sign * 35}deg)`;
    const translation = `translateX(${sign * 40}%)`;
    return `transform: ${translation} ${rotation} ${scale}; opacity: 1.5; z-index: 1;`;
  };

  return (
    <section id="services" class="py-24 bg-slate-100 overflow-hidden">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold text-titan-blue mb-2">POPULAR SERVICES</h2>
        <p class="max-w-3xl mx-auto mb-16">
          Want to enrich your telecom experience? Browse our comprehensive suite of affordable communications solutions:
        </p>

        <div class="relative h-[550px]" style="perspective: 1200px;">
          {/* Slides Container */}
          <div
            class="relative w-full h-full"
            style="transform-style: preserve-3d;"
          >
            <For each={services}>
              {(service, index) => (
                <div
                  class="absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out"
                  style={getTransformStyle(index())}
                  onClick={() => setActiveIndex(index())}
                >
                  <div class="w-4/5 md:w-3/5 h-full mx-auto cursor-pointer transition-transform duration-300 hover:scale-[1.03]">
                    <div class="bg-white h-full shadow-2xl rounded-lg overflow-hidden flex flex-col md:flex-row">
                      <img src={service.img} alt={service.title} class="w-full md:w-1/3 object-cover" />
                      <div class="p-8 flex items-start text-left gap-6">
                        <img src={service.icon} class="w-20 h-20" />
                        <div>
                          <h3 class="text-2xl font-bold mb-4">{service.title}</h3>
                          <p class="mb-6 text-gray-600">{service.description}</p>
                          <ul class="space-y-2 list-disc list-inside text-gray-600">
                            <For each={service.features}>{(feature) => <li>{feature}</li>}</For>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </For>
          </div>

          {/* Navigation Arrows */}
          <button onClick={prevService} class="absolute top-1/2 -translate-y-1/2 left-0 md:-left-8 text-black z-20">
            <FaSolidChevronLeft size={48} class="opacity-50 hover:opacity-100 transition-opacity" />
          </button>
          <button onClick={nextService} class="absolute top-1/2 -translate-y-1/2 right-0 md:-right-8 text-black z-20">
            <FaSolidChevronRight size={48} class="opacity-50 hover:opacity-100 transition-opacity" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;