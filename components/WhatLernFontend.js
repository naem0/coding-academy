import html from '@/public/icon/html.webp'
import css from '@/public/icon/css.webp'
import git from '@/public/icon/git-icon.png'
import github from '@/public/icon/github.png'
import cromeDeb from '@/public/icon/chrome-dev-logo-icon.png'
import vscode from '@/public/icon/vscode.png'
import bootstrap from '@/public/icon/bootstrap.png'
import tailwindcss from '@/public/icon/tailwindcss.png'
import sass from '@/public/icon/sass.png'
import JavaScriptlogo from '@/public/icon/JavaScript-logo.png'
import jsdom from '@/public/icon/jsdom.png'
import BOM from '@/public/icon/BOM.jpg'
import json from '@/public/icon/json.png'
import ES6 from '@/public/icon/ES6.jpg'
import webapi from '@/public/icon/webapi.png'
import reactLogo from '@/public/icon/react.png'
import figma from '@/public/icon/Figma.png'
import reactQuery from '@/public/icon/react-query.png'
import firebase from '@/public/icon/firebase.png'
import nextjs from '@/public/icon/nextjs.webp'
import WhatLernThis from "./WhatLernThis";
import { Noto_Sans_Javanese } from 'next/font/google'

export default function WhatLernFontend() {
    const fontendDatas = [
        {
            id: 1,
            logo: html,
            title: 'HTML 5',
            discripition: ''
        },
        {
            id: 2,
            logo: css,
            title: 'CSS 3',
            discripition: ''
        },
        {
            id: 3,
            logo: git,
            title: 'Git',
            discripition: ''
        },
        {
            id: 4,
            logo: github,
            title: 'GitHub',
            discripition: ''
        },
        {
            id: 5,
            logo: cromeDeb,
            title: 'Crome Deb',
            discripition: ''
        },
        {
            id: 6,
            logo: vscode,
            title: 'VS Code',
            discripition: ''
        },
        {
            id: 7,
            logo: bootstrap,
            title: 'Bootstrap',
            discripition: 'bootstrap'
        },
        {
            id: 8,
            logo: tailwindcss,
            title: 'Tailwind CSS',
            discripition: ''
        },
        {
            id: 9,
            logo: sass,
            title: 'SASS',
            discripition: ''
        },
        
        {
            id: 10,
            logo: JavaScriptlogo,
            title: 'JavaScript',
            discripition: ''
        },
        
        {
            id: 11,
            logo: jsdom,
            title: 'JavaScript DOM',
            discripition: ''
        },
        {
            id: 12,
            logo: BOM,
            title: 'BOM',
            discripition: ''
        },
        {
            id: 13,
            logo: json,
            title: 'json',
            discripition: ''
        },
        {
            id: 14,
            logo: ES6,
            title: 'ES6',
            discripition: ''
        },
        {
            id: 15,
            logo: webapi,
            title: 'Web API',
            discripition: ''
        },
        {
            id: 16,
            logo: reactLogo,
            title: 'React',
            discripition: ''
        },
        {
            id: 17,
            logo: figma,
            title: 'Figma',
            discripition: ''
        },
        {
            id: 18,
            logo: reactQuery,
            title: 'Reacy Query',
            discripition: ''
        },
        {
            id: 19,
            logo: firebase,
            title: 'Firebase',
            discripition: ''
        },
        {
            id: 20,
            logo: nextjs,
            title: 'Next Js',
            discripition: ''
        },
    ]
    return (
        <section className="my-20">
            <div className='text-center mb-12'>
                <h1 className='font-bold text-3xl mb-4'>এক নজরে আমাদের <span className='text-indigo-800'>ফ্রন্ট এন্ড</span> ওয়েব ডেভেলপমেন্ট কোর্স</h1>
                <p>এই কোর্সে যা যা শেখা‌নো হবে</p>
            </div>
            <WhatLernThis datas={fontendDatas}></WhatLernThis>
        </section>
    )
}
