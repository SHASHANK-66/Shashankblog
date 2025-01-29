import React, { useState } from 'react';
import { FaLeaf, FaSolarPanel, FaRecycle, FaCommentDots, FaTimes } from 'react-icons/fa';

const Service = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const services = [
    {
      icon: <FaLeaf className="w-8 h-8 text-green-500" />,
      title: "Eco Consulting",
      description: "Professional guidance for sustainable business practices"
    },
    {
      icon: <FaSolarPanel className="w-8 h-8 text-green-500" />,
      title: "Renewable Energy",
      description: "Solar and wind energy solutions for homes and businesses"
    },
    {
      icon: <FaRecycle className="w-8 h-8 text-green-500" />,
      title: "Waste Management",
      description: "Efficient recycling and waste reduction strategies"
    }
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    setMessages(prev => [...prev, { text: message, isBot: false }]);
    setTimeout(() => {
      setMessages(prev => [...prev, { text: "Thank you for your message! Our sustainability experts will respond within 24 hours.", isBot: true }]);
    }, 1000);
    setMessage('');
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50 relative">
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive solutions for a sustainable future</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-green-100 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Go Green?</h3>
          <p className="text-gray-600 mb-6">Start your sustainability journey today</p>
          <button className="bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition-all">Get Started</button>
        </div>
      </section>

      {/* Chat Bot */}
      <div className="fixed bottom-8 right-8 z-50">
        {!isChatOpen ? (
          <button onClick={() => setIsChatOpen(true)} className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all animate-bounce">
            <FaCommentDots className="w-8 h-8" />
          </button>
        ) : (
          <div className="bg-white rounded-xl shadow-xl w-80">
            <div className="bg-green-500 text-white p-4 rounded-t-xl flex justify-between items-center">
              <h3 className="text-lg font-semibold">Eco Support</h3>
              <button onClick={() => setIsChatOpen(false)} className="hover:text-green-200 transition-colors">
                <FaTimes className="w-4 h-5" />
              </button>
            </div>

            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-xs p-3 rounded-lg ${msg.isBot ? 'bg-gray-100 text-gray-800' : 'bg-green-500 text-white'}`}>{msg.text}</div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSendMessage} className="p-4 border-t">
              <div className="flex gap-2">
                <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type your question..." className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500" />
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">Send</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Service;
