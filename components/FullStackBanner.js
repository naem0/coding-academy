import React from 'react'
import frontEnd from '@/public/fontend.png'
import backend from '@/public/node-js.jpg'
import fullstack from '@/public/fullstack.png'
import Image from 'next/image';
import Link from 'next/link';

export default function FullStackBanner() {
    return (
        <section className='my-20'>
            <div className="grid md:grid-cols-2 md:gap-16 gap-8 items-center w-full h-full rounded-xl">
                <div className='p-8 md:p-0'>
                    <h1 className="font-semibold text-2xl mb-4"><span className='text-indigo-800'>কমপ্লিট</span> ওয়েব ডেভেলপমেন্ট কোর্স</h1>
                    <h3 className="mb-6">MERN Stack Web Development</h3>
                    <p>ফ্রন্টএন্ড ওয়েব ডেভেলপমেন্ট এবং ব্যাকেন্ড ওয়েব ডেভেলপমেন্ট - ২ টা ক্যারিয়ার ট্র্যাকের দরজাই ওপেন রাখার জন্য আমাদের রয়েছে কমপ্লিট (ফুলস্ট্যাক) ওয়েব ডেভেলপমেন্ট (MERN Stack) কোর্স।</p>

                    <div className='mt-12'>
                        <Link className=' bg-indigo-800 px-8 py-4 font-bold rounded-2xl hover:opacity-50 ' href='/enroll'>এনরোল করো</Link>
                    </div>
                </div>
                <div className='bg-indigo-800 rounded-xl'>
                    <Image className='w-full rounded-xl' src={fullstack} alt="MERN Stack Web Development" />
                </div>
            </div>
        </section>
    )
}
