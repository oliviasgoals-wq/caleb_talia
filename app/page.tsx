import EnvelopeSection from "@/ui/envelope";
import Navbar from "@/ui/navbar";
import Footer from "@/ui/footer";
import WeddingCountdown from "@/ui/countdown";
import "./globals.css"

export default function Home() {
  return (
    <main className="paper-grain-dark min-h-screen flex flex-col">
      <Navbar theme="dark"/>

      <div className="h-screen w-full">
        <EnvelopeSection/>
      </div>
      <div className="bg-[#0b1807] text-white pt-15 w-full">
        <WeddingCountdown/>
      </div>
      <div className="bg-[#0b1807]  h-20 w-full flex justify-center text-3xl p-20">
        
      </div>

<div className="grain-stripes px-10 py-10 md:p-30">
  <div className="paper-grain-dark-too py-10 md:py-30">
    <h2 className="font-tangerine text-4xl md:text-5xl lg:text-6xl text-white pb-10 text-center">
      Order of the day
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 px-6 md:px-20 max-w-7xl mx-auto">

      <div className="border border-white rounded-sm p-5 text-white">
        <div className="flex justify-center mb-4">
          <svg width="80" height="90" viewBox="0 0 80 90" fill="none" xmlns="http://www.w3.org/2000/svg ">
            <path d="M40 50 Q40 38 40 28 Q40 18 48 14 Q56 10 58 20 Q60 30 52 36 Q46 40 40 50Z" stroke="#EFBF04" strokeWidth="1" fill="none" strokeLinecap="round"/>
            <path d="M40 50 Q40 38 40 28 Q40 18 32 14 Q24 10 22 20 Q20 30 28 36 Q34 40 40 50Z" stroke="#EFBF04" strokeWidth="1" fill="none" strokeLinecap="round"/>
            <path d="M40 50 Q52 46 60 40 Q68 34 68 24 Q68 14 58 16 Q48 18 46 28 Q44 38 40 50Z" stroke="#EFBF04" strokeWidth="1" fill="none" strokeLinecap="round"/>
            <path d="M40 50 Q28 46 20 40 Q12 34 12 24 Q12 14 22 16 Q32 18 34 28 Q36 38 40 50Z" stroke="#EFBF04" strokeWidth="1" fill="none" strokeLinecap="round"/>
            <circle cx="40" cy="50" r="6" stroke="#EFBF04" strokeWidth="1.2" fill="none"/>
            <circle cx="40" cy="50" r="2.5" stroke="#EFBF04" strokeWidth="1" fill="none"/>
            <path d="M40 56 Q40 68 39 80" stroke="#EFBF04" strokeWidth="1" strokeLinecap="round" fill="none"/>
            <path d="M39.5 66 Q34 62 30 64" stroke="#EFBF04" strokeWidth="1" strokeLinecap="round" fill="none"/>
            <path d="M39.5 72 Q45 69 48 71" stroke="#EFBF04" strokeWidth="1" strokeLinecap="round" fill="none"/>
          </svg>
        </div>
        <h3 className="font-tangerine text-3xl md:text-5xl lg:text-6xl mb-3 text-center text-[#EFBF04]">Pre-ceremony</h3>
        <ul className="text-sm space-y-2 opacity-80">
          <li>12:00pm — Guests arrive</li>
          <li>Mingle with our friends and family as we gather, unwind, and share in the excitement before the ceremony begins.</li>
        </ul>
      </div>

      <div className="border border-white rounded-sm p-5 text-white">
        <div className="flex justify-center mb-4">
          
          <svg width="80" height="90" viewBox="0 0 80 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 55 Q38 45 32 38 Q26 30 28 22 Q30 14 40 16 Q50 14 52 22 Q54 30 48 38 Q42 45 40 55Z" stroke="#EFBF04" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M40 55 Q30 48 22 50 Q14 52 12 44 Q10 36 18 32 Q26 28 32 38" stroke="#EFBF04" strokeWidth="1" fill="none" strokeLinecap="round"/>
            <path d="M40 55 Q50 48 58 50 Q66 52 68 44 Q70 36 62 32 Q54 28 48 38" stroke="#EFBF04" strokeWidth="1" fill="none" strokeLinecap="round"/>
            <path d="M40 55 Q36 60 30 62 Q22 65 20 58 Q18 50 26 48 Q32 46 36 52" stroke="#EFBF04" strokeWidth="1" fill="none" strokeLinecap="round"/>
            <path d="M40 55 Q44 60 50 62 Q58 65 60 58 Q62 50 54 48 Q48 46 44 52" stroke="#EFBF04" strokeWidth="1" fill="none" strokeLinecap="round"/>
            <circle cx="40" cy="46" r="5" stroke="#EFBF04" strokeWidth="1" fill="none"/>
            <path d="M40 55 Q41 68 38 80" stroke="#EFBF04" strokeWidth="1" strokeLinecap="round" fill="none"/>
            <path d="M39 68 Q32 65 28 68" stroke="#EFBF04" strokeWidth="1" strokeLinecap="round" fill="none"/>
          </svg>
        </div>
        <h3 className="font-tangerine text-3xl md:text-5xl lg:text-6xl mb-3 text-center text-[#EFBF04]">Ceremony</h3>
        <ul className="text-sm space-y-2 opacity-80">
          <li>1:00pm — Ceremony begins</li>
          <li>We kindly request for our guests to be seated in the The Garden Venue for our ceremony by 12:45</li>
        </ul>
      </div>

      <div className="border border-white rounded-sm p-5 text-white">
        <div className="flex justify-center mb-4">
          <svg className="text-[#EFBF04]" width="80" height="90" viewBox="0 0 80 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 52 Q34 42 26 38 Q18 34 16 26 Q14 18 22 16 Q30 14 34 22 Q37 30 40 52Z" stroke="#EFBF04" strokeWidth="1" fill="none" strokeLinecap="round"/>
            <path d="M40 52 Q46 42 54 38 Q62 34 64 26 Q66 18 58 16 Q50 14 46 22 Q43 30 40 52Z" stroke="#EFBF04" strokeWidth="1" fill="none" strokeLinecap="round"/>
            <path d="M40 52 Q30 52 24 46 Q16 40 18 32 Q20 24 28 26 Q36 28 38 40 Q39 46 40 52Z" stroke="#EFBF04" strokeWidth="1" fill="none" strokeLinecap="round"/>
            <path d="M40 52 Q50 52 56 46 Q64 40 62 32 Q60 24 52 26 Q44 28 42 40 Q41 46 40 52Z" stroke="#EFBF04" strokeWidth="1" fill="none" strokeLinecap="round"/>
            <path d="M40 52 Q36 44 36 38 Q36 30 40 26 Q44 30 44 38 Q44 44 40 52Z" stroke="#EFBF04" strokeWidth="1" fill="none" strokeLinecap="round"/>
            <circle cx="40" cy="52" r="5" stroke="#EFBF04" strokeWidth="1.2" fill="none"/>
            <path d="M40 57 Q40 68 39 80" stroke="#EFBF04" strokeWidth="1" strokeLinecap="round" fill="none"/>
            <path d="M39.5 63 Q33 60 30 63" stroke="#EFBF04" strokeWidth="1" strokeLinecap="round" fill="none"/>
            <path d="M39.5 72 Q46 69 50 72" stroke="#EFBF04" strokeWidth="1" strokeLinecap="round" fill="none"/>
          </svg>
        </div>
        <h3 className="font-tangerine text-3xl md:text-5xl lg:text-6xl mb-3 text-center text-[#EFBF04]">Reception</h3>
        <ul className="text-sm space-y-2 opacity-80">
          <li>3:30pm — Reception</li>
          <li>Celebrate with us as the evening comes alive with great food, heartfelt toasts, and plenty of dancing.</li>
        </ul>
      </div>

    </div>
  </div>
</div>

      <div className="bg-[#0b1807]">
        <Footer message="dark"/>
      </div>
      
    </main>
    
  );
}