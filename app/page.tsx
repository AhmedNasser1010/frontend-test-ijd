import ArrowButton from '@/components/ArrowButton';
import CalendarSlider from '@/components/calender-slider/CalendarSlider';
import DetailsRow from '@/components/DetailsRow';
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

export type RaceDetailsTypes = {
  id: string;
  status: 'danger' | 'white' | 'quaternary';
  days: string;
  raceInfo: {
    track: string;
    date: string;
  };
  raceStats: {
    distance: string;
    surface: string;
    horseType: string;
    grade: string;
    class: string;
    huh: string;
  };
  jockeyInfo: {
    name: string;
    stats: string;
  };
  positions: string[];
  starts: {
    count: string;
    change: string;
  };
  splitTimes: {
    quarterMile: {
      position: string;
      time: string;
    };
    halfMile: {
      position: string;
      time: string;
    };
    sevenHalfFurlongs: {
      position: string;
      time: string;
    };
  };
  finalTime: {
    furlongs: string;
    position: string;
    time: string;
  };
  speedFigure: string;
  comments: string[];
  additionalInfo: string[];
}

const dummyRacesDetails: RaceDetailsTypes[] = [
  {
    id: 'asd',
    status: 'danger',
    days: "49 يوم",
    raceInfo: {
      track: "BHP",
      date: "25 إبريل"
    },
    raceStats: {
      distance: "1M",
      surface: "Turf",
      horseType: "Yielding",
      grade: "Firecracker",
      class: "3+",
      huh: "G2"
    },
    jockeyInfo: {
      name: "M Gutierrez",
      stats: "117 | L | 12-1"
    },
    positions: ["P3", "P6"],
    starts: {
      count: "4 بداية",
      change: "-"
    },
    splitTimes: {
      quarterMile: {
        position: "2",
        time: "23.29"
      },
      halfMile: {
        position: "3",
        time: "47.23"
      },
      sevenHalfFurlongs: {
        position: "5",
        time: "59.82"
      }
    },
    finalTime: {
      furlongs: "11",
      position: "6",
      time: "1:12.71"
    },
    speedFigure: "81",
    comments: [
      "1 نص مكتوب للتوضيح",
      "2 نص مكتوب للتوضيح",
      "3 نص مكتوب للتوضيح"
    ],
    additionalInfo: [
      "1 نص مكتوب للتوضيح",
      "2 نص مكتوب للتوضيح",
      "3 نص مكتوب للتوضيح"
    ]
  },
  {
    id: 'qwe',
    status: 'white',
    days: "249 يوم - 2011",
    raceInfo: {
      track: "BHP",
      date: "25 إبريل"
    },
    raceStats: {
      distance: "1M",
      surface: "Dirt",
      horseType: "Wet Fast",
      grade: "Allowance",
      class: "3YO",
      huh: "$58K"
    },
    jockeyInfo: {
      name: "M Gutierrez",
      stats: "117 | L | 12-1"
    },
    positions: ["P3", "P6"],
    starts: {
      count: "4 بداية",
      change: "-"
    },
    splitTimes: {
      quarterMile: {
        position: "2",
        time: "23.29"
      },
      halfMile: {
        position: "3",
        time: "47.23"
      },
      sevenHalfFurlongs: {
        position: "5",
        time: "59.82"
      }
    },
    finalTime: {
      furlongs: "11",
      position: "6",
      time: "1:12.71"
    },
    speedFigure: "61",
    comments: [
      "1 نص مكتوب للتوضيح",
      "2 نص مكتوب للتوضيح",
      "3 نص مكتوب للتوضيح"
    ],
    additionalInfo: [
      "1 نص مكتوب للتوضيح",
      "2 نص مكتوب للتوضيح",
      "3 نص مكتوب للتوضيح"
    ]
  },
  {
    id: 'xyz',
    status: "quaternary",
    days: "49 يوم",
    raceInfo: {
      track: "BHP",
      date: "25 إبريل"
    },
    raceStats: {
      distance: "6F",
      surface: "Synth",
      horseType: "Fast",
      grade: "Allowance",
      class: "2YO",
      huh: "$48K"
    },
    jockeyInfo: {
      name: "M Gutierrez",
      stats: "117 | L | 12-1"
    },
    positions: ["P3", "P6"],
    starts: {
      count: "4 بداية",
      change: "-"
    },
    splitTimes: {
      quarterMile: {
        position: "2",
        time: "23.29"
      },
      halfMile: {
        position: "3",
        time: "47.23"
      },
      sevenHalfFurlongs: {
        position: "5",
        time: "59.82"
      }
    },
    finalTime: {
      furlongs: "11",
      position: "6",
      time: "1:12.71"
    },
    speedFigure: "54",
    comments: [
      "1 نص مكتوب للتوضيح",
      "2 نص مكتوب للتوضيح",
      "3 نص مكتوب للتوضيح"
    ],
    additionalInfo: [
      "1 نص مكتوب للتوضيح",
      "2 نص مكتوب للتوضيح",
      "3 نص مكتوب للتوضيح"
    ]
  }
]

export default function Home() {
  return (
    <main>
      <section className="h-[calc(100vh-137px)] relative px-[140px]">
        <Image
          src="/home-page/main-img.svg"
          alt="home background"
          fill
          aria-hidden
          priority
          className="object-cover z-[-1] bg-[#48371f] w-full"
        />
        <div className="text-white pt-[124px]">
          <h1 className="text-[72px] leading-[160px] mb-2">عنوان رئيسي</h1>
          <h2 className="text-[40px] leading-[89px] mb-8">
            العنوان الفرعي هنا او التفاصيل
          </h2>
          <ArrowButton title="اذهب إالى" />
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
      <section className="bg-white pt-[30px] pb-[110px] px-[140px]">
        <h2 className="text-primary text-6xl leading-[136px] pb-[11px]">
          رزنامة السباقات
        </h2>
        <div>
          <CalendarSlider prevDays={5} endDate={[2027, 2, 1]} />
        </div>
      </section>
      <section className='bg-[#F2F2F2] py-[60px] px-[140px]'>
        <h2 className='text-primary text-[61px]'>القسم المحذوف سيكون هنا</h2>
      </section>
      <section className='bg-white pt-6 pb-[110px] px-[140px]'>
        <div className='flex flex-col gap-3'>
          {
            dummyRacesDetails.map((raceDetails) => <DetailsRow key={raceDetails.id} raceDetails={raceDetails} />)
          }
          <div className='bg-primary text-white flex items-center justify-between gap-6 rounded-[25px] p-[9px] text-[15px] mt-[32px]'>
            <Link href="#" className='cursor-pointer'>
              <Image src='/icons/back-button-white.svg' width={31} height={31} alt='right arrow' aria-hidden />
            </Link>

            <span>Jul20 SAR Dirt Gd: 4F in 51 1\5 (23 of 34) B</span>

            <span>Jul27 SAR Turf tr.tFrm: 5F in 57 1\5 (1 of 2) B</span>

            <span>Aug3 SAR Dirt Gd: 4F in 49 2\5 (28 of 49) B</span>

            <span className='text-[19px] pl-20 font-bold'>WORKOUTS</span>
          </div>
        </div>
      </section>
    </main>
  );
}
