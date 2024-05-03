import React from 'react'
import frontEnd from '@/public/fontend.png'
import backend from '@/public/node-js.jpg'
import fullstack from '@/public/fullstack.png'
import Image from 'next/image';
import Link from 'next/link';

export default function FontendBanner() {
    return (
        <section className="my-20">
            <div className="grid md:grid-cols-2 md:gap-16 gap-8 items-center w-full h-full rounded-xl">
                <div className='p-8 md:p-0'>
                    <h1 className="font-semibold text-2xl mb-4">ফ্রন্ট এন্ড ওয়েব ডেভেলপমেন্ট কোর্স</h1>
                    <h3 className="mb-6">JavaScript and React Ecosystem Frontend Development</h3>
                    <p>React.js ডেভেলপার হিসেবে আপনার ক্যারিয়ার গড়তে জয়েন করে ফেলুন ফ্রন্ট এন্ড ওয়েব ডেভেলপমেন্ট কোর্সে। এই কোর্সের মাধ্যমে কোন ধরণের পুর্ব অভিজ্ঞতা ছাড়াই জিরো নলেজ নিয়ে যে কেউ ওয়েব ডিজাইনিং এন্ড ওয়েব ডেভেলপমেন্ট শিখানো হবে।</p>
                    <div className=' mt-12'>
                        <Link className=' bg-indigo-800 px-8 py-4 font-bold rounded-2xl hover:opacity-50 ' href='/enroll'>এনরোল করো</Link>
                    </div>
                </div>
                <div className='bg-indigo-800 rounded-xl'>
                    <Image className='w-full rounded-xl' src={frontEnd} alt="MERN Stack Web Development" />
                </div>
            </div>
        </section>
    )
}
