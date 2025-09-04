import businessSMSImage from '../assets/titan-3.png';
import healthbasedImage from '../assets/titan-10.png';
import contactCenterImage from '../assets/titan-11.jpg';
import hostedPBXImage from '../assets/titan-12.png';
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
  { img: 'https://oldsite.theteklink.com/wp-content/uploads/2017/10/s2.jpg', value: '24/7', label: 'LIVE MONITORING' },
  { img: 'https://oldsite.theteklink.com/wp-content/uploads/2017/10/shutterstock_197549837cropped.jpg', value: '1,000,000+', label: 'ACTIVE DAILY USERS' },
  { img: 'https://oldsite.theteklink.com/wp-content/uploads/2017/10/s4.jpg', value: '99.99%', label: 'UPTIME GUARANTEED' },
];

export const services: Service[] = [
  {
    title: 'Hosted PBX',
    img: hostedPBXImage.src,
    icon: 'https://oldsite.theteklink.com/wp-content/uploads/2017/10/s-icon3.jpg',
    description: "Streamline communications with TitanVoice’s powerful virtual PBX systems. No matter where you work, state-of-the-art cloudbased solutions support your company’s productivity, mobility and scalability.",
    features: ['High definition voice', 'Crystal clear conferencing', 'Fast, easy setup', '24/7 customer support', '99.99% uptime', 'Superior security'],
  },
  {
    title: 'Contact Center',
    img: contactCenterImage.src,
    icon: 'https://oldsite.theteklink.com/wp-content/uploads/2017/10/s-icon2.jpg',
    description: 'Our Contact Center solution includes voice-only and omnichannel customer experiences, giving contact center agents voice, SMS texting, chat, and email as available true omnichannel contact center.  It allows you to deliver a high-quality inbound and outbound communications experience for your customers and employees.',
    features: ['Rich Agent Experience', 'Contact History Display', 'Call Transcription and summarization', 'Top detection', 'Sentiment analysis', 'Skills-based routing'],
  },
  {
    title: 'Business SMS',
    img: businessSMSImage.src,
    icon: 'https://oldsite.theteklink.com/wp-content/uploads/2017/10/s-icon1.png',
    description: 'The TitanVoice  is the future of marketing and customer service, allowing our clients to reach their audience more effectively and reliably. The TitanVoice solution provies business grade compliant SMS texting and Business MMS with the same back-end ecosystem infrastructure that supports our advanced Message blasts: Reach a large number of users with a single message',
    features: ['Reliable: Deliver Messages ', 'Reminders: automated reminder messages', 'Drip campaigns: automated time communications', 'Conversation history: See full history of your text threads', 'MMS support: Send and receive MMS messages ', 'Tremendous savings'],
  },
];

export const benefits: Benefit[] = [
  {
    img: 'https://oldsite.theteklink.com/wp-content/uploads/2017/10/b2.jpg',
    title: 'Inventory-based Businesses',
    description: 'Provide clients, customers and personnel with dependable connectivity and support solutions regardless of their location. TitanVoice modernizes your sales and service communications while empowering everyone with our exceptionally intuitive online platform.',
  },
  {
    img: healthbasedImage.src,
    title: 'Health-Based Businesses',
    description: 'What if you could transform your traditional phone system to communicate with patients using a unified communications platform enabling you to talk, text (SMS/MMS), chat, or email as one seamless conversation while ensuring HIPAA compliance, simplifying maintenance, and reducing costs?',
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
    description: 'Our solution is built on the most power platform in the industry which allows scalable Unified Communications (UCaaS), Contact Center (CCaaS) and SMS/MMS services ideally suited for Small/Medium Business',
    buttonText: 'GET ON LINE',
    targetHref: '#contact',
    imageFirst: true
  },
  {
    img: 'https://oldsite.theteklink.com/wp-content/uploads/support.png',
    title: 'Concierge-Level Support Team',
    description: 'Our customer care team is here for you—always ready to listen, understand, and connect in ways others can’t. We build genuine, one-on-one relationships that make working together seamless',
    buttonText: 'CHAT NOW',
    targetHref: '#contact',
    imageFirst: false
  },
  {
    img: 'https://oldsite.theteklink.com/wp-content/uploads/clock.png',
    title: 'Unrivaled uptime',
    description: 'TitanVoice ensures 99.99% uptime through proactive monitoring, expert support, and built-in redundancy. Our rapid troubleshooting sparks a ripple effect—minimizing downtime, maximizing efficiency, and driving stronger results for your business.',
    buttonText: 'START SAVING',
    targetHref: '#contact',
    imageFirst: true
  }
];