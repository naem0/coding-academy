import React from 'react'
import frontEnd from '@/public/fontend.png'
import backend from '@/public/node-js.jpg'
import fullstack from '@/public/fullstack.png'
import Image from 'next/image';
import Link from 'next/link';

export default function Corses() {
    return (
        <section className="my-20">
            <div className='text-center my-12'>
                <h1 className='font-bold text-3xl mb-4'>আমাদের কোর্স সমূহ</h1>
                <p>ফ্রন্ট এন্ড ও ব্যাক-এন্ড এর সমন্বয়ই আমাদের ফুলস্ট্যাক ওয়েব ডেভেলপমেন্ট কোর্স</p>
            </div>
            <div className="grid gap-20 mb-8 ">
                <div className="grid md:grid-cols-2 md:gap-16 gap-8 items-center w-full h-full rounded-xl">
                    <div className='bg-indigo-800 rounded-xl'>
                        <Image className='w-full rounded-xl' src={frontEnd} alt="MERN Stack Web Development"/>
                    </div>
                    <div className='p-8 md:p-0'>
                        <h1 className="font-semibold text-2xl mb-4">ফ্রন্ট এন্ড ওয়েব ডেভেলপমেন্ট কোর্স</h1>
                        <h3 className="mb-6">JavaScript and React Ecosystem Frontend Development</h3>
                        <p>React.js ডেভেলপার হিসেবে আপনার ক্যারিয়ার গড়তে জয়েন করে ফেলুন ফ্রন্ট এন্ড ওয়েব ডেভেলপমেন্ট কোর্সে। এই কোর্সের মাধ্যমে কোন ধরণের পুর্ব অভিজ্ঞতা ছাড়াই জিরো নলেজ নিয়ে যে কেউ ওয়েব ডিজাইনিং এন্ড ওয়েব ডেভেলপমেন্ট শিখানো হবে।</p>
                        <div className='flex justify-between mt-8'>
                        <Link className=' bg-indigo-800 px-8 py-4 font-bold rounded-2xl hover:opacity-50 ' href='/enroll'>এনরোল করো</Link>
                            <Link className=' bg-indigo-800 px-8 py-3 font-bold rounded-2xl hover:opacity-50 ' href='/corses/froentend'>View More</Link>
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-16 gap-8 items-center w-full h-full rounded-xl">
                    <div className='p-8 md:p-0'>
                        <h1 className="font-semibold text-2xl mb-4">ব্যাক-এন্ড ওয়েব ডেভেলপমেন্ট কোর্স</h1>
                        <h3 className="mb-6">MongoDB Database and Node Ecosystem Backend Development</h3>
                        <p>এই কোর্সেই ব্যাকেন্ড, ড্যাটাবেজ সবচেয়ে রিসোর্সফুল ও আপডেটেড কারিকুলামে এবং  বাংলা ভাষায় ব্যাক-এন্ড ওয়েব ডেভেলপমেন্ট ও Node JS ডেভেলপার হবার বেস্ট জার্নি অপেক্ষা করছে আপনার জন্য।</p>

                        <div className='flex justify-between mt-8'>
                        <Link className=' bg-indigo-800 px-8 py-4 font-bold rounded-2xl hover:opacity-50 ' href='/enroll'>এনরোল করো</Link>
                            <Link className=' bg-indigo-800 px-8 py-4 font-bold rounded-2xl hover:opacity-50 ' href='/corses/backend'>View More</Link>
                        </div>
                    </div>
                    <div className='bg-indigo-800 rounded-xl'>
                        <Image className='w-full h-full rounded-xl' src={backend} alt="MERN Stack Web Development" />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-16 gap-8 items-center w-full h-full rounded-xl">
                    <div className='bg-indigo-800 rounded-xl'>
                        <Image className='w-full rounded-xl' src={fullstack} alt="MERN Stack Web Development" />
                    </div>
                    <div className='p-8 md:p-0'>
                        <h1 className="font-semibold text-2xl mb-4">কমপ্লিট  ওয়েব ডেভেলপমেন্ট কোর্স</h1>
                        <h3 className="mb-6">MERN Stack Web Development</h3>
                        <p>ফ্রন্টএন্ড ওয়েব ডেভেলপমেন্ট এবং ব্যাকেন্ড ওয়েব ডেভেলপমেন্ট - ২ টা ক্যারিয়ার ট্র্যাকের দরজাই ওপেন রাখার জন্য আমাদের রয়েছে কমপ্লিট (ফুলস্ট্যাক) ওয়েব ডেভেলপমেন্ট (MERN Stack) কোর্স।</p>

                        <div className='flex justify-between mt-8'>
                            <Link className=' bg-indigo-800 px-8 py-4 font-bold rounded-2xl hover:opacity-50 ' href='/enroll'>এনরোল করো</Link>
                            <Link className=' bg-indigo-800 px-8 py-4 font-bold rounded-2xl hover:opacity-50 ' href='/corses/fullstack'>View More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
