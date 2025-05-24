import { useMemo, useState } from 'react';
import DayEvent from './DayEvent';

export interface EventTypes {
  id: string;
  title: string;
  class: string;
  date: {
    from: number;
    to: number;
  };
  distance: number;
  type: 'رملي';
  age: number;
  prize: number;
  detailsPath: string;
}

const dummyEvents: EventTypes[] = [
  {
    id: 'asd',
    title: 'اسم السباق',
    class: 'التصنيف',
    date: {
      from: 1747737000000,
      to: 1747744200000,
    },
    distance: 4,
    type: 'رملي',
    age: 3,
    prize: 100000,
    detailsPath: '#',
  },
  {
    id: 'asda',
    title: 'اسم السباق',
    class: 'التصنيف',
    date: {
      from: 1747918800000,
      to: 1747929600000,
    },
    distance: 4,
    type: 'رملي',
    age: 3,
    prize: 100000,
    detailsPath: '#',
  },
  {
    id: 'asvd',
    title: 'اسم السباق',
    class: 'التصنيف',
    date: {
      from: 1748044800000,
      to: 1748088000000,
    },
    distance: 4,
    type: 'رملي',
    age: 3,
    prize: 100000,
    detailsPath: '#',
  },
  {
    id: 'asyd',
    title: 'اسم السباق',
    class: 'التصنيف',
    date: {
      from: 1748088000000,
      to: 1748106000000,
    },
    distance: 4,
    type: 'رملي',
    age: 3,
    prize: 100000,
    detailsPath: '#',
  },
  {
    id: 'aszd',
    title: 'اسم السباق',
    class: 'التصنيف',
    date: {
      from: 1748106000000,
      to: 1748116800000,
    },
    distance: 4,
    type: 'رملي',
    age: 3,
    prize: 100000,
    detailsPath: '#',
  },
  {
    id: 'asddf',
    title: 'اسم السباق',
    class: 'التصنيف',
    date: {
      from: 1748314800000,
      to: 1748318400000,
    },
    distance: 4,
    type: 'رملي',
    age: 3,
    prize: 100000,
    detailsPath: '#',
  },
  {
    id: 'xyz',
    title: 'اسم السباق',
    class: 'التصنيف',
    date: {
      from: 1748577600000,
      to: 1748584800000,
    },
    distance: 4,
    type: 'رملي',
    age: 3,
    prize: 100000,
    detailsPath: '#',
  },
];

interface Props {
  dayNumber: string;
  dayName: string;
  fullDate: Date;
  active: string;
  handleActiveDialog: (eventId: string) => void
}

export default function Day({
  dayNumber,
  dayName,
  fullDate,
  active,
  handleActiveDialog
}: Props): React.ReactNode {
  const dayEvents = useMemo(
    () =>
      dummyEvents.filter((event) => {
        const eventDate = new Date(event.date.from);
        return (
          eventDate.getFullYear() === fullDate.getFullYear() &&
          eventDate.getMonth() === fullDate.getMonth() &&
          eventDate.getDate() === fullDate.getDate()
        );
      }),
    [fullDate],
  );

  return (
    <div className="border-muted border-1">
      <div className="p-4 px-[30px] flex flex-col text-center border-b-3 border-muted">
        <span
          className={`text-primary ${new Date().toDateString() === fullDate.toDateString() && 'text-secondary'} text-[57px]`}
        >
          {dayNumber}
        </span>
        <span className="text-tertiary text-[21px]">{dayName}</span>
      </div>
      <div className="grid grid-flow-col grid-rows-3 gap-2 p-4 place-content-center ">
        {dayEvents.length > 0 &&
          dayEvents.map((event) => (
            <DayEvent
              key={event.id}
              event={event}
              fullDate={fullDate}
              handleActiveDialog={handleActiveDialog}
              active={active}
            />
          ))}
      </div>
    </div>
  );
}
