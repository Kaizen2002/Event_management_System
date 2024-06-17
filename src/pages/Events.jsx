import React from 'react'
import { eventData } from '../data/event'
import { useState } from 'react'

const Events = () => {
  return (
    <div className=' bg-[#efece1]'>
      <div className="EventHead text-center py-10">
        <h1 className='text-[30px] font-bold tracking-wide text-[#254336]'>Events Managed by Us</h1>
        <p className=' italic p-4 text-[#6B8A7A]'> Discover a showcase of meticulously curated events, expertly organized and managed by our dedicated team at Evento. From corporate summits to cultural festivals, explore our portfolio of memorable occasions crafted with precision and creativity.</p>
      </div>
      <div className="eventData flex flex-col md:flex-row flex-wrap gap-10 md:p-[50px]">
        {eventData.map((v, i) => {
          return (<EventCard v={v} key={i} />)
        })}

      </div>
    </div>
  )
}

export default Events;

const EventCard = ({ v }) => {

  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="w-[350px] h-[300px] mx-auto shadow-lg rounded-lg overflow-hidden sm:w-[400px] hover:scale-110 transition-transform duration-500">

      <div className="h-[250px] relative">

        <img className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105 hover:filter hover:blur-[2px]" src={v.image} alt={v.name} onMouseEnter={toggleDescription} onMouseLeave={toggleDescription} />


        {showDescription && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white transition-opacity duration-300">

            <p className="text-lg text-center p-4">{v.description}</p>

          </div>
        )}
      </div>

      <div className="name h-[50px] text-center py-2 text-xl font-bold tracking-wide text-[#254336]">
        {v.name}
      </div>
    </div>
  );
};