'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'

function Test() {
    const {data:session}=useSession();
    if(!session  || !session.user){
      return <button onClick={()=>signIn()}>Sign in</button>
    }
  return (
    <div>
      <h1>{session?.user?.name}</h1>
      <button onClick={()=>signOut()}>Sign out</button>
    </div>
  )
}

export default Test
