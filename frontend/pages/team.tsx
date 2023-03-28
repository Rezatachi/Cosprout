import React from 'react'
import Navbar from '@/components/navbar'
import Team_L from '@/components/team_layout'
import styles from '@/styles/Home.module.css'

const Team = () => {
    return (
        <main className={styles.main}>
          <Navbar/>
          <Team_L/>
        </main>
      )
}

export default Team