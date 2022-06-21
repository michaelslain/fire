import { FC } from 'react'
import styles from '../styles/Header.module.css'
import Link from 'next/link'

import Button from './Button'

interface Props {
    highlight: number
}

const Header: FC<Props> = ({ highlight }: Props) => {
    const classes = [styles.container, styles['highlight' + highlight]].join(
        ' '
    )

    return (
        <div className={classes}>
            <div className={styles.tabs}>
                <a href="/" className={styles.tab}>
                    Home
                </a>
                <a href="/about" className={styles.tab}>
                    About
                </a>
                <a href="/prevention" className={styles.tab}>
                    Prevention
                </a>
                <a href="/search" className={styles.tab}>
                    Tutorial
                </a>
                <Button href="/search" type="primary">
                    Search
                </Button>
            </div>
        </div>
    )
}

export default Header
