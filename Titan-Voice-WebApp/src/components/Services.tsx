import { Component, createSignal, For } from 'solid-js';
import { services } from '../data/appData';
import { FaSolidChevronLeft, FaSolidChevronRight } from 'solid-icons/fa'

const Services: Component = () => {
  const [activeIndex, setActiveIndex] = createSignal(0);

  const nextService = () => setActiveIndex((prev) => (prev + 1) % services.length);
  const prevService = () => setActiveIndex((prev) => (prev - 1 + services.length) % services.length);

  const currentService = () => services[activeIndex()];

  return (
    <section id="services" class="py-20 bg-gray-100">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold text-blue-800 mb-2">POPULAR SERVICES</h2>
        <p class="max-w-3xl mx-auto mb-12">Want to enrich your telecom experience? Browse our comprehensive suite of affordable communications solutions:</p>

        <div class="relative max-w-5xl mx-auto">
          <div class="bg-white shadow-2xl rounded-lg overflow-hidden flex flex-col md:flex-row">
            <img src={currentService().img} alt={currentService().title} class="w-full md:w-1/3 object-cover h-64 md:h-auto" />
            <div class="p-8 flex-1 flex flex-col md:flex-row items-start text-left gap-8">
                <img src={currentService().icon} class="w-24 h-24" />
                <div>
                    <h3 class="text-2xl font-bold mb-4">{currentService().title}</h3>
                    <p class="mb-6">{currentService().description}</p>
                    <ul class="space-y-2 list-disc list-inside text-gray-600">
                        <For each={currentService().features}>{(feature) => <li>{feature}</li>}</For>
                    </ul>
                </div>
            </div>
          </div>

          <button onClick={prevService} class="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-200">
            <FaSolidChevronLeft class="h-6 w-6 text-blue-700"/>
          </button>
          <button onClick={nextService} class="absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-200">
            <FaSolidChevronRight class="h-6 w-6 text-blue-700"/>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;