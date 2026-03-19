// components/SimpleEnvelope.jsx
"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  EDIT THESE TO PERSONALISE YOUR WEDDING SITE
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const BRIDE_NAME   = "Caleb";
const GROOM_NAME   = "Talia";
const WEDDING_DATE = "15 June 2026";
const PHOTO_URL    = "/photos/21.jpg";
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export default function SimpleEnvelope() {
  const scrollerRef   = useRef(null);
  const stickyRef     = useRef(null);

  const lidOneRef     = useRef(null);
  const lidTwoRef     = useRef(null);
  const letterRef     = useRef(null);
  const vignetteRef   = useRef(null);
  const namesRef      = useRef(null);
  const dateRef       = useRef(null);
  const taglineRef    = useRef(null);
  const wrapperRef    = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const scroller = scrollerRef.current;
    if(!scroller) return;

    const ctx = gsap.context(() => {

      // Gentle idle float with subtle rotation
      gsap.to(wrapperRef.current, {
        y: -8,
        rotation: 0.5,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          scroller: scroller,
          trigger: stickyRef.current,
          start: 'top top',
          end: '+=1200',
          scrub: 1.4,
        }
      });

      // Simplified animation sequence without full-screen photo
      tl.to(lidOneRef.current, { rotationX: 90, duration: 0.25 })
        .to(lidTwoRef.current, { rotationX: 180, duration: 0.25 }, '+=0.25')
        .to(letterRef.current, { y: -160, duration: 0.35, ease: 'power2.out' }, '+=0.25')
        .to(vignetteRef.current, { opacity: 1, duration: 0.5 }, '<')
        .to([namesRef.current, dateRef.current, taglineRef.current], {
          opacity: 1, y: 0, duration: 0.45, stagger: 0.18, ease: 'power3.out',
        }, '-=0.1');

    }, scroller);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div ref={scrollerRef} className="we-scroller">
        <div className="we-scroll-track">
          <div ref={stickyRef} className="we-sticky">

            {/* Corner sprigs */}
            <div className="we-sprig we-sprig-tl" aria-hidden>
              <svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 125 Q40 70 95 25" stroke="#EFBF04" strokeWidth="1.6" strokeLinecap="round" fill="none" opacity="0.6"/>
                <ellipse cx="55" cy="85" rx="16" ry="9" fill="#17320b" opacity="0.6" transform="rotate(-35 55 85)"/>
                <ellipse cx="78" cy="58" rx="14" ry="8" fill="#17320b" opacity="0.5" transform="rotate(-50 78 58)"/>
                <ellipse cx="38" cy="105" rx="12" ry="7" fill="#17320b" opacity="0.45" transform="rotate(-20 38 105)"/>
                <circle cx="98" cy="22" r="4.5" fill="#EFBF04" opacity="0.85"/>
                <circle cx="72" cy="45" r="3.5" fill="#EFBF04" opacity="0.6"/>
                <circle cx="46" cy="70" r="3"   fill="#EFBF04" opacity="0.45"/>
              </svg>
            </div>
            <div className="we-sprig we-sprig-br" aria-hidden>
              <svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M125 15 Q100 70 45 115" stroke="#EFBF04" strokeWidth="1.6" strokeLinecap="round" fill="none" opacity="0.6"/>
                <ellipse cx="85" cy="55" rx="16" ry="9" fill="#17320b" opacity="0.6" transform="rotate(35 85 55)"/>
                <ellipse cx="62" cy="82" rx="14" ry="8" fill="#17320b" opacity="0.5" transform="rotate(50 62 82)"/>
                <ellipse cx="102" cy="35" rx="12" ry="7" fill="#17320b" opacity="0.45" transform="rotate(20 102 35)"/>
                <circle cx="42" cy="118" r="4.5" fill="#EFBF04" opacity="0.85"/>
                <circle cx="68" cy="95"  r="3.5" fill="#EFBF04" opacity="0.6"/>
                <circle cx="94" cy="70"  r="3"   fill="#EFBF04" opacity="0.45"/>
              </svg>
            </div>

            {/* Vignette overlay */}
            <div ref={vignetteRef} className="we-vignette" />

            {/* Envelope scene - now with all content revealed */}
            <div className="we-scene">
              <div className="we-monogram">
                <span>{BRIDE_NAME[0]}</span>
                <span className="we-mono-amp">&</span>
                <span>{GROOM_NAME[0]}</span>
              </div>

              <p className="we-eyebrow">You are cordially invited</p>
              <h2 className="we-names">
                {BRIDE_NAME}<span className="we-amp"> &amp; </span>{GROOM_NAME}
              </h2>

              <div ref={wrapperRef} className="we-wrapper">
                <div ref={lidOneRef} className="we-lid we-lid-one" />
                <div ref={lidTwoRef} className="we-lid we-lid-two" />
                <div className="we-envelope-body">
                  {/* Paper texture overlay for envelope body */}
                  <div className="we-paper-texture" />
                </div>
                <div ref={letterRef} className="we-letter">
                  <img src={PHOTO_URL} alt="Couple" className="we-letter-photo" />
                  <div className="we-letter-scrim" />
                  <div className="we-letter-text">
                    <span className="we-initials">
                      {BRIDE_NAME[0]}<span className="we-li-amp">&</span>{GROOM_NAME[0]}
                    </span>
                  </div>
                  {/* Paper texture overlay for letter */}
                  <div className="we-letter-texture" />
                </div>
              </div>

              {/* Revealed text content - now appears within the scene */}
              <div className="we-revealed-content">
                <p ref={namesRef} className="we-revealed-names">
                  {BRIDE_NAME}<span className="we-revealed-amp"> &amp; </span>{GROOM_NAME}
                </p>
                <div className="we-divider-line" />
                <p ref={dateRef} className="we-revealed-date">{WEDDING_DATE}</p>
                <p ref={taglineRef} className="we-revealed-tagline">Together forever begins here</p>
              </div>

              <p className="we-scroll-hint">
                <span className="we-hint-line" />
                Scroll to open
                <span className="we-hint-line" />
              </p>
            </div>

          </div>
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Cinzel:wght@400;500&family=Lato:wght@300;400&display=swap');
      `}</style>

      <style jsx>{`

        .we-scroller {
          height: 100vh;
          width: 100%;
          overflow-y: scroll;
          scrollbar-width: none;
          -ms-overflow-style: none;
          position: relative;
        }
        .we-scroller::-webkit-scrollbar { display: none; }

        .we-scroll-track {
          height: calc(100vh + 1200px);
          position: relative;
        }

        .we-sticky {
          position: sticky;
          top: 0;
          height: 100vh;
          width: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(ellipse at 40% 35%, #1e4010 0%, #0e1e09 65%);
        }

        .we-sprig {
          position: absolute;
          width: clamp(110px, 16vw, 180px);
          height: clamp(110px, 16vw, 180px);
          pointer-events: none;
          z-index: 2;
        }
        .we-sprig-tl { top: 0; left: 0; }
        .we-sprig-br { bottom: 0; right: 0; transform: scaleX(-1) scaleY(-1); }

        .we-vignette {
          position: absolute;
          inset: 0;
          z-index: 5;
          opacity: 0;
          background: rgba(8, 16, 5, 0.38);
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .we-scene {
          position: relative;
          z-index: 20;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem;
        }

        .we-monogram {
          font-family: 'Great Vibes', serif;
          font-size: clamp(0.95rem, 2.2vw, 1.4rem);
          color: #EFBF04;
          letter-spacing: 0.1em;
          display: flex;
          align-items: center;
          gap: 0.3em;
          margin-bottom: 1rem;
          border: 1.5px solid rgba(239,191,4,0.4);
          border-radius: 50%;
          width: clamp(52px, 8vw, 72px);
          height: clamp(52px, 8vw, 72px);
          justify-content: center;
          background: radial-gradient(circle, rgba(239,191,4,0.08) 0%, transparent 70%);
        }
        .we-mono-amp { font-size: 0.65em; color: rgba(239,191,4,0.6); line-height: 1; }

        .we-eyebrow {
          font-family: 'Lato', sans-serif;
          font-weight: 300;
          font-size: 12px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: rgba(239,191,4,0.65);
          margin-bottom: 0.55rem;
        }

        .we-names {
          font-family: 'Great Vibes', serif;
          font-size: 50px;
          font-weight: 300;
          font-style: italic;
          color: #fff;
          letter-spacing: 0.03em;
          line-height: 1.05;
          margin-bottom: clamp(1.5rem, 3.5vh, 2.8rem);
        }
        .we-amp { color: #EFBF04; font-style: normal; }

        /* Envelope wrapper - larger size with paper texture */
        .we-wrapper {
          height: 280px;
          width: 420px;
          background-color: #17320b;
          position: relative;
          display: flex;
          justify-content: center;
          z-index: 0;
          margin: 0 auto;
          filter:
            drop-shadow(0 20px 60px rgba(0,0,0,0.5))
            drop-shadow(0 0 0 1px rgba(239,191,4,0.2));
        }

        /* Paper texture overlay for envelope */
        .we-paper-texture {
          position: absolute;
          inset: 0;
          background-image: 
            repeating-linear-gradient(
              45deg,
              rgba(255,255,255,0.02) 0px,
              rgba(255,255,255,0.02) 2px,
              rgba(0,0,0,0.02) 2px,
              rgba(0,0,0,0.02) 4px
            ),
            radial-gradient(
              circle at 30% 50%,
              rgba(255,255,255,0.1) 0%,
              transparent 50%
            );
          pointer-events: none;
          z-index: 4;
          mix-blend-mode: overlay;
          opacity: 0.7;
        }

        .we-lid {
          position: absolute;
          height: 100%; width: 100%;
          top: 0; left: 0;
          border-right: 210px solid transparent;
          border-bottom: 140px solid transparent;
          border-left: 210px solid transparent;
          transform-origin: top;
          transform-style: preserve-3d;
        }
        .we-lid-one {
          border-top: 140px solid #1e4410;
          transform: rotateX(0deg);
          z-index: 3;
        }
        .we-lid-two {
          border-top: 140px solid #17320b;
          transform: rotateX(90deg);
          z-index: 1;
        }

        .we-envelope-body {
          position: absolute;
          height: 100%; width: 100%;
          top: 0; left: 0;
          border-top:    140px solid transparent;
          border-right:  210px solid #f5f0e6;
          border-bottom: 140px solid #f5f0e6;
          border-left:   210px solid #ede8dc;
          z-index: 3;
          position: relative;
          overflow: hidden;
        }

        /* Add paper texture to envelope body */
        .we-envelope-body::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: 
            url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.12'/%3E%3C/svg%3E");
          opacity: 0.15;
          pointer-events: none;
          mix-blend-mode: multiply;
        }

        .we-letter {
          position: absolute;
          top: 0;
          width: 85%;
          height: 85%;
          background-color: #fff;
          border-radius: 4px;
          z-index: 2;
          overflow: hidden;
          box-shadow:
            0 0 0 2px rgba(239,191,4,0.5),
            0 8px 28px rgba(0,0,0,0.3);
        }
        .we-letter-photo {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
        }
        .we-letter-scrim {
          position: absolute; inset: 0;
          background: linear-gradient(
            to top,
            rgba(10,24,6,0.70) 0%,
            rgba(10,24,6,0.05) 55%,
            transparent 80%
          );
        }

        /* Paper texture for letter */
        .we-letter-texture {
          position: absolute;
          inset: 0;
          background-image: 
            repeating-linear-gradient(
              0deg,
              rgba(0,0,0,0.02) 0px,
              rgba(0,0,0,0.02) 1px,
              transparent 1px,
              transparent 3px
            ),
            radial-gradient(
              circle at 80% 20%,
              rgba(239,191,4,0.03) 0%,
              transparent 50%
            );
          pointer-events: none;
          z-index: 5;
          mix-blend-mode: multiply;
        }

        .we-letter-text {
          position: absolute; inset: 0;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding-bottom: 14px;
        }
        .we-initials {
          font-family: 'Tangerine', serif;
          font-size: 40px;
          color: #EFBF04;
          letter-spacing: 0.12em;
          text-shadow: 0 1px 8px rgba(0,0,0,0.55);
          display: flex; align-items: center; gap: 0.2em;
        }
        .we-li-amp { font-size: 0.75em; color: rgba(239,191,4,0.7); }

        /* Revealed content - appears below envelope */
        .we-revealed-content {
          margin-top: 2rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.6rem;
        }

        .we-revealed-names {
          font-family: 'Tangerine', serif;
          font-size: 50px;
          font-weight: 400;
          font-style: italic;
          color: #fff;
          letter-spacing: 0.03em;
          line-height: 1;
          text-shadow: 0 2px 32px rgba(0,0,0,0.55);
          opacity: 0;
          transform: translateY(22px);
        }
        .we-revealed-amp { color: #EFBF04; font-style: normal; }
        .we-divider-line {
          width: clamp(40px, 8vw, 80px);
          height: 1px;
          background: linear-gradient(to right, transparent, #EFBF04, transparent);
          opacity: 0.8;
        }
        .we-revealed-date {
          font-family: 'Cinzel', serif;
          font-size: 18px;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: #EFBF04;
          opacity: 0;
          transform: translateY(16px);
        }
        .we-revealed-tagline {
          font-family: 'Cormorant Garamond', serif;
          font-size: 15px;
          font-style: italic;
          color: rgba(255,255,255,0.5);
          letter-spacing: 0.05em;
          opacity: 0;
          transform: translateY(12px);
        }

        .we-scroll-hint {
          font-family: 'Lato', sans-serif;
          font-weight: 300;
          font-size: 0.68rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(239,191,4,0.5);
          margin-top: clamp(1.2rem, 3vh, 2rem);
          display: flex; align-items: center; gap: 0.8rem;
          animation: we-float 2.2s ease-in-out infinite;
        }
        .we-hint-line {
          display: block; width: 28px; height: 1px;
          background: rgba(239,191,4,0.35);
        }
        @keyframes we-float {
          0%, 100% { transform: translateY(0);   opacity: 0.75; }
          50%       { transform: translateY(5px); opacity: 0.4;  }
        }

        /* Mobile responsive */
        @media (max-width: 640px) {
          .we-wrapper { width: 320px; height: 214px; }
          .we-lid {
            border-right-width: 160px;
            border-left-width: 160px;
            border-bottom-width: 107px;
          }
          .we-lid-one { border-top-width: 107px; }
          .we-lid-two { border-top-width: 107px; }
          .we-envelope-body {
            border-right-width: 160px;
            border-left-width: 160px;
            border-top-width: 107px;
            border-bottom-width: 107px;
          }
          .we-sprig { width: 90px; height: 90px; }
          .we-initials { font-size: 1.1rem; }
          .we-revealed-names { font-size: 1.8rem; }
        }

        @media (max-width: 480px) {
          .we-wrapper { width: 280px; height: 187px; }
          .we-lid {
            border-right-width: 140px;
            border-left-width: 140px;
            border-bottom-width: 93px;
          }
          .we-lid-one { border-top-width: 93px; }
          .we-lid-two { border-top-width: 93px; }
          .we-envelope-body {
            border-right-width: 140px;
            border-left-width: 140px;
            border-top-width: 93px;
            border-bottom-width: 93px;
          }
          .we-sprig { width: 70px; height: 70px; }
          .we-revealed-names { font-size: 1.5rem; }
        }
      `}</style>
    </>
  );
}