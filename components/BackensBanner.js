import React from 'react'
import frontEnd from '@/public/fontend.png'
import backend from '@/public/node-js.jpg'
import fullstack from '@/public/fullstack.png'
import Image from 'next/image';
import Link from 'next/link';

export default function BackendBanner() {
    return (
        <section className="my-20">
            <div className="grid md:grid-cols-2 md:gap-16 gap-8 items-center w-full h-full rounded-xl">
                    <div className='p-8 md:p-0'>
                        <h1 className="font-semibold text-2xl mb-4">ব্যাক-এন্ড ওয়েব ডেভেলপমেন্ট কোর্স</h1>
                        <h3 className="mb-6">MongoDB Database and Node Ecosystem Backend Development</h3>
                        <p>এই কোর্সেই ব্যাকেন্ড, ড্যাটাবেজ সবচেয়ে রিসোর্সফুল ও আপডেটেড কারিকুলামে এবং  বাংলা ভাষায় ব্যাক-এন্ড ওয়েব ডেভেলপমেন্ট ও Node JS ডেভেলপার হবার বেস্ট জার্নি অপেক্ষা করছে আপনার জন্য।</p>

                        <div className=' mt-12'>
                        <Link className=' bg-indigo-800 px-8 py-4 font-bold rounded-2xl hover:opacity-50 ' href='/enroll'>এনরোল করো</Link>
                        </div>
                    </div>
                    <div className='bg-indigo-800 rounded-xl'>
                        <Image className='w-full h-full rounded-xl' src={backend} alt="MERN Stack Web Development" />
                    </div>
                </div>
        </section>
    )
}
