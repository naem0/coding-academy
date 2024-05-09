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
const Forendservices = () => {
    return (
        <section className='my-40'>
            <div className='text-center'>
                <h1 className='font-bold text-3xl mb-4'>এক নজরে <span className='text-indigo-800'>আমাদের কোর্স</span> </h1>
                <p>এই কোর্সে যা যা থাকছে</p>
            </div>
            <div className='my-12 p-6 grid border rounded-2xl border-slate-600 bg-gray-800/50 md:grid-cols-2 lg:grid-cols-4'>
                <div className='p-6 border-e border-b border-slate-600'>
                    <div className='text-center flex flex-col items-center gap-3 transition duration-200 ease-out transform hover:scale-x-110 hover:scale-y-105'>
                        <Image className='w-12' src={calendar} alt='৭ মাসের গাইডেড জার্নি' ></Image>
                        <h4 className='text-l font-semibold'> ৩ মাসের
                            গাইডেড জার্নি</h4>
                        <p className='text-sm'>একদম বিগিনার ফ্রেন্ডলি ওয়েতে আপডেটেড কারিকুলাম</p>
                    </div>
                </div>
                <div className='text-center flex flex-col items-center gap-3 p-6 border-e border-b border-slate-600'>
                    <Image className='w-12' src={project} alt='একাধিক ইন্ডাস্ট্রি স্ট্যান্ডার্ড প্রজেক্ট' ></Image>
                    <h4 className='text-l font-semibold'> ২ টি
                        ইন্ডাস্ট্রি স্ট্যান্ডার্ড প্রজেক্ট</h4>
                    <p className='text-sm'>ইন্ডাস্ট্রি স্ট্যান্ডার্ড প্রজেক্ট এড করুন সিভিতে, থাকুন সবার চেয়ে এগিয়ে</p>
                </div>
                <div className='text-center flex flex-col items-center gap-3 p-6 border-e border-b border-slate-600'>
                    <Image className='w-12' src={Standard} alt='একাধিক প্র্যাক্টিস প্রোজেক্ট' ></Image>
                    <h4 className='text-l font-semibold'> ১০টির বেশি
                        প্র্যাক্টিস প্রোজেক্ট</h4>
                    <p className='text-sm'>প্রত্যেক মডিউলে ও থাকছে একটি বা দুইটি করে প্র্যাকটিস প্রজেক্ট যা শিখছেন তা দিয়েই করে ফেলুন প্র্যাক্টিস প্রজেক্ট, ঝালাই করুন দক্ষতা</p>
                </div>
                <div className='text-center flex flex-col items-center gap-3 p-6 border-b border-slate-600 '>
                    <Image className='w-12' src={ProblemSolving} alt='মডিউল আকারে শেখানোর পদ্ধতি
' ></Image>
                    <h4 className='text-l font-semibold'>মডিউল আকারে শেখানোর পদ্ধতি


                    </h4>
                    <p className='text-sm'> ধাপে ধাপে একটার পর একটা টপিক শিখতে পারেন। ওয়েব ডেভেলপমেন্ট বিভিন্ন টেকনোলজি ডকুমেন্টেশন ধরে ধরে শিখানো হবে। সেই সাথে প্রজেক্ট ভিত্তিক লার্নিং
                    </p>
                </div>
                <div className='text-center flex flex-col items-center gap-3 p-6 border-e border-b border-slate-600'>
                    <Image className='w-12' src={Progress} alt='প্রোগ্রেস ট্র্যাকিং' ></Image>
                    <h4 className='text-l font-semibold'>প্রোগ্রেস ট্র্যাকিং</h4>
                    <p className='text-sm'>অ্যাসাইনমেন্ট এন্ড কুইজ নিজের রেজাল্ট পাওয়ার মাধ্যমে  নিজের পজিশন দেখুন</p>
                </div>
                <div className='text-center flex flex-col items-center gap-3 p-6 border-e border-b border-slate-600'>
                    <Image className='w-12' src={ProblemSolving} alt='প্রতিদিন 2 বেলা সাপোর্ট ক্লাস' ></Image>
                    <h4 className='text-l font-semibold'>প্রতিদিন 2 বেলা সাপোর্ট ক্লাস</h4>
                    <p className='text-sm'>প্র্যাক্টিস করতে গিয়ে প্রবলেমে পড়লে লাইভ সাপোর্ট নিন সকাল ১১ টায় এবং রাত ৮ টায়</p>
                </div>
                <div className='text-center flex flex-col items-center gap-3 p-6 border-e border-b border-slate-600'>
                    <Image className='w-12' src={Community} alt='কমিউনিটি সাপোর্ট' ></Image>
                    <h4 className='text-l font-semibold'>কমিউনিটি সাপোর্ট</h4>
                    <p className='text-sm'> ফেসবুক এবং ডিস্কোড
                        থাকুন প্রোগ্রেসিভ কমিউনিটির গ্রুপের
                        সাথে থাকুন অলওয়েজ </p>
                </div>
                <div className='text-center flex flex-col items-center gap-3 p-6  border-b  border-slate-600'>
                    <Image className='w-12' src={jobGuideline} alt='জব মার্কেট গাইডলাইন' ></Image>
                    <h4 className='text-l font-semibold'> ল্যাবে  প্রাকটিসের সুবিধা </h4>
                    <p className='text-sm'>অফলাইন ক্লাসে সকাল টু সন্ধা পর্যন্ত প্রাকটিস জন্য coding Academy কম্পিউটার ল্যাব ব্যাবহার করতে পারবে।</p>
                </div>
                <div className='text-center flex flex-col items-center gap-3 p-6 border-e border-slate-600'>
                    <Image className='w-12' src={ProBatch} alt='প্রো ব্যাচ' ></Image>
                    <h4 className='text-l font-semibold'>জব প্লেসমেন্ট সাপোর্ট</h4>
                    <p className='text-sm'>ইন্ডাস্ট্রি এক্সপার্টদের কাছে পান জব মার্কেটে প্রবেশ করার পুর্নাঙ্গ নির্দেশনা</p>
                </div>
                <div className='text-center flex flex-col items-center gap-3 p-6 border-e  border-slate-600 '>
                    <Image className='w-12' src={ProBatch} alt='সার্টিফিকেট' ></Image>
                    <h4 className='text-l font-semibold'>ফ্রিল্যান্সিং মার্কেট গাইডলাইন

                    </h4>
                    <p className='text-sm'>ইন্ডাস্ট্রি এক্সপার্টদের কাছে পান ফ্রিল্যান্সিং মার্কেট গাইডলাইন প্রবেশ করার পুর্নাঙ্গ নির্দেশনা
                    </p>
                </div>
                <div className='text-center flex flex-col items-center gap-3 p-6 border-e  border-slate-600 '>
                    <Image className='w-12' src={project} alt='অ্যাসাইনমেন্ট প্রজেক্ট' ></Image>
                    <h4 className='text-l font-semibold'>অ্যাসাইনমেন্ট প্রজেক্ট

                    </h4>
                    <p className='text-sm'>                অ্যাসাইনমেন্ট প্রজেক্ট করার মাধ্যমে নিজের দক্ষতা যাচাই করার সুযোগ


                    </p>
                </div>
                <div className='text-center flex flex-col items-center gap-3 p-6 border-slate-600 '>
                    <Image className='w-12' src={Standard} alt='প্রো ব্যাচ' ></Image>
                    <h4 className='text-l font-semibold'>সার্টিফিকেট

                    </h4>
                    <p className='text-sm'>কোর্স অন টাইমে শেষ করার পর পাবেন একটি সার্টিফিকেট
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Forendservices;