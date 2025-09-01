// src/components/Features.tsx



const Features = () => {
  const featuresList = [
    "Easy <strong>call transfer</strong> allows you to direct active calls from the office to your cell",
    "Procure, manage and route as many <strong>DID numbers</strong> as necessary",
    "<strong>Custom caller ID control</strong> lets you place calls as if you were in the office",
    "Utilize your smartphone for <strong>advanced tracking</strong> and <strong>monitoring</strong>",
    "Initiate <strong>Busy Lamp Field</strong> to keep personnel informed at all times",
    "Organize and facilitate special <strong>group pickup</strong> for incoming calls",
    "Enjoy <strong>customized routing</strong> and make easy alterations via self-service",
    "Exercise complete control over<strong> call blocking, transfer</strong> and <strong>transcription</strong>",
    "Protect against fraud with <strong>call screening</strong> and <strong>authentication</strong>",
    "Reduce costs by using our per-minute or monthly <strong>calling card plans</strong>",
  ];

  return (
    <section id="features" class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-blue-800">ADVANCED FEATURES</h2>
          <p class="text-gray-600 mt-2 max-w-3xl mx-auto">Whether you opt for in-office PBX or TitanVoice’s groundbreaking cell services, our products boast powerful capabilities perfectly suited to meet your diverse business needs</p>
    </div>
        <div class="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
          <div class="w-full md:w-1/2">
            <img 
              src="https://oldsite.theteklink.com/wp-content/uploads/2017/10/phone1.png"
              alt="Office Phone"
              class="mx-auto"
            />
          </div>
          <div class="w-full md:w-1/2">
            <ul class="space-y-4">
              {featuresList.map(feature => (
                <li class="flex items-start">
                  <span class="text-blue-600 mr-3 mt-1">✔</span>
                  <span class="text-gray-700" innerHTML={feature}></span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;