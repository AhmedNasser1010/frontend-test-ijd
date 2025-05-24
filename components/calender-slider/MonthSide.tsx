'use client';
import Image from 'next/image';
import { DaysType } from './CalendarSlider';

interface Props {
  visibleDays: DaysType[];
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export default function MonthSide({ visibleDays, containerRef }: Props): React.ReactNode {
  const scrollTo = (direction: 'left' | 'right') => {
    const container = containerRef.current;

    if (container) {
      const elementWidth =
        (container.firstElementChild as HTMLElement)?.offsetWidth || 0;
      const currentScroll = container.scrollLeft;
      const newScroll =
        direction === 'right'
          ? currentScroll + elementWidth
          : currentScroll - elementWidth;
      container.scroll({
        left: newScroll,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="w-[300px]">
      <div className="border-b-3 border-muted">
        <h3 className="text-[36px] leading-[36px] pb-[53px]">
          {visibleDays[0]?.date?.toLocaleString('ar-EG', { month: 'long' })}
        </h3>
        <div className="flex items-center justify-between gap-[9px] pb-[27px] w-fit">
          <Image
            src="/icons/right-arrow-circle.svg"
            width={35}
            height={35}
            alt="right arrow"
            className="cursor-pointer"
            onClick={() => scrollTo('right')}
          />
          <Image
            src="/icons/left-arrow-circle.svg"
            width={35}
            height={35}
            alt="left arrow"
            className="cursor-pointer"
            onClick={() => scrollTo('left')}
          />
        </div>
      </div>
      <div className="text-primary text-[25px] leading-[56px] pt-[30px] text-center">
        الأحداث
      </div>
    </div>
  );
}
