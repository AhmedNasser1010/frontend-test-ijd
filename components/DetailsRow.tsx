import { RaceDetailsTypes } from "@/app/page";

export default function DetailsRow({ raceDetails }: { raceDetails: RaceDetailsTypes }): React.ReactNode {
  return (
    <div>
      <h3 className='text-primary text-[34px] leading-[76px] mb-3'>{raceDetails.days}</h3>
      <div className='bg-[#F2F2F2] p-[7px] px-[51px] rounded-[46px] flex content-stretch justify-between gap-6'>
        <div className='flex flex-col text-center text-[20px] justify-center'>
          <span>{raceDetails.raceInfo.track}</span>
          <span>{raceDetails.raceInfo.date}</span>
        </div>

        <div className={`${raceDetails.status === 'white' ? "bg-white" : raceDetails.status === 'danger' ? "bg-danger" : "bg-quaternary"} py-[11px] px-[32px] flex gap-[20px] text-[16px] text-center rounded-[39px] justify-center min-w-[278px]`}>
          <div className='flex flex-col'>
            <span>{raceDetails.raceStats.distance}</span>
            <span>{raceDetails.raceStats.horseType}</span>
          </div>
          <div className='flex flex-col'>
            <span>{raceDetails.raceStats.surface}</span>
            <span>{raceDetails.raceStats.grade}</span>
          </div>
          <div className='flex flex-col'>
            <span>{raceDetails.raceStats.class}</span>
            <span>{raceDetails.raceStats.huh}</span>
          </div>
        </div>

        <div className='text-center text-[20px] flex flex-col justify-center'>
          <span>{raceDetails.jockeyInfo.name}</span>
          <span>{raceDetails.jockeyInfo.stats}</span>
        </div>

        <div className='flex flex-col text-center text-[16px] gap-[3px] justify-center'>
          {raceDetails.positions.map((position, index) => (
            <span key={index} className='bg-white px-[14px] py-[2px] rounded-[31px] w-fit'>{position}</span>
          ))}
        </div>

        <div className='text-[16px] flex flex-col justify-center'>
          <span>{raceDetails.starts.count}</span>
          <span>{raceDetails.starts.change}</span>
        </div>

        <div className='flex gap-[21px] justify-center'>
          <div>
            <div className='relative'>
              <span className='text-[15px] absolute top-0 left-[13px]'>1</span>
              <span className='text-[20px]'>{raceDetails.splitTimes.quarterMile.position}</span>
            </div>
            <span className='text-[14px]'>{raceDetails.splitTimes.quarterMile.time}</span>
          </div>
          <div>
            <div className='relative'>
              <span className='text-[15px] absolute top-0 left-[13px]'>3</span>
              <span className='text-[20px]'>{raceDetails.splitTimes.halfMile.position}</span>
            </div>
            <span className='text-[14px]'>{raceDetails.splitTimes.halfMile.time}</span>
          </div>
          <div>
            <div className='relative'>
              <span className='text-[15px] absolute top-0 left-[-19px] w-[40px]'>7 1/2</span>
              <span className='text-[20px]'>{raceDetails.splitTimes.sevenHalfFurlongs.position}</span>
            </div>
            <span className='text-[14px]'>{raceDetails.splitTimes.sevenHalfFurlongs.time}</span>
          </div>
        </div>

        <div className='justify-center'>
          <div className='relative w-fit'>
            <span className='text-[15px] absolute top-0 left-[-20px]'>{raceDetails.finalTime.furlongs}</span>
            <span className='text-[20px]'>{raceDetails.finalTime.position}</span>
          </div>
          <span className='text-[14px]'>{raceDetails.finalTime.time}</span>
        </div>

        <div className='flex justify-center'>
          <span className={`bg-${raceDetails.status} rounded-full w-fit text-[24px] px-[22px] flex items-center`}>{raceDetails.speedFigure}</span>
        </div>

        <div className='flex flex-col text-center text-[14px] justify-center'>
          {raceDetails.comments.map((comment, index) => (
            <span key={index}>{comment}</span>
          ))}
        </div>

        <div className='flex flex-col text-center text-[14px] justify-center'>
          {raceDetails.additionalInfo.map((info, index) => (
            <span key={index}>{info}</span>
          ))}
        </div>
      </div>
    </div>
  );
}