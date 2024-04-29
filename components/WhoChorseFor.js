import React from 'react'

export default function WhoChorseFor() {
    const datas = [
        {
            id: 1,
            title: "যারা শুন্য থেকে শুরু করে ওয়েব ডেভেলপার হতে চান",
        },
        {
            id: 2,
            title: "ইউনিভার্সিটি কিংবা কলেজের শিক্ষার্থী যিনি ডেভেলপার হতে চান",
        },
        {
            id: 3,
            title: "যিনি ওয়েব ডেভেলপমেন্ট শেখার  বিগিনার স্টেজে আছেন",
        },
        {
            id: 4,
            title: "যারা প্রজেক্ট করে ওয়েব ডেভেলপমেন্ট শিখতে চাচ্ছেন",
        },
        {
            id: 5,
            title: "নিজের বিজনেসের জন্য ওয়েবসাইট বানাতে চান",
        },
    ]
    return (
        <section>
            <div className="">
                <div classNameName="">
                    <h1 className="">কোর্সটি আপনারই জন্য</h1>
                </div>
                <div className='text-center mb-12'>
                    <h1 className='font-bold text-3xl mb-4'>এই কোর্সটি আপনারই জন্য</h1>
                    <p>এই কোর্সটি যাদের জন্য</p>
                </div>
                <div className="grid lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                    {
                        datas.map((data) =>
                            <div className="flex gap-6 z-0 hover:scale-x-110 hover:scale-y-105  duration-200 ease-out rounded-2xl bg-gray-900 hover:bg-indigo-800 p-6" >
                                <img className='h-6' src="https://cdn.ostad.app/public/upload/2023-10-29T15-06-39.968Z-checkbox-circle-line.svg" />
                                <p className="button_text">{data.title}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}
