
import { FiMoreVertical } from 'react-icons/fi';
import Selora from "../assets/images/sollera.png"
import HOP from "../assets/images/HOP.JPG"
import NuvionImg from "../assets/images/nuvionImg.JPG"  
import Nexfolio from "../assets/images/nexfolio.JPG"
import EdenFunding from "../assets/images/edenFunding.png"
import VanKessel from "../assets/images/vanKessel.png"
import Cobblestone from "../assets/images/cobblestone.png"
import PdaPerform from "../assets/images/pdadriving.png"
import WayBackFlow from "../assets/images/1waybackflow.png"
import CutzClub from "../assets/images/image.png"
function ProjectCard({ img, title, link, subtitle, discr }) {
  return (
    <div className=" bg-white rounded-lg shadow-md overflow-hidden m-4">
      <img className="w-full h-120 object-cover" src={img} alt={title} /> 
      <div className="p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p className='text-xl'>{subtitle}</p>
          <FiMoreVertical size={24} className="cursor-pointer text-gray-500 hover:text-gray-700" />
        </div>
        <p className="mt-4 text-gray-600">{discr}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-blue-600 hover:underline text-xl"
          >
            View Project
          </a>
        )}
      </div>
    </div>
  );
}

// Main component
export default function Projects() {
  const projects = [
    {
      img: HOP,
      title: 'HOP (House of Pakistan)',
      discr: 'House of Pakistan is a hospitality & cultural platform (Islamabad-based) that helps users discover, connect, and experience Pakistani culture, SMEs, travel destinations, cuisine, fashion, and entrepreneurship Worked on dynamic content integration, using backend logic to fetch and format data for cultural, SME, and learning-focused pages',
      link: "https://houseofpakistan.com/ ",
    },
    {
      img: Selora,
      title: "Solera",
      discr: 'Developed Solera, a finance web app with responsive card layouts, video hero section, and animated logo slider. Built using React and Tailwind CSS with Framer Motion for smooth transitions. Focused on mobile-first design, custom UI elements, and performance optimization.',
      link: "https://solerareact.netlify.app/ ",
    },
    {
      img: NuvionImg,
      title: "Nuvion",
      discr: 'Contributed to the front-end of Nuvion, a one-page landing site for a DeFi toolset. Built responsive layouts and UI components using HTML5, CSS3, and JavaScript, integrating sections like wallet insights, contract summaries, and live alerts with purposeful design.',
      link: "https://nuviondev.netlify.app/ ",
    },
    {
      img: Nexfolio,
      title: "Nexfolio",
  discr: 'Nexfolio helps emerging professionals showcase their talent through trial-based services. Clients discover new talent, and providers get the chance to prove their value and grow. Nexfolio is a launchpad for building real trust through real work—whether you’re a new service provider or a client looking for fresh talent. Technology used: React, HTML, CSS.',
  link: "https://nexfolo.netlify.app/",
    },
      {
      img: WayBackFlow,
      link: "https://1waybackflow.org/",
      title: '1 Way Backflow ',
      discr: 'Developed a responsive business website using HTML5, CSS3, Bootstrap 5, and JavaScript, featuring service listings, pricing tables, and a booking form. Integrated Google Maps and social media links for enhanced engagement. Designed interactive elements like a testimonial carousel (Owl Carousel) and animated sections (Wow.js). Ensured mobile-first responsiveness and clean UI/UX for a professional plumbing service. Demonstrates ability to create functional, industry-specific web solutions.',
    },
     {
      img: PdaPerform,
      link: "https://pdadriving.co.uk/",
      title: 'PDA-Perform',
      discr: 'As a Front-End Developer, I designed and built a responsive website for PDA-Perform Driving Academy using HTML5, CSS3, Bootstrap 5, and JavaScript. The site features a modern UI with a dynamic carousel, interactive FAQ accordions, testimonial sliders (Owl Carousel), and embedded Google Maps for location visibility. I integrated a WhatsApp floating button for instant customer support and ensured cross-device compatibility through mobile-first design. The project demonstrates my ability to create user-friendly, visually appealing websites with optimized performance and seamless navigation.',
    },
     {
      img: CutzClub,
      link: "https://cutzclubshop.netlify.app/",
      title: 'CutzClub',
      discr: 'I developed the front‑end of CutzClub, a modern barbershop platform, creating a responsive one‑page site with HTML5, CSS3, and JavaScript. The platform lets users browse barbers, choose flexible plans, and book appointments easily. I focused on accessibility, performance, and clean UI design to deliver a seamless and engaging user experience.',
    },
    {
      img: VanKessel,
      title: 'VAN KESSEL',
      discr: 'Developed a responsive, multilingual (Dutch/English) website for VAN KESSEL using HTML5, CSS3, Bootstrap 5, and JavaScript. The site features interactive UI elements like mega dropdowns, tab navigation, animated forms, and Owl Carousel sliders. It was optimized for mobile-first design with WOW.js scroll animations and built following SEO best practices. Key features include a product filtering catalog, gallery tabs, testimonial slider, and newsletter subscription.',
    },
    {
      img: Cobblestone,
      title: 'Cobblestone',
      discr: 'Developed Cobblestone, multilingual this website for Cobblestone using HTML5, CSS3, Bootstrap 5, and JavaScript. The site features interactive UI elements like mega dropdowns, tab navigation, animated forms, and Owl Carousel sliders. It was optimized for mobile-first design with WOW.js scroll animations and built following SEO best practices. Key features include a product filtering catalog, gallery tabs, testimonial slider, and newsletter subscription.',
    },
  
   
  ];

  return (
    <div className="flex flex-col justify-start text-start lg:pl-[250px] md:pl-[60px] pl-[60px] mb-10">
      <div className="bg-[#008073] pl-4 md:pl-8 lg:pl-12 py-2 pr-2">
        <h1 className="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[54px] font-thin text-white">Projects</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center justify-items-center mt-8 mx-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            img={project.img}
            title={project.title}
            link={project.link}
            discr={project.discr}
          />
        ))}
      </div>
    </div>
  );
}

