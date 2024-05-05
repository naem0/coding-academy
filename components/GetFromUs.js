import React from 'react'

export default function GetFromUs() {
    return (
        <section className='my-40'>
            <div className='text-center my-16'>
                <h1 className='font-bold text-3xl mb-4'>কোর্স করে <span className='text-indigo-800'>কি পাবেন</span></h1>
                <p>কোর্সটি শেষ করার পর আপনি আমাদের থেকে যা কিছু পাবেন</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-10">
                <div className="rounded-3xl cursor-pointer space-y-4 border border-gray-600 p-8 lg:w-96 hover:bg-indigo-800">
                    <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#07A8ED]/10 text-white mb-6">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="text-[#07A8ED]" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.06 14.68a1 1 0 0 0 .46.6l1.91 1.11v2.2a1 1 0 0 0 1 1h2.2l1.11 1.91a1 1 0 0 0 .86.5 1 1 0 0 0 .51-.14l1.9-1.1 1.91 1.1a1 1 0 0 0 1.37-.36l1.1-1.91h2.2a1 1 0 0 0 1-1v-2.2l1.91-1.11a1 1 0 0 0 .37-1.36L20.76 12l1.11-1.91a1 1 0 0 0-.37-1.36l-1.91-1.1v-2.2a1 1 0 0 0-1-1h-2.2l-1.1-1.91a1 1 0 0 0-.61-.46 1 1 0 0 0-.76.1L12 3.26l-1.9-1.1a1 1 0 0 0-1.36.36L7.63 4.43h-2.2a1 1 0 0 0-1 1v2.2l-1.9 1.1a1 1 0 0 0-.37 1.37l1.1 1.9-1.1 1.91a1 1 0 0 0-.1.77zm3.22-3.17L4.39 10l1.55-.9a1 1 0 0 0 .49-.86V6.43h1.78a1 1 0 0 0 .87-.5L10 4.39l1.54.89a1 1 0 0 0 1 0l1.55-.89.91 1.54a1 1 0 0 0 .87.5h1.77v1.78a1 1 0 0 0 .5.86l1.54.9-.89 1.54a1 1 0 0 0 0 1l.89 1.54-1.54.9a1 1 0 0 0-.5.86v1.78h-1.83a1 1 0 0 0-.86.5l-.89 1.54-1.55-.89a1 1 0 0 0-1 0l-1.51.89-.89-1.54a1 1 0 0 0-.87-.5H6.43v-1.78a1 1 0 0 0-.49-.81l-1.55-.9.89-1.54a1 1 0 0 0 0-1.05z"></path></svg>
                    </div>
                    <h2 className="text-center font-semibold">কোর্স সার্টিফিকেট</h2>
                    <p className="text-center">যারা কোর্সের এনরোল করবে এবং টাইমে ফিনিশ করবে এ তারা কোর্স সার্টিফিকেট পাবেন। সার্টিফিকেটটির সফট কপি অনলাইনেই ডাউনলোড করতে পারবেন এবং প্রিন্টেড কপি দেয়া হবে।</p>
                </div>
                <div className="rounded-3xl cursor-pointer space-y-4 border p-8 lg:w-96 border-gray-600 hover:bg-indigo-800">
                    <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#07A8ED]/10 text-white mb-6">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="text-[#07A8ED]" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.06 14.68a1 1 0 0 0 .46.6l1.91 1.11v2.2a1 1 0 0 0 1 1h2.2l1.11 1.91a1 1 0 0 0 .86.5 1 1 0 0 0 .51-.14l1.9-1.1 1.91 1.1a1 1 0 0 0 1.37-.36l1.1-1.91h2.2a1 1 0 0 0 1-1v-2.2l1.91-1.11a1 1 0 0 0 .37-1.36L20.76 12l1.11-1.91a1 1 0 0 0-.37-1.36l-1.91-1.1v-2.2a1 1 0 0 0-1-1h-2.2l-1.1-1.91a1 1 0 0 0-.61-.46 1 1 0 0 0-.76.1L12 3.26l-1.9-1.1a1 1 0 0 0-1.36.36L7.63 4.43h-2.2a1 1 0 0 0-1 1v2.2l-1.9 1.1a1 1 0 0 0-.37 1.37l1.1 1.9-1.1 1.91a1 1 0 0 0-.1.77zm3.22-3.17L4.39 10l1.55-.9a1 1 0 0 0 .49-.86V6.43h1.78a1 1 0 0 0 .87-.5L10 4.39l1.54.89a1 1 0 0 0 1 0l1.55-.89.91 1.54a1 1 0 0 0 .87.5h1.77v1.78a1 1 0 0 0 .5.86l1.54.9-.89 1.54a1 1 0 0 0 0 1l.89 1.54-1.54.9a1 1 0 0 0-.5.86v1.78h-1.83a1 1 0 0 0-.86.5l-.89 1.54-1.55-.89a1 1 0 0 0-1 0l-1.51.89-.89-1.54a1 1 0 0 0-.87-.5H6.43v-1.78a1 1 0 0 0-.49-.81l-1.55-.9.89-1.54a1 1 0 0 0 0-1.05z"></path></svg>
                    </div>
                    <h2 className="text-center font-semibold">আনলিমিটেড এবং লাইফটাইম সাপোর্ট</h2>
                    <p className="text-center">কোর্স শেষ হওয়ার পরও লাইফটাইম ওয়েব ডেভেলপমেন্ট রিলিটেড সকল সমস্যা জন্য রয়েছে কমিউনিটি সাপোর্ট । পিছিয়ে পড়লে স্পেশাল গাইডলাইন এবং কাউন্সেলিং সেশন পাবে। আমরা তোমাদের সর্বোচ্চ সাপোর্ট দেওয়ার জন্য সবসময় প্রস্তুত।</p>
                </div>
                <div className="rounded-3xl cursor-pointer space-y-4 border p-8 lg:w-96 border-gray-600 hover:bg-indigo-800">
                    <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#07A8ED]/10 text-white mb-6">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="text-[#07A8ED]" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.06 14.68a1 1 0 0 0 .46.6l1.91 1.11v2.2a1 1 0 0 0 1 1h2.2l1.11 1.91a1 1 0 0 0 .86.5 1 1 0 0 0 .51-.14l1.9-1.1 1.91 1.1a1 1 0 0 0 1.37-.36l1.1-1.91h2.2a1 1 0 0 0 1-1v-2.2l1.91-1.11a1 1 0 0 0 .37-1.36L20.76 12l1.11-1.91a1 1 0 0 0-.37-1.36l-1.91-1.1v-2.2a1 1 0 0 0-1-1h-2.2l-1.1-1.91a1 1 0 0 0-.61-.46 1 1 0 0 0-.76.1L12 3.26l-1.9-1.1a1 1 0 0 0-1.36.36L7.63 4.43h-2.2a1 1 0 0 0-1 1v2.2l-1.9 1.1a1 1 0 0 0-.37 1.37l1.1 1.9-1.1 1.91a1 1 0 0 0-.1.77zm3.22-3.17L4.39 10l1.55-.9a1 1 0 0 0 .49-.86V6.43h1.78a1 1 0 0 0 .87-.5L10 4.39l1.54.89a1 1 0 0 0 1 0l1.55-.89.91 1.54a1 1 0 0 0 .87.5h1.77v1.78a1 1 0 0 0 .5.86l1.54.9-.89 1.54a1 1 0 0 0 0 1l.89 1.54-1.54.9a1 1 0 0 0-.5.86v1.78h-1.83a1 1 0 0 0-.86.5l-.89 1.54-1.55-.89a1 1 0 0 0-1 0l-1.51.89-.89-1.54a1 1 0 0 0-.87-.5H6.43v-1.78a1 1 0 0 0-.49-.81l-1.55-.9.89-1.54a1 1 0 0 0 0-1.05z"></path></svg>
                    </div>
                    <h2 className=" text-center font-semibold">জব প্লেসমেন্ট সাপোর্ট</h2>
                    <p className="text-center">যারা  অন টাইমে কোর্স সম্পূর্ণ করবে তাদের জন্য রয়েছে জব সাপোর্ট। তাদেরকে স্পেশাল ইন্টারভিউ ক্র্যাকিং ট্রেনিং দেয়া হবে।প্রফেশনাল সিভি/রেজুমি বানানো,মেইল করা,জব এপ্লাই থেকে ইন্টারভিউ কিভাবে ক্র্যাক করতে হবে সব কিছুর জন্য তাদের টেনিং করানো হবে । তারা ডেডিকেটেডভাবে কাজ করবে আমাদের জব প্লেসমেন্ট টিমের সাথে।</p>
                </div>
                
            </div>
        </section>
    )
}
