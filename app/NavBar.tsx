"use client"

import React from 'react'

import { signIn } from 'next-auth/react'


import Link from 'next/link'
const NavBar = () => {
  return (
    <div className='flex bg-slate-500 p-5 space-x-3'>
        <Link href="/" className='mr-5'>Next.js</Link>
        <Link href='/users'>Users</Link>
        <Link href='/api/auth/signin'>Sign in</Link>
    </div>
  )
}

export default NavBar