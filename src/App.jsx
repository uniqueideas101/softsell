import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import ChatWidget from './components/ChatWidget';


function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <div className="h-16"></div>
      <div className="App">
      <Hero />
      <HowItWorks/>
      <WhyChooseUs/>
      <Testimonials/>
      <ContactForm/>
      <ChatWidget/>
      </div>
    </div>  
    )
}

export default App;
