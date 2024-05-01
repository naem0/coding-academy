import React from 'react'
import ModalBtn from './ModalBtn'
import Dropdown from './Dropdown'

export default function TumiRady() {
    return (
        <section className='my-20 '>
            <div className="bg-indigo-800 mx-auto lg:max-w-[80%] rounded-3xl transition duration-200 ease-out banner-bg-md transform hover:scale-x-110 hover:scale-y-105 ">
                <div className=" mt-5 px-12 py-10 grid md:grid-cols-3 lg:grid-cols-4">
                    <div className=" col-span-2">
                        <h1 className='text-4xl font-bold mb-6'>তুমি রেডি তো...?</h1>
                        <p className='mb-8'>একজন দক্ষ প্রোগ্রমার হতে চাইলে এই কোর্সে জয়েন করো। শিখতে গেলে যা যা লাগবে সেগুলো প্রোভাইড করব আমরা তোমার শুধু লেগে থাকতে হবে, হার্ড ওয়ার্ক করতে হবে।</p>

                            <Dropdown className ="bg-gray-100 text-indigo-800"></Dropdown>
                            
                    </div>
                </div>
            </div>
        </section>
    )
}
