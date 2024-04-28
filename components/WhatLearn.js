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
import firebase from '@/public/icon/firebase.png'
import express from '@/public/icon/express js.png'
import jwt from '@/public/icon/jwt.png'
import mongodb from '@/public/icon/mongodb.png'
import Mongoose from '@/public/icon/Mongoosejs.png'
import nodejs from '@/public/icon/nodejs.png'
import stripe from '@/public/icon/stripe.svg'
import vercel from '@/public/icon/vercel.png'
import Render from '@/public/icon/Render.png'
import restapi from '@/public/icon/restapi.png'

import WhatLernThis from "./WhatLernThis";

export default function WhatLearn() {
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
    ]
    const backendDatas = [
        {
            id: 1,
            logo: JavaScriptlogo,
            title: 'JavaScript',
            discripition: ''
        },
        {
            id: 2,
            logo: ES6,
            title: 'ES6',
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
            logo: nodejs,
            title: 'Node Js',
            discripition: ''
        },
        {
            id: 6,
            logo: express,
            title: 'Express Js',
            discripition: ''
        },
        {
            id: 7,
            logo: mongodb,
            title: 'MongoDb',
            discripition: ''
        },
        {
            id: 8,
            logo: Mongoose,
            title: 'Mongoose',
            discripition: ''
        },
        {
            id: 9,
            logo: jwt,
            title: 'JWT',
            discripition: ''
        },
        {
            id: 10,
            logo: restapi,
            title: 'Rest API',
            discripition: ''
        },
        {
            id: 11,
            logo: stripe,
            title: 'Stripe',
            discripition: ''
        },
        {
            id: 12,
            logo: vercel,
            title: 'Vercel',
            discripition: ''
        },
        
    ]
    return (
        <section className="my-20">
            <div className='text-center'>
                <h1 className='font-bold text-3xl mb-4'>এক নজরে আমাদের MERN Stack কোর্স</h1>
                <p>এই কোর্সে যা যা শেখা‌নো হবে</p>
            </div>
            <div className="my-20">
                <div className=' my-16'>
                    <h2 className='font-bold text-2xl mb-4'>এক নজরে আমাদের Front-end কোর্স</h2>

                </div>
                <WhatLernThis datas={fontendDatas}></WhatLernThis>
            </div>
            <div className="my-20">
                <div className=' my-16'>
                    <h2 className='font-bold text-2xl mb-4'>এক নজরে আমাদের Back-end কোর্স</h2>
                </div>
                <WhatLernThis datas={backendDatas}></WhatLernThis>
            </div>
        </section>
    )
}
