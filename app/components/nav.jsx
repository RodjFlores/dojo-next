import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Nav() {
    return (
        <nav>
          <h1>DOJO HELP DESK</h1>
          <Link href="/">Home</Link>
          <Link href="/tickets">Tickets</Link>
        </nav>
    )
  }