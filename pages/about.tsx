import type { NextPage } from 'next'
import styles from '../styles/About.module.css'

import Header from '../components/Header'

const About: NextPage = () => {
    return (
        <>
            <Header highlight={1} />
            <div className={styles.container}></div>
        </>
    )
}

export default About
