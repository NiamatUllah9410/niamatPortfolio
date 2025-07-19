import React from "react";

const Experience = () => {
  return (
    <div className="flex flex-col justify-start text-start lg:pl-[250px] md:pl-[60px] pl-[60px] mb-10">
      <div className="bg-[#008073] pl-4 md:pl-8 lg:pl-12 py-2 pr-2">
        <h1 className="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[54px] font-thin text-white">
          Experience
        </h1>
      </div>
      <div className="border mx-auto mt-16 shadow-lg w-full max-w-[900px] bg-white">
        <div className="flex flex-col md:flex-row justify-between px-6 md:px-12 py-6">
          <span className="text-[20px] md:text-[24px] font-semibold">
            <span className="text-[#008073]">Devbees Pvt Ltd</span> |
            Rawalpindi, Pakistan
          </span>
          <span className="text-[18px] md:text-[20px] font-semibold text-red-400"></span>
        </div>
        <hr className="mx-4" />
        <p className="px-6 md:px-12 py-4 text-[16px] md:text-[20px]">
          During my job at Devbees, I worked as a frontend web developer on
          various projects, utilizing React to create efficient web solutions.
          My focus was on frontend technologies and design, contributing to
          delivering high-quality results. I collaborated with the team to
          implement responsive and visually appealing user interfaces, ensuring
          an optimal user experience. This role allowed me to hone my skills in
          React and other frontend technologies while producing impactful and
          polished web applications.
        </p>
        <div className="px-6 md:px-12 py-6">
          <h2 className="text-[#008073] font-thin text-[20px] md:text-[24px]">
            Key Values
          </h2>
        </div>
        <div className="px-6 md:px-12 text-[16px] md:text-[20px] mb-6 flex flex-col gap-2 pb-6">
          <li>
            Developed and maintained dynamic, responsive web interfaces using
            React.js, boosting UI performance and UX.
          </li>
          <li>
            Converted Figma designs into responsive, pixel-perfect websites with
            optimized SVGs, ensuring smooth transitions from design to
            development.
          </li>
          <li>
            Integrated RESTful APIs with frontend components, ensuring smooth
            data flow and async handling via Axios/Fetch.
          </li>
          <li>
            Utilized React Hooks (useState, useEffect, useContext) to manage
            component logic and application state.
          </li>
          <li>
            Performed efficient troubleshooting and debugging of complex
            software applications.
          </li>
          <li>
            Implemented reusable UI components using Material-UI/TailwindCSS to
            speed up development and maintain design consistency.
          </li>
          <li>
            Implemented reusable UI components using Material-UI/TailwindCSS to
            speed up development and maintain design consistency.
          </li>
          <li>
            Helped design and implement user-friendly, consistent interfaces
            across devices and browsers
          </li>
          <li>
            Used Git for version control to manage code repository and track
            changes in collaborative projects.
          </li>
          <li>
            Communicated effectively with team members to coordinate tasks,
            share progress updates, and collaborate on project goals
          </li>
          <li>
            Demonstrated a willingness to learn and adapt to new technologies
            and methodologies in a fast-paced development environment
          </li>
        </div>
      </div>
    </div>
  );
};

export default Experience;
