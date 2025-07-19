import React, { useState, useEffect } from "react";
import HeroImg from '../assets/images/intro-hero-image.png' 

export default function HeroSection() {
    const skillsUpdate = [
        "React js",
        "Front-end Developer",
        "Web Developer",
        "JavaScript"
    ];

    const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentSkillIndex(prevIndex => (prevIndex + 1) % skillsUpdate.length);
        }, 1800); 

        return () => clearInterval(intervalId); 
    }, [skillsUpdate.length]);

    return (
        
        <div className="pb-12 lg:pl-[250px] md:pl-[60px] pl-[60px]">
            <div className="flex flex-col text-center justify-center pt-3 lg:hidden">
                <h1 className="text-[#008073] text-2xl font-bold pt-2">Niamat Ullah Khan</h1>
                <h4 className="text-xl pb-3">Frontend Developer</h4>
                <hr className="text-xl opacity-100"/>
            </div>
            <div>
                <h1 className="px-4 md:px-16 lg:px-20 pt-4 md:pt-16 lg:pt-20 text-[28px] sm:text-[36px] md:text-[44px] lg:text-[56px] font-semibold text-center md:text-start">
                I am a <span className="text-[#008073] font-bold">{"{ "}{skillsUpdate[currentSkillIndex]}{" }"}</span> <br></br> having 1+ years of experience
                </h1>
            </div>
            <div className="flex flex-col md:flex-row justify-between">
                <div className="flex flex-col">
                    <div>
                        <h4 className="px-4 md:px-16 lg:px-20 text-[16px] md:text-[24px] lg:text-[30px] text-center md:text-start font-semibold text-[#008073] pt-6 pb-3">JavaScript-React-HTML-CSS</h4>
                    </div>
                    <div className="px-4 md:px-16 lg:px-20">
                        <hr></hr>
                    </div>
                    <div>
                        <p className="px-4 md:px-16 lg:px-20 text-[16px] md:text-[20px] md:font-bold py-5 pt-7 text-center md:text-start">With over 1+ years of experience in designing and <br/>building responsive web Sites.</p>
                    </div>
                    <div className="flex justify-center md:justify-start py-6 px-4 md:px-16 lg:px-20">
                        <button className="flex justify-center py-3 px-12 md:py-4 md:px-16 text-[16px] md:text-[18px] lg:text-[22px] text-white font-semibold items-center bg-[#008073]">
                            Schedule a Call
                        </button>
                    </div>
                </div>
                <div>
                    <div className="pl-2 pr-4 md:pr-16">
                        <img className="w-[550px]" src={HeroImg} alt="hero image" />
                    </div>
                    <div className="flex justify-between py-2 px-8 md:px-12 lg:px-20">
                        <div>
                            <p className="font-semibold md:font-bold text-[20] md:text-[24px] text-center">+10</p>
                            <p className="font-semibold text-[20px] md:text-[24px]">Web Sites</p>
                        </div>
                        <div>
                            <p className="font-semibold md:font-bold text-[20] md:text-[24px] text-center">+2</p>
                            <p className="font-semibold text-[20px] md:text-[24px]">Experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

