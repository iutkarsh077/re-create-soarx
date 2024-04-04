import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import { notFound, redirect } from 'next/navigation'
import React from 'react'

const ProfilePage = async () => {
  const session = await getServerSession(authOptions)
  if (!session?.user) return redirect('/sign-in')
  return (
    <section className="container pt-avoid-nav">
      <div>{session?.user.email}</div>
      <div>{session?.user.username}</div>
      <div>{session?.user.id}</div>
    </section>
  )
}

export default ProfilePage