"use client"

import React from 'react'

import { signIn, useSession } from 'next-auth/react'


import Link from 'next/link'
const NavBar = () => {
  const {status, data: session} = useSession();
  return (
    <div className='flex bg-slate-500 p-5 space-x-3'>
        <Link href="/" className='mr-5'>Next.js</Link>
        <Link href='/users'>Users</Link>
      {status === "loading" && <p>Loading...</p>}  
      {status === "unauthenticated" && <Link href='/api/auth/signin'>Sign in</Link>}
      {status === "authenticated" && <div>{session.user!.name}</div>}
    </div>
  )
}

export default NavBar