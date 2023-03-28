"use client"; 

import Image from 'next/image'
import styles from '@/styles/Home.module.css'
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