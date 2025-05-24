import Link from 'next/link';
import Image from 'next/image';

interface Props {
  link?: string;
  title: string;
}

export default function ArrowButton({ link = "#", title }: Props): React.ReactNode {
  return (
    <Link
      href={link}
      className="text-tertiary text-[16px] leading-[35px] flex items-center gap-1 bg-secondary rounded-full w-fit px-8"
    >
      <span>{title}</span>
      <Image
        src="/arrowLeftMedium.svg"
        width={20}
        height={17}
        alt="arrow"
        aria-hidden
      />
    </Link>
  )
}