// src/components/Benefits.tsx

import { For } from 'solid-js';
import { benefits } from '../data/appData';

const Benefits = () => {
  return (
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-blue-800">BOUNDLESS BENEFITS</h2>
          <p class="text-gray-600 mt-2">Across all industries</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <For each={benefits}>
            {(benefit) => (
              <div class="bg-gray-50 rounded-lg shadow-lg overflow-hidden flex flex-col">
                <img src={benefit.img} alt={benefit.title} class="w-full h-56 object-cover" />
                <div class="p-6 flex flex-col flex-grow">
                  <h3 class="text-2xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                  <p class="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            )}
          </For>
        </div>
      </div>
    </section>
  );
};

export default Benefits;