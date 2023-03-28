import React from 'react'
import Navbar from '@/components/navbar'
import Resources_L from '@/components/resources_layout'
import styles from '@/styles/Home.module.css'

const Team = () => {
    return (
        <main className={styles.main}>
          <Navbar/>
          <Resources_L/>
        </main>
      )
}

export default Team