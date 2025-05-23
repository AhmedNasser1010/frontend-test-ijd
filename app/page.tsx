import Event from '@/components/Event';
import Image from 'next/image';
import Link from 'next/link';

interface EventType {
  id: string;
  date: string;
  title: string;
  subTitle: string;
}

const dummyEvents: EventType[] = [
  {
    id: 'ev1',
    date: '20/3/2025',
    title: 'عنوان رئيسي',
    subTitle: 'العنوان الفرعي هنا او التفاصيل',
  },
  {
    id: 'ev2',
    date: '20/3/2025',
    title: 'عنوان رئيسي',
    subTitle: 'العنوان الفرعي هنا او التفاصيل',
  },
  {
    id: 'ev3',
    date: '20/3/2025',
    title: 'عنوان رئيسي',
    subTitle: 'العنوان الفرعي هنا او التفاصيل',
  },
  {
    id: 'ev5',
    date: '20/3/2025',
    title: 'عنوان رئيسي',
    subTitle: 'العنوان الفرعي هنا او التفاصيل',
  },
];

export default function Home() {
  return (
    <main className="h-[calc(100vh-137px)] relative px-[140px]">
      <Image
        src="/home-page/main-img.svg"
        alt="home background"
        fill
        aria-hidden
        priority
        className="object-cover z-[-1] bg-[#48371f] w-full"
      />
      <section>
        <div className="text-white pt-[124px]">
          <h1 className="text-[72px] leading-[160px] mb-2">عنوان رئيسي</h1>
          <h2 className="text-[40px] leading-[89px] mb-8">
            العنوان الفرعي هنا او التفاصيل
          </h2>
          <Link
            href="#"
            className="text-tertiary text-[16px] leading-[35px] flex items-center gap-1 bg-secondary rounded-full w-fit px-8"
          >
            <span>اذهب إالى</span>
            <Image
              src="/arrowLeftMedium.svg"
              width={20}
              height={17}
              alt="arrow"
              aria-hidden
            />
          </Link>
        </div>
        <div className="w-full flex items-center justify-between gap-4 absolute bottom-[57px] left-1/2 -translate-x-1/2 px-[140px]">
          {dummyEvents.map((event) => (
            <Event
              key={event.id}
              date={event.date}
              title={event.title}
              subTitle={event.subTitle}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
