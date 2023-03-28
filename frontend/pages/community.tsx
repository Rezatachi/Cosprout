import React from 'react'
import Navbar from '@/components/navbar'
import Community_L from '@/components/community_layout'
import styles from '@/styles/Home.module.css'

const Team = () => {
    return (
        <main className={styles.main}>
          <Navbar/>
          <Community_L/>
        </main>
      )
}

export default Team