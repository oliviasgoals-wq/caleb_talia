'use client';

import Footer from '@/ui/footer';
import React, { useState } from 'react';
import { 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaClock, 
  FaGlassCheers, 
  FaCamera, 
  FaMusic, 
  FaUtensils, 
  FaCar,
  FaChevronDown,
  FaChevronUp,
  FaQuestionCircle
} from 'react-icons/fa';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  icon: React.ReactNode;
  category?: string;
}

const WeddingFAQDropdown: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "What time should I arrive?",
      answer: "Please arrive at least 30 minutes before the ceremony starts. The ceremony will begin promptly at 4:00 PM. This gives you time to find your seat and get comfortable before we start.",
      icon: <FaClock className="text-[#EFBF04]" size={20} />,
      category: "timing"
    },
    {
      id: 2,
      question: "Where is the wedding venue?",
      answer: "The wedding will be held at The Grand Garden Estate, located at 123 Celebration Lane, Weddingville. The ceremony will be in the garden (weather permitting), followed by the reception in the main hall.",
      icon: <FaMapMarkerAlt className="text-[#EFBF04]" size={20} />,
      category: "venue"
    },
    {
      id: 3,
      question: "When is the RSVP deadline?",
      answer: "Please RSVP by March 15th, 2024. You can RSVP through our wedding website or by mailing back the response card included with your invitation.",
      icon: <FaCalendarAlt className="text-[#EFBF04]" size={20} />,
      category: "rsvp"
    },
    {
      id: 4,
      question: "Will there be an open bar?",
      answer: "Yes! We'll have a fully stocked open bar with signature cocktails, wine, beer, and non-alcoholic options. The bar will open during cocktail hour at 5:00 PM.",
      icon: <FaGlassCheers className="text-[#EFBF04]" size={20} />,
      category: "reception"
    },
    {
      id: 5,
      question: "Can I take photos during the ceremony?",
      answer: "We're having an 'unplugged' ceremony, which means we ask that you put away all phones and cameras during the ceremony. Our professional photographers will capture everything, and we'll share the photos with you afterward!",
      icon: <FaCamera className="text-[#EFBF04]" size={20} />,
      category: "etiquette"
    },
    {
      id: 6,
      question: "What kind of music will be played?",
      answer: "We'll have a live band during dinner and a DJ for the dancing portion of the evening. They'll be playing a mix of current hits, classics, and some special requests from the bride and groom.",
      icon: <FaMusic className="text-[#EFBF04]" size={20} />,
      category: "entertainment"
    },
    {
      id: 7,
      question: "Is there a specific dress code?",
      answer: "The dress code is black-tie optional. Men can wear tuxedos or dark suits, and women can wear floor-length gowns or cocktail dresses. The ceremony is outdoors on grass, so choose footwear accordingly!",
      icon: <FaQuestionCircle className="text-[#EFBF04]" size={20} />,
      category: "attire"
    },
    {
      id: 8,
      question: "Will there be vegetarian/vegan options?",
      answer: "Absolutely! When you RSVP, please indicate any dietary restrictions or allergies. We'll have vegetarian, vegan, and gluten-free options available for both dinner and dessert.",
      icon: <FaUtensils className="text-[#EFBF04]" size={20} />,
      category: "food"
    },
    {
      id: 9,
      question: "Is there parking at the venue?",
      answer: "Yes, there's complimentary valet parking available at the venue. If you prefer to drive yourself, there's also a large parking lot adjacent to the estate. We recommend carpooling if possible!",
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

  const toggleAll = () => {
    if (openItems.length === faqData.length) {
      setOpenItems([]);
    } else {
      setOpenItems(faqData.map(item => item.id));
    }
  };

  return (
    <div id='paper-grain-dark' className="w-full max-w-3xl mx-auto p-6 rounded-md shadow-lg">
        <h1 className="text-center text-6xl font-tangerine pb-10 text-white"> Frequently Asked <span className="text-[#008800]">Questions</span></h1>
        
        <div className="text-center mb-8">
        <p className="text-white">
            Everything you need to know about our special day
        </p>
        </div>

        <div className="flex justify-end mb-4">
        <button
            onClick={toggleAll}
            className="px-4 py-2 text-sm text-[#ffffff] bg-[#EFBF04]/20 rounded-sm hover:bg-[#EFBF04]/50 transition-colors duration-200 focus:outline-none focus:ring-2 "
        >
            {openItems.length === faqData.length ? 'Collapse All' : 'Expand All'}
        </button>
        </div>

        {/* FAQ List */}
        <div className="space-y-5">
        {faqData.map((item) => (
            <div
            key={item.id}
            className="border border-[#EFBF04] rounded-md overflow-hidden transition-all duration-200 hover:border-[#EFBF04]"
            >
            {/* Question Button */}
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

            {/* Answer Panel */}
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
                    {/* Empty div for alignment with question icon */}
                    </div>
                    <div className="flex-1">
                    <p className="text-[#ffffff] leading-relaxed">
                        {item.answer}
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        ))}
        </div>
        <Footer message="dark"/>
    </div>
  );
};

export default WeddingFAQDropdown;