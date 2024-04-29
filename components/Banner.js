import Image from "next/image";
import logo from '@/public/logo.png'
import Link from "next/link";

export default function Banner() {
  return (
    <header className="grid md:grid-cols-2 gap-16 items-center my-20 -z-50">
      <div>
        <Image className="w-1/3 mb-8" src={logo} alt="MERN Stack Web Development" />
        <h1 className="font-semibold text-4xl my-4">ওয়েব ডেভেলপমেন্ট কোর্স</h1>
        <h3 className="mb-8">MERN Stack Web Development</h3>
        <p className="mb-16">এই কোর্সের মাধ্যমে কোন ধরণের পুর্ব অভিজ্ঞতা ছাড়াই জিরো নলেজ নিয়ে যে কেউ ওয়েব ডিজাইনিং কিভাবে শিখবে তা আলোচনা করা হয়েছে। কোর্সটিতে রয়েছে ...</p>
        <Link href='/corses' className=" bg-indigo-800 text-white hover:opacity-50 px-10 py-4 rounded-lg">কোর্স সমূহ</Link>
      </div>
      <div>
        <Image src={logo} alt="MERN Stack Web Development" />
      </div>
    </header>
  )
}
