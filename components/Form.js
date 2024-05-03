import Image from "next/image";
import bacBtn from "@/public/back-arrow.svg";
import Link from "next/link";



export default function Form() {
    return (
        <div className=' py-10'>
            <Link href='/'><Image className="text-white w-6" src={bacBtn}></Image></Link>
            <div id="ff-compose"></div>
            <script async defer src="https://formfacade.com/include/115790938280652452742/form/1FAIpQLSe1jDjRnBD_de15BXd1cZ9Oi5cdaQ2RjmdF-VRkFZMyb1wJrQ/classic.js?div=ff-compose"></script>

        </div>
    )
}
