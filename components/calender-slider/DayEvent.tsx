import { useEffect, useState, useRef } from 'react';
import { EventTypes } from './Day';
import Image from 'next/image';
import { IoCalendarOutline } from 'react-icons/io5';
import { FaRegClock } from 'react-icons/fa6';
import { timeToAm } from '@/utils/timeToAm';
import ArrowButton from '../ArrowButton';

type Props = {
  fullDate: Date;
  event: EventTypes;
  handleActiveDialog: (eventId: string) => void;
  active: string;
};

export default function DayEvent({
  fullDate,
  event,
  handleActiveDialog,
  active,
}: Props): React.ReactNode {
  const [eventStatus, setEventStatus] = useState<
    'passed' | 'ongoing' | 'incoming'
  >('incoming');
  const dayEventRef = useRef<HTMLDivElement | null>(null);
  const [dialogPosition, setDialogPosition] = useState([0, 0]);

  useEffect(() => {
    if (dayEventRef.current) {
      const rect = dayEventRef.current.getBoundingClientRect();
      const absolutePosition = {
        top: rect.top + window.scrollY, // Distance from top of document
        left: rect.left + window.scrollX, // Distance from left of document
        bottom: rect.bottom + window.scrollY, // Distance from bottom of viewport + scroll
        right: rect.right + window.scrollX, // Distance from right of viewport + scroll
        width: rect.width, // Element width
        height: rect.height, // Element height
      };
      setDialogPosition([
        Number(absolutePosition.bottom.toFixed()),
        Number(absolutePosition.right.toFixed()),
        Number(absolutePosition.width.toFixed()),
      ]);
    }
  }, []);

  useEffect(() => {
    const now = new Date();
    const eventStart = new Date(event.date.from);
    const eventEnd = new Date(event.date.to);

    if (now > eventEnd) {
      setEventStatus('passed');
    } else if (now >= eventStart && now <= eventEnd) {
      setEventStatus('ongoing');
    } else {
      setEventStatus('incoming');
    }
  }, [event, fullDate]);

  return (
    <div ref={dayEventRef}>
      <span
        className={`block bg-white size-[40px] border-11 cursor-pointer ${eventStatus === 'incoming' ? 'border-primary' : eventStatus === 'passed' ? 'border-muted' : 'border-secondary'} rounded-full`}
        onClick={() => handleActiveDialog(event.id)}
      ></span>
      <div
        className={`absolute bg-white p-6 rounded-[10px] ${active === event.id ? 'block' : 'hidden'} min-w-[380px]`}
        style={{
          boxShadow: '0px 0px 10px #00000029',
          top: `${dialogPosition[0]}px`,
          left: `${dialogPosition[1] + 11}px`,
        }}
      >
        <Image
          src="/icons/X.svg"
          width={18}
          height={18}
          alt="exit icon"
          aria-hidden
          className="absolute top-6 left-6 cursor-pointer"
          onClick={() => handleActiveDialog('')}
        />
        <div>
          <div>
            <h4 className="text-primary text-[27px] leading-[60px]">
              {event?.title}
            </h4>
            <span className="block text-primary text-[18px] pb-[11px]">
              {event?.class}
            </span>
          </div>

          <div className="flex items-center gap-5 mb-[7px]">
            <div className="flex items-center gap-2">
              <IoCalendarOutline className="text-[20px]" />
              {new Date(event.date.from).toLocaleDateString('ar-EG', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
                numberingSystem: 'latn',
              })}
            </div>
            <div className="flex items-center gap-2">
              <FaRegClock className="text-[20px]" />
              <span>
                {timeToAm(event.date.from)} - {timeToAm(event.date.to)}
              </span>
            </div>
          </div>

          <div className="text-[20px] leading-[44px]">
            <div className="flex">
              <span className="w-[71px]">المسافة</span>
              <span className="text-primary pr-[11px]">
                {event.distance} كم
              </span>
            </div>
            <div className="flex">
              <span className="w-[71px]">النوع</span>
              <span className="text-primary pr-[11px]">{event.type}</span>
            </div>
            <div className="flex">
              <span className="w-[71px]">العمر</span>
              <span className="text-primary pr-[11px]">{event.age} سنوات</span>
            </div>
            <div className="flex">
              <span className="w-[71px]">الجائزة</span>
              <span className="text-primary pr-[11px]">
                {Number(event.prize).toLocaleString()} ر.س
              </span>
            </div>
          </div>

          <div className='absolute left-6 bottom-6 w-[110px]'>
            <ArrowButton title="تفاصيل" />
          </div>
        </div>
      </div>
    </div>
  );
}
