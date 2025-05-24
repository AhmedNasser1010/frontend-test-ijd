'use client';
import MonthSide from './MonthSide';
import DaysSide from './DaysSide';
import { useCallback, useEffect, useRef, useState } from 'react';

export interface DaysType {
  dayNumber: string;
  dayName: string;
  date: Date;
}

interface Props {
  prevDays: number;
  endDate: number[];
}

export default function CalendarSlider({
  prevDays,
  endDate: endDateNum,
}: Props): React.ReactNode {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [days, setDays] = useState<DaysType[]>([]);
  const [visibleDays, setVisibleDays] = useState<DaysType[]>([days[0]]);

  // Get the visible days
  const getVisibleDays = useCallback((): DaysType[] => {
    const container = containerRef.current;
    if (!container) return [];
    const children = Array.from(container.children) as HTMLElement[];
    return days.filter((_, idx) => {
      const child = children[idx];
      if (!child) return false;
      const rect = child.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      return (
        rect.left >= containerRect.left && rect.right <= containerRect.right
      );
    });
  }, [days, containerRef]);

  // Calculate the days to be displayed
  // - DO NOT use useMemo to avoid the SSR Hydration errors
  useEffect(() => {
    const startDate = new Date();
    const endDate = new Date(endDateNum[0], endDateNum[1] - 1, endDateNum[2]);
    startDate.setDate(startDate.getDate() - prevDays);
    const tempDays: DaysType[] = [];
    const date = new Date(startDate);

    while (date < endDate) {
      tempDays.push({
        dayNumber: date.getDate().toString(),
        dayName: date.toLocaleDateString('ar-EG', { weekday: 'long' }),
        date: new Date(date),
      });
      date.setDate(date.getDate() + 1);
    }

    setDays(tempDays);
  }, [prevDays, endDateNum]);

  // Update the value of visibleDays while scrolling
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const visible = getVisibleDays();
      setVisibleDays([visible[visible.length - 1]]);
    };

    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [containerRef, getVisibleDays]);

  // Initial value of visibleDays state
  useEffect(() => {
    const visible = getVisibleDays();
    setVisibleDays([visible[visible.length - 1]]);
  }, [getVisibleDays]);

  return (
    <div>
      <span className="text-[22px] leading-[36px] font-bold">
        {visibleDays[0]?.date?.getFullYear()}
      </span>
      <div className="w-full flex">
        <MonthSide visibleDays={visibleDays} containerRef={containerRef} />
        <DaysSide days={days} containerRef={containerRef} />
      </div>
    </div>
  );
}
