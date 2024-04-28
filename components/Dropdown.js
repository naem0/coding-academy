import Link from 'next/link'
import React from 'react'

export default function Dropdown() {
    return (
        <div class="">

            <div class="dropdown inline-block relative">
                <button class="bg-indigo-800 py-2 px-4 rounded inline-flex items-center">
                    <span class="mr-1">এনরোল করো</span>
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                </button>
                <ul class="dropdown-menu absolute hidden pt-1 bg-gray-900/75  rounded-b-lg w-full backdrop-blur-sm shadow-md shadow-indigo-800/25 border border-indigo-800/50">
                    <li class=""><Link class="rounded-t  hover:text-indigo-800 py-2 px-4 block whitespace-no-wrap" href="#">Front-end</Link></li>
                    <li class=""><Link class=" hover:text-indigo-800 py-2 px-4 block whitespace-no-wrap" href="#">Backend</Link></li>
                </ul>
            </div>

        </div>
    )
}
