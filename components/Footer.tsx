import Link from 'next/link';
import Image from 'next/image';
import { FaSnapchatGhost } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaTiktok } from 'react-icons/fa';

export default function Footer(): React.ReactNode {
  return (
    <footer className="bg-accent w-full">
      <div className="py-[72px] px-[146px] flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-14 mb-16">
            <Link href="/">
              <Image src="/logo.svg" width={193} height={58} alt="logo" aria-hidden />
            </Link>
            <div className="flex items-center text-white text-2xl gap-3">
              <a href="#" rel="noopener noreferrer">
                <FaSnapchatGhost />
              </a>
              <a href="#" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="#" rel="noopener noreferrer">
                <FaXTwitter />
              </a>
              <a href="#" rel="noopener noreferrer">
                <FaTiktok />
              </a>
            </div>
          </div>
          <div>
            <div className="text-white text-[20px] flex gap-2 w-[calc(100%-20px)] max-w-[700px] justify-evenly mr-5">
              <Link href="/">عن ميادين</Link>
              <Link href="/">الخدمات</Link>
              <Link href="/">المسابقات</Link>
              <Link href="/">البث المباشر</Link>
              <Link href="/">اتصل بنا</Link>
            </div>
          </div>
        </div>
        <div>
          <div className="text-white mb-[21px]">
            <h4 className="text-2xl">النشرة البريدية</h4>
            <p className="text-[17px] leading-[38px]">النص أو الوصف يكتب هنا</p>
          </div>
          <div className="flex items-center gap-[7px]">
            <input
              type="email"
              inputMode="email"
              placeholder="name@domain.com"
              className="bg-white placeholder-black/30 outline-none border-0 rounded-[10px] w-[338px] h-[55px] pr-5"
            />
            <button className="w-[150px] h-[55px] text-[20px] text-white bg-primary rounded-[10px]">
              اشتراك
            </button>
          </div>
        </div>
      </div>
      <div className="bg-black text-white text-[16px] leading-[35px] py-2.5 px-[146px] flex items-center justify-between border-t-1 border-[#3d3d3d]">
        <span>جميع الحقوق محفوظة</span>
        <div className="flex items-center gap-1 text-left select-none">
          <Link href="#">سياسة الخصوصية</Link>
          <span>|</span>
          <Link href="#">أحكام وشروط</Link>
          <span>|</span>
          <Link href="#">ميثاق العملاء</Link>
          <span>|</span>
          <Link href="#">أدوات الموقع</Link>
        </div>
      </div>
    </footer>
  );
}
