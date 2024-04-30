import Image from "next/image";
import logo from '@/public/logo.png'
import Link from "next/link";

export default function Banner() {
  return (
    <header className="grid md:grid-cols-2 gap-16 items-center my-20 -z-50">
      <div>
        {/* <Image className="w-1/3 mb-8" src={logo} alt="MERN Stack Web Development" /> */}
        <h3 className="mb-6 font-semibold text-4xl">Build your career with coding Academy</h3>
        <h1 className="font-semibold text-xl my-4">আপনি কি ওয়েব ডেভেলপমেন্টের জগতে ডুব দিতে প্রস্তুত?</h1>
        <p className="mb-10">একজন দক্ষ ওয়েব ডেভেলপার হওয়ার জন্য আপনার যা যা জানা দরকার তা আমাদের  কোর্সে অন্তর্ভুক্ত রয়েছে।বিশেষজ্ঞ গাইডেন্স ,অভিজ্ঞ ইন্সট্রাক্টর, ক্যারিয়ার গাইডলাইন এন্ড জব প্লেসমেন্ট সাপোর্ট জন্য এখনই এনরোল করুন। প্রোগ্রামিং বা ওয়েব ডেভেলপমেন্ট আপনার ক্যারিয়ার শুরু করুন Coding Academy দক্ষ গাইডলাইনের সাথে!</p>
        <Link href='/corses' className=" bg-indigo-800 text-white hover:opacity-50 px-10 py-4 rounded-lg">কোর্স সমূহ</Link>
      </div>
      <div>
        <Image src={logo} alt="MERN Stack Web Development" />
      </div>
    </header>
  )
}
