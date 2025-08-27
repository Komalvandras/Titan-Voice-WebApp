// src/components/Mission.tsx

import {For } from 'solid-js';
import { missions} from '../data/appData';

type Props = {
  onNavClick: (e: MouseEvent, selector: string) => void;
};

const MissionCard = (props:any) => {
  return (
    <div class={`flex flex-col md:flex-row items-center gap-12 py-10 ${props.mission.imageFirst ? '' : 'md:flex-row-reverse'}`}>
      {/* Image Column */}
      <div class="w-full md:w-1/2 flex justify-center">
        <div class="relative">
          <img src={props.mission.img} alt={props.mission.title} class="max-w-xs md:max-w-sm" />
          {/* Decorative Corners */}
          <img src="https://oldsite.theteklink.com/wp-content/themes/teklink/images/icon-left.png" class="absolute top-0 left-0 -mt-4 -ml-4 w-12" />
          <img src="https://oldsite.theteklink.com/wp-content/themes/teklink/images/icon-right.png" class="absolute top-0 right-0 -mt-4 -mr-4 w-12" />
          <img src="https://oldsite.theteklink.com/wp-content/themes/teklink/images/icon-bottom1.png" class="absolute bottom-0 left-0 -mb-4 -ml-4 w-12" />
          <img src="https://oldsite.theteklink.com/wp-content/themes/teklink/images/icon-bottom2.png" class="absolute bottom-0 right-0 -mb-4 -mr-4 w-12" />
        </div>
      </div>
      {/* Text Column */}
      <div class="w-full md:w-1/2 text-center md:text-left">
        <h3 class="text-3xl font-bold text-gray-800 mb-4">{props.mission.title}</h3>
        <p class="text-gray-600 leading-relaxed mb-6">{props.mission.description}</p>
        <a 
          href={props.mission.targetHref} 
          onClick={(e) => props.onNavClick(e, props.mission.targetHref)} 
          class="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-md hover:bg-blue-700 transition-transform duration-300 transform hover:scale-105"
        >
          {props.mission.buttonText}
        </a>
      </div>
    </div>
  );
};


const Mission  = (props:any) => {
  return (
    <section id="about" class="py-20 bg-blue-100">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-blue-800">OUR MISSION</h2>
          <p class="text-gray-600 mt-2">Give the telecom world a wake-up call</p>
        </div>
        <div class="max-w-6xl mx-auto">
          <For each={missions}>
            {(mission) => <MissionCard mission={mission} onNavClick={props.onNavClick} />}
          </For>
        </div>
      </div>
    </section>
  );
};

export default Mission;