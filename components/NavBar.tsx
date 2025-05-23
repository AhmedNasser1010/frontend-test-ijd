import Image from 'next/image';
import Link from 'next/link';
import { FaPlus } from 'react-icons/fa6';

export default function NavBar(): React.ReactNode {
  return (
    <nav className="w-full py-10 px-36 bg-primary flex justify-between items-center">
      <div className="flex items-center gap-[60px]">
        <Link href="/">
          <Image src="/logo.svg" width={193} height={58} alt="logo" />
        </Link>
        <div className="text-white text-[18px] leading-[40px] flex gap-[34px]">
          <Link href="/about">عن ميادين</Link>
          <Link href="/services">الخدمات</Link>
          <Link href="/competitions" className="flex items-center gap-2">
            <span>المسابقات</span>
            <FaPlus className="fill-secondary" />
          </Link>
          <Link href="/live-stream">البث المباشر</Link>
          <Link href="/contact">اتصل بنا</Link>
        </div>
      </div>
      <div className="flex items-center justify-end">
        <div className="flex items-center gap-2.5">
          <Image
            src="/icons/search.svg"
            width={20}
            height={20}
            alt="search icon"
          />
          <input
            type="search"
            inputMode='search'
            placeholder="بحث..."
            className="placeholder-white placeholder:text-[18px] text-white text-[18px] leading-[40px] outline-none border-0 w-16"
          />
        </div>
        <div className="flex items-center gap-2.5">
          <Image
            src="/icons/account.svg"
            width={21}
            height={21}
            alt="account icon"
            aria-hidden
          />
          <span className="text-white text-[16px] leading-[35px]">حسابي</span>
        </div>
      </div>
    </nav>
  );
}
