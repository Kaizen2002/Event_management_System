import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import 'tailwindcss/tailwind.css';

const Home = () => {
  const fadeInLeft = useSpring({
    from: { opacity: 0, transform: 'translateX(-100px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: { duration: 1000 }
  });

  const fadeInRight = useSpring({
    from: { opacity: 0, transform: 'translateX(100px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: { duration: 1000 }
  });

  return (
    <div className="home-container bg-[#ebe7d9] h-screen flex items-center justify-center">
      <div className="home-content flex flex-col md:flex-row items-center justify-between w-full max-w-5xl p-4">
        <animated.div style={fadeInLeft} className="text-content md:w-1/2 p-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-center md:text-left pb-5 font-extrabold tracking-wide text-[#4F6F52]">
            Welcome to <span className="text-[#1A4D2E]">Evento</span>
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl text-center md:text-left pb-6 font-semibold text-[#4F6F52]">
            Your Premier Event Management Partner
          </h2>
          <p className="italic text-center md:text-left text-base sm:text-lg md:text-xl text-[#4F6F52]">
            Turning Moments into Memories, One Event at a Time
          </p>
        </animated.div>
        <animated.div style={fadeInRight} className="image-content hidden md:block md:w-1/2 p-4">
          <img src="src/assets/eventbg.png" alt="Event Background" className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"/>
        </animated.div>
      </div>
    </div>
  );
}

export default Home;
