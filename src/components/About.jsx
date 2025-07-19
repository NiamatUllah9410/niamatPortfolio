import React from "react";

export default function About() {
  return (
    <div className="flex flex-col justify-start text-start lg:pl-[250px] md:pl-[60px] pl-[60px]">
      <div className="bg-[#008073] pl-4 md:pl-8 lg:pl-12 py-2 pr-2">
        <h1 className="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[54px] font-thin text-white">
          About
        </h1>
      </div>
      <div className="pl-4 md:pl-8 lg:pl-12 py-2 md:pr-8 lg:pr-12">
        <h4 className="border-l-4 border-[#795548] text-[24px] md:text-[28px] lg:text-[32px] px-5 my-10 text-[#795548]">
          Mastering Frontend Development: Building Stunning User Interfaces
        </h4>
        <p className="leading-relaxed text-[16px] md:text-[20px] lg:text-[24px] word-spacing-wider text-[#333333]">
          As a Frontend Web Developer, I specialize in designing and building
          intuitive user interfaces and robust web applications. My expertise
          includes React.js for developing dynamic, component-based applications
          and JavaScript to enhance interactivity. I excel in crafting clean,
          responsive layouts with HTML and CSS, utilizing Tailwind CSS and
          Bootstrap for efficient, modern styling. Additionally, I integrate
          Material UI to implement contemporary design elements. I am highly
          proficient in React.js, enabling me to create and customize versatile,
          high-performance websites. I also manage code effectively using
          GitHub, ensuring smooth version control and collaboration. My focus is
          on delivering responsive, interactive, and visually compelling web
          experiences that align with user needs and industry standards.
        </p>
      </div>
    </div>
  );
}
