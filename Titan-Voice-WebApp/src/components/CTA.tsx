// src/components/CTA.tsx

import { Component } from 'solid-js';

type Props = {
  title: string;
  buttonText: string;
  targetHref: string;
  backgroundImageUrl: string;
  onNavClick: (e: MouseEvent, selector: string) => void;
};

const CTA: Component<Props> = (props) => {
  return (
    <section class="py-24 text-white bg-cover bg-center bg-fixed" style={{ "background-image": `url(${props.backgroundImageUrl})` }}>
      <div class="absolute inset-0 bg-black/60"></div>
      <div class="relative z-10">
        <div class="container mx-auto px-4 text-center">
          <h3 class="text-4xl font-bold mb-6" innerHTML={props.title}></h3>
          <a
            href={props.targetHref}
            onClick={(e) => props.onNavClick(e, props.targetHref)}
            class="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-md hover:bg-blue-700 transition-transform duration-300 transform hover:scale-105"
          >
            {props.buttonText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;