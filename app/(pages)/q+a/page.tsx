'use client';

import Navbar from '@/ui/navbar';
import Footer from '@/ui/footer';
import React, { useState } from 'react';
import { 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaClock, 
  FaCar,
  FaChevronDown,
  FaChevronUp,
  FaQuestionCircle,
  FaExternalLinkAlt,
  FaWhatsapp
} from 'react-icons/fa';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  icon: React.ReactNode;
  category?: string;
  venueAddress?: string;
  mapsLink?: string;
  phoneNumber?: string;
  whatsappMessage?: string;
}

export default function QA(){
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [copySuccess, setCopySuccess] = useState<string>('');

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "What time should I arrive?",
      answer: "Please arrive at 12pm",
      icon: <FaClock className="text-[#EFBF04]" size={20} />,
      category: "timing"
    },
    {
      id: 2,
      question: "Where is the wedding venue?",
      answer: "The wedding will be held at The Garden Venue, located at 308 Boundary Road, North Riding, 2169. The ceremony will be in the garden, followed by the reception in the main hall",
      icon: <FaMapMarkerAlt className="text-[#EFBF04]" size={20} />,
      category: "venue",
      venueAddress: "308 Boundary Road, North Riding, 2169",
      mapsLink: "https://www.google.com/maps/search/?api=1&query=The+Garden+Venue+Hotel+North+Riding"
    },
    {
      id: 3,
      question: "When is the RSVP deadline?",
      answer: "Please RSVP by March 22nd 2026. You can RSVP via WhatsApp to 060 272 3701",
      icon: <FaCalendarAlt className="text-[#EFBF04]" size={20} />,
      category: "rsvp",
      phoneNumber: "27602723701",
      whatsappMessage: "Hello Talia! I would like to RSVP for the wedding. My name is ..."
    },
    {
      id: 4,
      question: "Is there a specific dress code?",
      answer: "The dress code is Eastern or Formal",
      icon: <FaQuestionCircle className="text-[#EFBF04]" size={20} />,
      category: "attire"
    },
    {
      id: 5,
      question: "Is there parking at the venue?",
      answer: "Yes, there's plenty of parking available at the venue",
      icon: <FaCar className="text-[#EFBF04]" size={20} />,
      category: "logistics"
    }
  ];

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  // Function to open Google Maps
  const openGoogleMaps = (address: string, mapsLink?: string) => {
    if (mapsLink) {
      window.open(mapsLink, '_blank', 'noopener,noreferrer');
    } else {
      const searchQuery = encodeURIComponent(address);
      window.open(`https://www.google.com/maps/search/?api=1&query=${searchQuery}`, '_blank', 'noopener,noreferrer');
    }
  };


    const openWhatsApp = (phoneNumber: string, message?: string) => {
    const cleanNumber = phoneNumber.replace(/\D/g, '');
    
    const fullNumber = cleanNumber.startsWith('27') ? cleanNumber : `27${cleanNumber}`;
    
    const encodedMessage = message ? encodeURIComponent(message) : '';
    
    const whatsappUrl = `https://wa.me/${fullNumber}${encodedMessage ? `?text=${encodedMessage}` : ''}`;
    
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    };

  const copyToClipboard = (text: string, itemId: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopySuccess(`Copied!`);
      setTimeout(() => setCopySuccess(''), 2000);
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  const formatAnswer = (item: FAQItem) => {
    if (item.id === 2 && item.venueAddress) {
      const parts = item.answer.split(item.venueAddress);
      
      return (
        <>
          {parts[0]}
          <button
            onClick={() => openGoogleMaps(item.venueAddress!, item.mapsLink)}
            className="inline-flex items-center gap-1 text-[#EFBF04] hover:text-[#FFD700] underline transition-colors duration-200 font-medium"
          >
            {item.venueAddress}
            <FaExternalLinkAlt size={12} className="inline-block" />
          </button>
          {parts[1]}
        </>
      );
    }
    
    if (item.id === 3 && item.phoneNumber) {
      const phoneDisplay = "060 272 3701";
      const parts = item.answer.split(phoneDisplay);
      
      return (
        <>
          {parts[0]}
          <button
            onClick={() => openWhatsApp(item.phoneNumber!, item.whatsappMessage)}
            className="inline-flex items-center gap-1 text-[#EFBF04] hover:text-[#FFD700] underline transition-colors duration-200 font-medium"
          >
            {phoneDisplay}
            <FaWhatsapp size={14} className="inline-block" />
          </button>
          {parts[1]}
        </>
      );
    }
    
    return item.answer;
  };

  return(
    <div className="paper-grain-light pt-15 h-full p-6"> 
      <Navbar theme='light'/>

      <div className="paper-grain-dark max-w-3xl mx-auto p-8 md:p-12 rounded-full shadow-4xl">
        <h1 className="text-center text-6xl font-tangerine pt-20 pb-20 text-white"> Frequently Asked <span className="text-[#008800]">Questions</span></h1>

        <div className="space-y-2">
          {faqData.map((item) => (
            <div
              key={item.id}
              className="border border-[#EFBF04] rounded-md overflow-hidden transition-all duration-200 hover:border-[#EFBF04]"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-5 py-4 flex items-center justify-between bg-[#17320b] hover:bg-[#EFBF04]/50 transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-[#EFBF04] focus:ring-inset"
                aria-expanded={openItems.includes(item.id)}
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-[#ffffff]/10 rounded-full">
                    {item.icon}
                  </div>
                  <span className="text-left font-medium text-[#ffffff]">
                    {item.question}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {openItems.includes(item.id) ? (
                    <FaChevronUp className="text-[#EFBF04]" size={16} />
                  ) : (
                    <FaChevronDown className="text-[#EFBF04]" size={16} />
                  )}
                </div>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  openItems.includes(item.id)
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <div className="px-6 py-4 bg-[#17320b] border-t border-[#EFBF04]">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8">
                    </div>
                    <div className="flex-1">
                      <p className="text-[#ffffff] leading-relaxed">
                        {formatAnswer(item)}
                      </p>
                      
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.id === 2 && item.venueAddress && (
                          <>
                            <button
                              onClick={() => openGoogleMaps(item.venueAddress!, item.mapsLink)}
                              className="inline-flex items-center gap-2 px-4 py-2 bg-[#EFBF04] text-[#17320b] rounded-md hover:bg-[#FFD700] transition-colors duration-200 font-medium text-sm"
                            >
                              <FaMapMarkerAlt size={14} />
                              Open in Google Maps
                              <FaExternalLinkAlt size={12} />
                            </button>
                            
                            <button
                              onClick={() => copyToClipboard(item.venueAddress!, item.id)}
                              className="inline-flex items-center gap-2 px-4 py-2 border border-[#EFBF04] text-[#EFBF04] rounded-md hover:bg-[#EFBF04]/10 transition-colors duration-200 font-medium text-sm relative"
                            >
                              {copySuccess === 'Copied!' ? 'Copied!' : 'Copy Address'}
                            </button>
                          </>
                        )}

                        {item.id === 3 && item.phoneNumber && (
                          <>
                            <button
                              onClick={() => openWhatsApp(item.phoneNumber!, item.whatsappMessage)}
                              className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white rounded-md hover:bg-[#20BD5A] transition-colors duration-200 font-medium text-sm"
                            >
                              <FaWhatsapp size={16} />
                              RSVP via WhatsApp
                              <FaExternalLinkAlt size={12} />
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <Footer message="dark"/>
      </div>
    </div>
  );
}