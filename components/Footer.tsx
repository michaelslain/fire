import { FC } from 'react'
import styles from '../styles/Footer.module.css'

const Footer: FC = () => {
    const year = new Date().getFullYear()

    return <p className={styles.text}>© Fire {year}</p>
}

export default Footer
