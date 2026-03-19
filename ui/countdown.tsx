'use client';

import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isOver: boolean;
}

interface WeddingCountdownProps {
  theme?: 'light' | 'dark';
  className?: string;
}

export default function WeddingCountdown({
  theme = 'light',
  className = ''
}: WeddingCountdownProps) {
  const WEDDING_DATE = new Date('2026-06-15T12:00:00+02:00');
  const START_DATE = new Date('2025-06-15T12:00:00+02:00'); // exactly 1 year before

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0, hours: 0, minutes: 0, seconds: 0, isOver: false
  });

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = WEDDING_DATE.getTime() - now.getTime();

      if (difference <= 0) {
        const timeSince = Math.abs(difference);
        return {
          days: Math.floor(timeSince / (1000 * 60 * 60 * 24)),
          hours: Math.floor((timeSince / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((timeSince / (1000 * 60)) % 60),
          seconds: Math.floor((timeSince / 1000) % 60),
          isOver: true
        };
      } else {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
          isOver: false
        };
      }
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number): string => num.toString().padStart(2, '0');

  if (!isClient) return null;

  const totalDuration = WEDDING_DATE.getTime() - START_DATE.getTime();
  const elapsed = Date.now() - START_DATE.getTime();
  const progressPercent = timeLeft.isOver
    ? 100
    : Math.max(0, Math.min(100, (elapsed / totalDuration) * 100));

  const message = timeLeft.isOver ? {
    title: "We're Married!",
    subtitle: "Celebrating our forever",
  } : {
    title: "Counting down to I do!",
    subtitle: "June 15, 2026 • 12:00 PM",
  };

  const timeUnits = [
    { label: 'Days',    value: timeLeft.days },
    { label: 'Hours',   value: formatNumber(timeLeft.hours) },
    { label: 'Minutes', value: formatNumber(timeLeft.minutes) },
    { label: 'Seconds', value: formatNumber(timeLeft.seconds) },
  ];

  return (
    <div className={`w-full max-w-5xl mx-auto px-4 py-10 md:p-12 ${className}`}>

      <div className="text-center mb-8 md:mb-12">
        <h2 className="font-tangerine text-4xl md:text-5xl lg:text-6xl text-white mb-2 md:mb-4">
          {message.title}
        </h2>
        <p className="text-base md:text-xl font-light tracking-wider text-[#EFBF04]">
          {message.subtitle}
        </p>
      </div>

      <div className="flex flex-row justify-center gap-3 md:gap-6 mb-10 md:mb-12">
        {timeUnits.map((unit) => (
          <div
            key={unit.label}
            className="flex-1 max-w-[80px] md:max-w-[140px] border border-white/30 rounded-sm p-3 md:p-6 text-center text-white hover:border-[#EFBF04] transition-all duration-300"
          >
            <div className="text-2xl md:text-5xl lg:text-6xl mb-1 md:mb-2 ">
              {unit.value}
            </div>
            <div className="text-[10px] md:text-sm font-light tracking-widest uppercase text-[#EFBF04]/80">
              {unit.label}
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-md mx-auto px-2 md:px-0">
        <div className="flex justify-between items-center mb-2">
          <span className="text-white/40 text-xs tracking-widest uppercase">Journey</span>
          <span className="text-white/60 text-xs">
            {timeLeft.isOver ? 'Forever begins' : `${timeLeft.days} days to go`}
          </span>
        </div>
        <div className="h-px bg-white/10 w-full relative">
          <div
            className="h-px bg-[#EFBF04] transition-all duration-1000 absolute top-0 left-0"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {timeLeft.isOver && (
        <div className="mt-8 text-center">
          <p className="text-white/40 text-sm tracking-wide">
            Thank you for being part of our special day
          </p>
        </div>
      )}

    </div>
  );
}