import Link from 'next/link'
import React from 'react'

export default function CorseEnrolRabon({ data }) {
    return (
        <div className='bg-indigo-800/25 backdrop-blur-sm z-20 shadow-md shadow-indigo-800/25 bottom-0 sticky border-b border-indigo-800/50'>
            <div className="text-gray-300 container w-[90%]  mx-auto">
                <div className="flex flex-wrap items-center justify-between mx-auto py-2">
                    <div className="">
                        <h5 className='text-sm mb-1'>{data.title}</h5>
                        <h3 className='text-3xl font-semibold'>৳{data.price}</h3>
                    </div>
                    <div>
                        <Link href="/enroll" className="bg-indigo-800 py-2 px-4 rounded inline-flex items-center">
                            এনরোল
                        </Link>
                        <p className='text-xs mt-2'>{data.endtime}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
