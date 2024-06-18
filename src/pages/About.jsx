import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import 'tailwindcss/tailwind.css';

const About = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 1000 }
  });

  return (
    <div className=' '>
      <div className="about-container bg-[#efece1] min-h-screen flex items-center justify-center py-10">
      <div className="about-content w-full max-w-5xl p-4">
        <animated.div style={fadeIn} className="text-content p-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-center md:text-left pb-5 font-extrabold tracking-tight text-[#1A4D2E]">
            Experience Excellence in Event Planning
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-center md:text-left pb-6 font-semibold text-[#4F6F52]">
            At Evento, we believe every occasion is unique and deserves to be celebrated with style and precision. Our expert team is dedicated to transforming your vision into a flawless event, ensuring every detail is meticulously planned and executed. From corporate gatherings to personal milestones, we bring your dreams to life.
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-center md:text-left pb-4 font-semibold text-[#1A4D2E]">
            Why Choose Evento?
          </h2>
          <ul className="list-disc pl-6 text-lg sm:text-xl md:text-2xl text-[#4F6F52]">
            <li className="pb-2 hover:bg-[#d3e8d0] p-2 rounded-lg transition-all duration-300 ease-in-out">
              <span className="font-bold text-[#1A4D2E]">Unparalleled Expertise:</span> Our seasoned professionals bring years of experience to the table, ensuring top-notch service and seamless execution.
            </li>
            <li className="pb-2 hover:bg-[#d3e8d0] p-2 rounded-lg transition-all duration-300 ease-in-out">
              <span className="font-bold text-[#1A4D2E]">Customized Solutions:</span> We tailor our services to meet your specific needs, creating bespoke events that reflect your individual style and preferences.
            </li>
            <li className="pb-2 hover:bg-[#d3e8d0] p-2 rounded-lg transition-all duration-300 ease-in-out">
              <span className="font-bold text-[#1A4D2E]">Comprehensive Services:</span> From venue selection and décor to entertainment and catering, we handle every aspect of event planning, so you don't have to.
            </li>
            <li className="pb-2 hover:bg-[#d3e8d0] p-2 rounded-lg transition-all duration-300 ease-in-out">
              <span className="font-bold text-[#1A4D2E]">Stress-Free Experience:</span> Sit back and enjoy your event while we take care of all the logistics and details, guaranteeing a hassle-free experience from start to finish.
            </li>
          </ul>
        </animated.div>
      </div>
    </div>
    </div>
  );
}

export default About;
