import React from 'react';
import Html from '../assets/images/html5.png';
import JsxReact from "../assets/images/react.png";
import Css from '../assets/images/css3.png';
import Sass from '../assets/images/sass.png';
import Bootstrap from '../assets/images/bootstrap.png';
import Tailwind from '../assets/images/tailwind-css-icon.png';
import Materialize from '../assets/images/materialize.png';
import JavaScript from '../assets/images/javascript.png';
import Github from '../assets/images/github (1).png';
import WordPress from '../assets/images/wordpress.png';
import Shopify from "../assets/images/shopify.png";
import Figma from '../assets/images/figma.jpg';


// Reusable SkillsCard component
function SkillsCard({ image, name }) {
  return (
    <div className="flex flex-col items-center p-4 rounded">
        <img src={image} alt={name} className="w-36 h-36 mb-2" />
        <h4 className="text-lg font-semibold py-4">{name}</h4>
    </div>
  );
}

// Main Skills component
export default function Skills() {
    const HtmlItems = [
        { image: Html, name: "HTML5" },
        { image: JsxReact, name: "JSX" },
        { image: JsxReact, name: "tsx" }
    ];

    const StyleItems = [
        { image: Css, name: "CSS3" },
        { image: Tailwind, name: "Tailwind CSS" },
        { image: Bootstrap, name: "Bootstrap CSS" },
        { image: Sass, name: "Sass" }
    ];

    const JavaScriptItems = [
        { image: JavaScript, name: "JavaScript" },
        { image: JsxReact, name: "React" }
    ];

    const BuildTools = [
        { image: Github, name: "Github" }
    ];

    const Cms = [
        { image: WordPress, name: "WordPress" },
        { image: Shopify, name: "Shopify" }
    ];

    const Design = [
        { image: Figma, name: "Figma" },
    ];

    return (
        <div className="flex flex-col justify-start text-start lg:pl-[250px] md:pl-[60px] pl-[60px] pt-16">
            <div className="bg-[#008073] pl-4 md:pl-8 lg:pl-12 py-2 pr-2">
                <h1 className="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[54px] font-thin text-white">Skills</h1>
            </div>
            <div className="pl-4 md:pl-8 lg:pl-12 py-2 md:pr-8 lg:pr-12">

                {/* HTML */}
                <div className="mt-8 shadow-lg px-10 py-6">
                    <h2 className="text-[24px] md:text-[28px] lg:text-[32px] py-4">HTML</h2>
                    <hr className="py-6"/>
                    <div className="flex flex-wrap gap-20 py-4">
                        {HtmlItems.map((item, index) => (
                            <SkillsCard key={index} image={item.image} name={item.name} />
                        ))}
                    </div>
                </div>

                {/* Styling */}
                <div className="mt-12 shadow-lg px-10 py-6">
                    <h2 className="text-[24px] md:text-[28px] lg:text-[32px] mt-12 py-4">Styling</h2>
                    <hr className="py-6"/>
                    <div className="flex flex-wrap gap-20">
                        {StyleItems.map((item, index) => (
                            <SkillsCard key={index} image={item.image} name={item.name} />
                        ))}
                    </div>
                </div>

                {/* JavaScript */}
                <div className="mt-12 shadow-lg px-10 py-6">
                    <h2 className="text-[24px] md:text-[28px] lg:text-[32px] mt-12 py-4">JavaScript</h2>
                    <hr className="py-6"/>
                    <div className="flex flex-wrap gap-20">
                        {JavaScriptItems.map((item, index) => (
                            <SkillsCard key={index} image={item.image} name={item.name}/>
                        ))}
                    </div>
                </div>

                {/* Build Tools */}
                <div className="mt-12 shadow-lg px-10 py-6">
                    <h2 className="text-[24px] md:text-[28px] lg:text-[32px] mt-12 py-4">Build Tools</h2>
                    <hr className="py-6"/>
                    <div className="flex flex-wrap gap-20">
                        {BuildTools.map((item, index) => (
                            <SkillsCard key={index} image={item.image} name={item.name}/>
                        ))}
                    </div>
                </div>

                {/* Design */}
                <div className="mt-12 shadow-lg px-10 py-6">
                    <h2 className="text-[24px] md:text-[28px] lg:text-[32px] mt-12 py-4">Design</h2>
                    <hr className="py-6"/>
                    <div className="flex flex-wrap gap-20">
                        {Design.map((item, index) => (
                            <SkillsCard key={index} image={item.image} name={item.name}/>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}

