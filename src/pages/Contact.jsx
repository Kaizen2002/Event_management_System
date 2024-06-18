import React, { useState } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    // -------------------------------------EmailJS-------------------------------------
    emailjs.sendForm('service_6wxx7fb', 'template_p4ly9an', e.target, 'LwAf1YqzNG05gapRT')
      .then((result) => {
        setSending(false);
        setSent(true);
        setName('');
        setSubject('');
        setMessage('');
      }, (error) => {
        console.log(error.text);
        setSending(false);
      });
  };

  return (
    <div className='w-full h-lvh bg-[#efece1] flex items-center justify-center'>
      <div className="w-full mx-auto my-10 px-6 py-8 absolute top-[10%] md:w-1/2">
        <h2 className="text-[40px] font-bold text-center text-[#254336] mb-16">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4 bg-[#efece1]">
          <div >
            <label htmlFor="name" className="block text-gray-700 ">Name</label>
            <input
              type="text"
              name="from_name"
              id="from_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name here"
              required
              className="w-full px-3 py-2 mt-1 text-gray-800 border-b-2 border-gray-300 bg-[#efece1] focus:outline-none focus:border-indigo-500 transition duration-300"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-gray-700 ">Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Enter your message subject here"
              required
              className="w-full px-3 py-2 mt-1 text-gray-800 border-b-2 border-gray-300 bg-[#efece1] focus:outline-none focus:border-indigo-500 transition duration-300"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 ">Message</label>
            <textarea
              name="message"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message here"
              required
              className="w-full px-3 py-2 mt-1 text-gray-800 border-b-2 border-gray-300 bg-[#efece1] focus:outline-none focus:border-indigo-500 transition duration-300"
            ></textarea>
          </div>
          <button
            type="submit"
            className={`w-full px-4 py-2 text-white font-bold bg-indigo-500 rounded-md focus:outline-none focus:bg-indigo-600 ${sending ? 'opacity-75 cursor-not-allowed' : ''}`}
            disabled={sending}
          >
            {sending ? 'Sending...' : 'Send Message'}
          </button>
          {sent && (
            <p className="text-green-500 text-center">Message sent successfully!</p>
          )}
        </form>

      </div>
    </div>
  );
};

export default Contact;
