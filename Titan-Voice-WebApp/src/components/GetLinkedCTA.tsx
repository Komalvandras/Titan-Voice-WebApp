

type Props = {
  onNavClick: (e: MouseEvent, selector: string) => void;
};

const GetLinkedCTA = (props:any) => {
  const backgroundImageUrl = "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  return (
    <section 
      id='getLinked-CTA'
      class="relative py-24 text-white bg-cover bg-center" 
      style={{ "background-image": `url(${backgroundImageUrl})` }}
    >
      {/* This overlay creates the dark blue tint */}
      <div class="absolute inset-0 bg-black/40"></div>
      
      <div class="relative z-10 container mx-auto px-4 text-center">
        <h2 class="text-4xl font-bold mb-8">
          Get Linked Today
        </h2>
        
        {/* This is the newly styled button */}
        <a
          href="#contact"
          onClick={(e) => props.onNavClick(e, '#contact')}
          class="inline-block bg-white text-blue-800 font-semibold py-3 px-10 border border-white rounded-md hover:bg-transparent hover:text-white transition-colors duration-300"
        >
          TALK TO TEKLINK
        </a>
      </div>
    </section>
  );
};

export default GetLinkedCTA;