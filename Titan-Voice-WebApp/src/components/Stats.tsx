import { For } from 'solid-js';
import { stats } from '../data/appData';

const Stats = () => {
  return (
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-10 text-gray-800">America’s Most Trusted Telecom</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <For each={stats}>{(stat) => (
            <figure class="group relative overflow-hidden rounded-lg shadow-lg">
              <img src={stat.img} alt={stat.label} class="w-full h-48 object-cover"/>
              <div class="absolute inset-0 bg-blue-900/80 flex flex-col justify-center items-center text-center text-white p-4 ">
                <h4 class="text-2xl font-bold">{stat.value}</h4>
                <p class="text-lg font-bold uppercase tracking-wider">{stat.label}</p>
              </div>
            </figure>
          )}</For>
        </div>
      </div>
    </section>
  );
};

export default Stats;