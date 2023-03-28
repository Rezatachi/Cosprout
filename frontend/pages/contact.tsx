import React from 'react'
import Navbar from '@/components/navbar'
import Contact_L from '@/components/contact_layout'
import styles from '@/styles/Home.module.css'

const Team = () => {
    return (
        <main className={styles.main}>
          <Navbar/>
          <Contact_L/>
        </main>
      )
}

export default Team