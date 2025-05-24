'use client';
import { useState } from 'react';
import { DaysType } from './CalendarSlider';
import Day from './Day';

type Props = {
  days: DaysType[];
  containerRef: React.RefObject<HTMLDivElement | null>;
};

export default function DaysSide({
  days,
  containerRef,
}: Props): React.ReactNode {
  const [active, setActive] = useState('');

  const handleActiveDialog = (eventId: string) => {
    setActive(eventId);
  };

  return (
    <div
      className="w-[100%] flex overflow-x-scroll scrollbar-hide"
      id="days-container"
      ref={containerRef}
    >
      {days.map((d) => (
        <Day
          key={d.date.toISOString()}
          dayNumber={d.dayNumber}
          dayName={d.dayName}
          fullDate={d.date}
          active={active}
          handleActiveDialog={handleActiveDialog}
        />
      ))}
    </div>
  );
}
