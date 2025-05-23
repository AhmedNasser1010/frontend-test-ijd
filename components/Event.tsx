export default function Event({
  date,
  title,
  subTitle,
}: {
  date: string;
  title: string;
  subTitle: string;
}): React.ReactNode {
  return (
    <div className="text-[21px] text-white bg-primary/55 p-[30px] flex-1">
      <span>{date}</span>
      <h3 className="text-[38px] leading-[84px] mt-[-20px]">{title}</h3>
      <span>{subTitle}</span>
    </div>
  );
}
