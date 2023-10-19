import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'

async function About() {
  const session = await getServerSession();

    if(!session?.user || !session){
      redirect('/api/auth/signin')
  }

  return (<>
    {

      session?.user ? <div>Logged In</div>:<div>Not Logged in</div>
  }
  </>
  )
}

export default About
