import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/logo.png'
import ModalBtn from './ModalBtn'

export default function Footer() {
    return (
        <footer className='bg-indigo-800 pt-20 pb-10'>
            <div className="w-[95%] 800px:w-full 800px:max-w-[85%] mx-auto px-2 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
                    <div className="space-y-3">
                        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <Image src={logo} className="h-12 w-48" alt="Coding Academy Logo" />
                        </Link>
                        <ul className="space-y-4 mt-8">
                            <li className='mt-8'><ModalBtn className ="bg-gray-100  text-indigo-800"></ModalBtn></li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-[20px] font-[600]  text-white">About</h3>
                        <ul className="space-y-4">
                            <li><Link className="text-base  text-gray-300 hover:text-white" href="/corses">Courses</Link></li>
                            <li><Link className="text-base  text-gray-300 hover:text-white" href="/privacy-policy">Privacy Policy</Link></li>
                            <li><Link className="text-base  text-gray-300 hover:text-white" href="/#faq">FAQ</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-[20px] font-[600]  text-white">Social Links</h3>
                        <ul className="space-y-4">
                            <li><Link className="text-base  text-gray-300 hover:text-white" target="_blank" href="https://www.facebook.com/profile.php?id=100064719486588">Facebook</Link></li>
                            <li><Link className="text-base  text-gray-300 hover:text-white" target="_blank" href="#">Linkedin</Link></li>
                            <li><Link className="text-base text-gray-300 hover:text-white" target="_blank" href="#">github</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-[20px] font-[600] text-white pb-3">Contact Info</h3>
                        <p className="text-base  text-gray-300 hover:text-white pb-2">Call Us: +8801310881055</p>
                        <Link href='https://maps.app.goo.gl/e7bDa8ZoKsvZATxi9' target="_blank"className="text-base  text-gray-300 hover:text-white pb-2 ">Address: Pulish Line, Shariatpur, Dhaka,Bangladesh.</Link>
                        <p className=" text-gray-300 hover:text-white  pb-2 ">Mail Us: <span className="lowercase text-[15px]">codingacademy055@gmail.com</span></p>
                    </div>
                </div>

                <p className="text-center  text-white mt-6">Copyright © 2024 Coding Academy | All Rights Reserved</p>
            </div>
        </footer>
    )
}
