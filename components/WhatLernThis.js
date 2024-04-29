import Image from "next/image";


export default function WhatLernThis({datas}) {
    
    return (
        
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4 md:gap-6 lg:gap-8 mb-8 ">
                {
                    datas.map((data) =>
                        <div key={data.id} data-aos="zoom-in" className=" flex gap-6 items-center z-0 text-center hover:scale-x-110 hover:scale-y-105  duration-200 ease-out rounded-2xl bg-gray-900 hover:bg-indigo-800 px-8 py-6">
                            
                            <div className="w-10">
                                <Image className="" src={data.logo} alt={data.title} />
                            </div>
                            <p className="mt-3 text-gray-200 mb-3 font-semibold text-[16px]">{data.title}</p>
                            
                        </div>
                    )
                }
            </div>
    )
}
