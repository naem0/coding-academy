import React from 'react'
import frontEnd from '@/public/front-end.png'
import ModalBtn from "./ModalBtn";
import Image from 'next/image';
import Link from 'next/link';

export default function Corses() {
    return (
        <section className="my-20">
            <div className='text-center my-12'>
                <h1 className='font-bold text-3xl mb-4'>আমাদের কোর্স সমূহ</h1>
                <p>এই কোর্সে যা যা থাকছে</p>
            </div>
            <div className="grid gap-20 mb-8 ">
                <div className="grid md:grid-cols-2 md:gap-16 gap-8 items-center w-full h-full rounded-xl">
                    <div className='bg-indigo-800 rounded-xl'>
                        <Image className='w-full rounded-xl' src={frontEnd} alt="MERN Stack Web Development"/>
                    </div>
                    <div className='p-8 md:p-0'>
                        <h1 className="font-semibold text-2xl mb-4">ওয়েব ডেভেলপমেন্ট কোর্স</h1>
                        <h3 className="mb-6">MERN Stack Web Development</h3>
                        <p>এই কোর্সের মাধ্যমে কোন ধরণের পুর্ব অভিজ্ঞতা ছাড়াই জিরো নলেজ নিয়ে যে কেউ ওয়েব ডিজাইনিং কিভাবে শিখবে তা আলোচনা করা হয়েছে। কোর্সটিতে রয়েছে ...</p>
                        <div className='flex justify-between mt-8'>
                            <ModalBtn className="bg-indigo-800 text-white"></ModalBtn>
                            <Link className=' bg-indigo-800 px-8 py-3 font-bold rounded-2xl hover:opacity-50 ' href='/corses/froentend'>View More</Link>
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-16 gap-8 items-center w-full h-full rounded-xl">
                    <div className='p-8 md:p-0'>
                        <h1 className="font-semibold text-2xl mb-4">ওয়েব ডেভেলপমেন্ট কোর্স</h1>
                        <h3 className="mb-6">MERN Stack Web Development</h3>
                        <p>এই কোর্সের মাধ্যমে কোন ধরণের পুর্ব অভিজ্ঞতা ছাড়াই জিরো নলেজ নিয়ে যে কেউ ওয়েব ডিজাইনিং কিভাবে শিখবে তা আলোচনা করা হয়েছে। কোর্সটিতে রয়েছে ...</p>

                        <div className='flex justify-between mt-8'>
                            <ModalBtn className="bg-indigo-800 text-white"></ModalBtn>
                            <Link className=' bg-indigo-800 px-8 py-4 font-bold rounded-2xl hover:opacity-50 ' href='/corses/backend'>View More</Link>
                        </div>
                    </div>
                    <div className='bg-indigo-800 rounded-xl'>
                        <Image className='w-full h-full rounded-xl' src={frontEnd} alt="MERN Stack Web Development" />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-16 gap-8 items-center w-full h-full rounded-xl">
                    <div className='bg-indigo-800 rounded-xl'>
                        <Image className='w-full rounded-xl' src={frontEnd} alt="MERN Stack Web Development" />
                    </div>
                    <div className='p-8 md:p-0'>
                        <h1 className="font-semibold text-2xl mb-4">সম্পূর্ণ ওয়েব ডেভেলপমেন্ট কোর্স</h1>
                        <h3 className="mb-6">MERN Stack Web Development</h3>
                        <p>এই কোর্সের মাধ্যমে কোন ধরণের পুর্ব অভিজ্ঞতা ছাড়াই জিরো নলেজ নিয়ে যে কেউ ওয়েব ডিজাইনিং কিভাবে শিখবে তা আলোচনা করা হয়েছে। কোর্সটিতে রয়েছে ...</p>

                        <div className='flex justify-between mt-8'>
                            <ModalBtn className="bg-indigo-800 text-white"></ModalBtn>
                            <Link className=' bg-indigo-800 px-8 py-4 font-bold rounded-2xl hover:opacity-50 ' href='/corses/fullstack'>View More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
