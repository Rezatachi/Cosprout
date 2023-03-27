import React from 'react'
import Navbar from '@/components/navbar'
import Impact_L from '@/components/impact_layout'
import styles from '@/styles/Home.module.css'

const Team = () => {
    return (
        <main className={styles.main}>
          <Navbar/>
          <Impact_L/>
        </main>
      )
}

export default Team