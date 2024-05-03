import React from 'react'
import calendar from "@/public/servis-icon/Calendar.png"
import certificate from "@/public/servis-icon/certificate.png"
import Community from "@/public/servis-icon/Community.png"
import jobGuideline from "@/public/servis-icon/job-guideline.png"
import Lifetime from "@/public/servis-icon/Lifetime.png"
import Live from "@/public/servis-icon/Live.png"
import ProBatch from "@/public/servis-icon/Pro batch.png"
import ProblemSolving from "@/public/servis-icon/Problem solving.png" 
import Progress from "@/public/servis-icon/Progress.png" 
import project from "@/public/servis-icon/project.png" 
import RecordedCourse from "@/public/servis-icon/Recorded course.png" 
import Standard from "@/public/servis-icon/Standard.png" 
import Image from 'next/image'

export default function Services() {
    return (
        <section className='my-40'>
            <div className='text-center'>
                <h1 className='font-bold text-3xl mb-4'>এক নজরে আমাদের কোর্স</h1>
                <p>এই কোর্সে যা যা থাকছে</p>
            </div>
            <div className='my-12 p-6 grid border rounded-2xl border-slate-600 bg-gray-800/50 md:grid-cols-2 lg:grid-cols-4'>
                <div className='p-6 border-e border-b border-slate-600'>
                    <div className='text-center flex flex-col items-center gap-3 transition duration-200 ease-out transform hover:scale-x-110 hover:scale-y-105'>
                        <Image className='w-12' src={calendar} alt='৭ মাসের গাইডেড জার্নি' ></Image>
                        <h4 className='text-l font-semibold'>৭ মাসের গাইডেড জার্নি</h4>
                        <p className='text-sm'>একদম বিগিনার ফ্রেন্ডলি ওয়েতে আপডেটেড কারিকুলাম</p>
                    </div>
                </div>
                <div className='text-center flex flex-col items-center gap-3 p-6 border-e border-b border-slate-600'>
                <Image className='w-12' src={project} alt='৩ টি ইন্ডাস্ট্রি স্ট্যান্ডার্ড প্রজেক্ট' ></Image>
                    <h4 className='text-l font-semibold'>৩ টি ইন্ডাস্ট্রি স্ট্যান্ডার্ড প্রজেক্ট</h4>
                    <p className='text-sm'>ইন্ডাস্ট্রি স্ট্যান্ডার্ড প্রজেক্ট এড করুন সিভিতে, থাকুন সবার চেয়ে এগিয়ে</p>
                </div>
                <div className='text-center flex flex-col items-center gap-3 p-6 border-e border-b border-slate-600'>
                <Image className='w-12' src={Standard} alt='২০টি প্র্যাক্টিস প্রোজেক্ট' ></Image>
                    <h4 className='text-l font-semibold'>২০টি প্র্যাক্টিস প্রোজেক্ট</h4>
                    <p className='text-sm'>যা শিখছেন তা দিয়েই করে ফেলুন প্র্যাক্টিস প্রজেক্ট, ঝালাই করুন দক্ষতা</p>
                </div>
                <div className='text-center flex flex-col items-center gap-3 p-6 border-b border-slate-600'>
                    <Image className='w-12' src={Progress} alt='প্রোগ্রেস ট্র্যাকিং' ></Image>
                    <h4 className='text-l font-semibold'>প্রোগ্রেস ট্র্যাকিং</h4>
                    <p className='text-sm'>লিডার বোর্ডে দেখুন নিজের পজিশন উইথ প্রগ্রেস</p>
                </div>
                <div className='text-center flex flex-col items-center gap-3 p-6 border-e border-slate-600'>
                    <Image className='w-12' src={ProblemSolving} alt='প্রতিদিন ৩ বেলা সাপোর্ট ক্লাস' ></Image>
                    <h4 className='text-l font-semibold'>প্রতিদিন ৩ বেলা সাপোর্ট ক্লাস</h4>
                    <p className='text-sm'>প্র্যাক্টিস করতে গিয়ে প্রবলেমে পড়লে লাইভ সাপোর্ট নিন সকাল ১১ টায়, বিকাল ৪ টায় এবং রাত ৮ টায়</p>
                </div>
                <div className='text-center flex flex-col items-center gap-3 p-6 border-e border-slate-600'>
                    <Image className='w-12' src={Community} alt='কমিউনিটি সাপোর্ট' ></Image>
                    <h4 className='text-l font-semibold'>কমিউনিটি সাপোর্ট</h4>
                    <p className='text-sm'>থাকুন প্রোগ্রেসিভ কমিউনিটির সাথে অলওয়েজ </p>
                </div>
                <div className='text-center flex flex-col items-center gap-3 p-6 border-e  border-slate-600'>
                    <Image className='w-12' src={jobGuideline} alt='জব মার্কেট গাইডলাইন' ></Image>
                    <h4 className='text-l font-semibold'>জব মার্কেট গাইডলাইন</h4>
                    <p className='text-sm'>ইন্ডাস্ট্রি এক্সপার্টদের কাছে পান জব মার্কেটে প্রবেশ করার পুর্নাঙ্গ নির্দেশনা</p>
                </div>
                <div className='text-center flex flex-col items-center gap-3 p-6 '>
                    <Image className='w-12' src={ProBatch} alt='প্রো ব্যাচ' ></Image>
                    <h4 className='text-l font-semibold'>প্রো ব্যাচ</h4>
                    <p className='text-sm'>৭০% এর বেশি মার্ক পেয়ে নিশ্চিত করুন এক্সট্রা সাপোর্ট</p>
                </div>
            </div>
        </section>
    )
}
