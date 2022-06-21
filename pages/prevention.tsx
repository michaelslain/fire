import type { NextPage } from 'next'
import styles from '../styles/Prevention.module.css'

import Header from '../components/Header'

const Prevention: NextPage = () => {
    return (
        <>
            <Header highlight={2} />
            <div className={styles.container}></div>
        </>
    )
}

export default Prevention
