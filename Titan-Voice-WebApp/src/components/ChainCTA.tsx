

type Props = {
  onNavClick: (e: MouseEvent, selector: string) => void;
};

const ChainCTA = (props:any) => {
  const backgroundImageUrl = "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const title = "Your Chain Is As Strong As Your <strong>Strongest Link</strong>";
  const buttonText = "TEAM UP TODAY";
  const targetHref = "#contact";

  return (
    <section
      id='chain-CTA'
      class="relative py-24 text-white bg-cover bg-center" 
      style={{ "background-image": `url(${backgroundImageUrl})` }}
    > 

      {/* Dark overlay for text readability */}
      <div class="absolute inset-0 bg-black/40"></div> 

      
      <div class="relative z-10 container mx-auto px-4 text-center">
        <h3 class="text-4xl font-bold mb-6" innerHTML={title}></h3>
        <a
          href={targetHref}
          onClick={(e) => props.onNavClick(e, targetHref)}
          class="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-md hover:bg-blue-700 transition-transform duration-300 transform hover:scale-105"
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
};

export default ChainCTA;