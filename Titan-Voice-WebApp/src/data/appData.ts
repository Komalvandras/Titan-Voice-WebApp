export type NavLink = { name: string; href: string };
export type Stat = { img: string; value: string; label: string };
export type Service = {
  title: string;
  img: string;
  icon: string;
  description: string;
  features: string[];
};
export type Benefit = {
  img: string;
  title: string;
  description: string;
};
export type Mission = {
  img: string;
  title: string;
  description: string;
  buttonText: string;
  targetHref: string;
  imageFirst: boolean;
};

// --- Application Data ---

export const navLinks: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Features', href: '#features' },
  { name: 'Why TitanVoice', href: '#getLinked-CTA' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export const stats: Stat[] = [
  { img: 'https://oldsite.theteklink.com/wp-content/uploads/2017/10/s1.jpg', value: '20 years', label: 'COMMUNICATIONS EXPERIENCE' },
  { img: 'https://oldsite.theteklink.com/wp-content/uploads/2017/10/s2.jpg', value: '24/7', label: 'LIVE TECH SUPPORT' },
  { img: 'https://oldsite.theteklink.com/wp-content/uploads/2017/10/shutterstock_197549837cropped.jpg', value: '1,000,000+', label: 'ACTIVE DAILY USERS' },
  { img: 'https://oldsite.theteklink.com/wp-content/uploads/2017/10/s4.jpg', value: '99.99%', label: 'UPTIME GUARANTEED' },
];

export const services: Service[] = [
  {
    title: 'Hosted PBX',
    img: 'https://oldsite.theteklink.com/wp-content/uploads/2017/10/Hosted-PBX.jpg',
    icon: 'https://oldsite.theteklink.com/wp-content/uploads/2017/10/s-icon3.jpg',
    description: "Streamline communications with TitanVoice’s powerful virtual PBX systems. No matter where you work, state-of-the-art cloudbased solutions support your company’s productivity, mobility and scalability.",
    features: ['High definition voice', 'Crystal clear conferencing', 'Fast, easy setup', '24/7 customer support', '99.99% uptime', 'Superior security'],
  },
  {
    title: 'SIP Trunking',
    img: 'https://oldsite.theteklink.com/wp-content/uploads/2017/10/SIP-trunking.jpg',
    icon: 'https://oldsite.theteklink.com/wp-content/uploads/2017/10/s-icon2.jpg',
    description: 'Modernize your business communications by migrating to the cloud. TitanVoice transforms your equipment via virtual connection, saving you countless dollars while unifying all your voice, data and internet applications.',
    features: ['Carrier-grade performance', 'Integrated voice and data', 'Fast, easy installation', 'Redundant servers', 'Fraud protection', 'Substantial savings'],
  },
  {
    title: 'Fax over IP',
    img: 'https://oldsite.theteklink.com/wp-content/uploads/2017/10/services1.jpg',
    icon: 'https://oldsite.theteklink.com/wp-content/uploads/2017/10/s-icon1.png',
    description: 'Manage communications across multiple locations with conveniently integrated IP faxing, which cuts down on longdistance charges and eliminates the need for traditional fax boards.',
    features: ['Fast, reliable telecopying', 'Cloud-based convenience', 'Remote capability', 'Advanced management', 'Solid security', 'Tremendous savings'],
  },
];

export const benefits: Benefit[] = [
  {
    img: 'https://oldsite.theteklink.com/wp-content/uploads/2017/10/shutterstock_284224388cropped.jpg',
    title: 'Service-based Businesses',
    description: 'Provide clients, customers and personnel with dependable connectivity and support solutions regardless of locale. TitanVoice modernizes your sales and service communications while empowering everyone with our exceptionally intuitive online platform.',
  },
  {
    img: 'https://oldsite.theteklink.com/wp-content/uploads/2017/10/b2.jpg',
    title: 'Inventory-based Businesses',
    description: 'Keep meticulous track of every call, fax and figure across multiple locations thanks to TitanVoice’s end-to-end phone and software solutions. Warehouses and other manufacturing enterprises can route calls, monitor inventory and manage other essentials without worry.',
  },
  {
    img: 'https://oldsite.theteklink.com/wp-content/uploads/2017/10/b3.jpg',
    title: 'Official Establishments',
    description: 'Whether you’re running a governmental, religious or educational institution, TitanVoice has the telecom tools to keep all parties connected. Stay on task and on budget with internal and external systems specially tailored to meet your unique operational needs.',
  }
];

export const missions: Mission[] = [
  {
    img: 'https://oldsite.theteklink.com/wp-content/uploads/platform.png',
    title: 'A More Powerful Platform',
    description: 'One of the most popular products in the United States, our state-of-the-art software is always evolving to meet the needs of modern business. We’re committed to providing the best in remote access, live monitoring, set forwarding, data logging and settings control.',
    buttonText: 'GET ON LINE',
    targetHref: '#contact',
    imageFirst: true
  },
  {
    img: 'https://oldsite.theteklink.com/wp-content/uploads/support.png',
    title: 'Superior Customer Support',
    description: 'Our experienced technicians provide customer care second to none, establishing a personal connection that other providers talk about but fail to deliver. Expect our reps to know you by first name, and feel free to call them 24/7 for any problem whatsoever.',
    buttonText: 'CHAT NOW',
    targetHref: '#contact',
    imageFirst: false
  },
  {
    img: 'https://oldsite.theteklink.com/wp-content/uploads/clock.png',
    title: 'Unrivaled uptime',
    description: 'With continuous monitoring, expert technical support and powerful redundancy, TitanVoice is proud to promise 99.99% guaranteed uptime. Our near-instant troubleshooting creates a chain reaction, boosting your productivity and improving your bottom line.',
    buttonText: 'START SAVING',
    targetHref: '#contact',
    imageFirst: true
  }
];