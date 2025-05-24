'use client';
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
        />
      ))}
    </div>
  );
}
