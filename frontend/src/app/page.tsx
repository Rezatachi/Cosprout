"use client"; 

import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '@/components/navbar'
import Landing from '@/components/landing'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar/>
      <Landing/>
    </main>
  )
}
