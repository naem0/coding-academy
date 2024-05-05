import React from 'react'
import JavaScriptlogo from '@/public/icon/JavaScript-logo.png'
import ES6 from '@/public/icon/ES6.jpg'
import express from '@/public/icon/express js.png'
import jwt from '@/public/icon/jwt.png'
import mongodb from '@/public/icon/mongodb.png'
import Mongoose from '@/public/icon/Mongoosejs.png'
import nodejs from '@/public/icon/nodejs.png'
import stripe from '@/public/icon/stripe.svg'
import vercel from '@/public/icon/vercel.png'
import Render from '@/public/icon/Render.png'
import restapi from '@/public/icon/restapi.png'
import git from '@/public/icon/git-icon.png'
import github from '@/public/icon/github.png'
import WhatLernThis from './WhatLernThis'

export default function WhatLernBackend() {
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
            <div className='text-center mb-12'>
                <h1 className='font-bold text-3xl mb-4'><span className='text-indigo-800'>ব্যাক-এন্ড</span> ওয়েব ডেভেলপমেন্ট কোর্স</h1>
                <p>এই কোর্সে যা যা শেখা‌নো হবে</p>
            </div>
            <WhatLernThis datas={backendDatas}></WhatLernThis>
        </section>
  )
}
