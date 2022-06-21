import { FC, useEffect, useState } from 'react'
import styles from '../styles/AnalysisMenu.module.css'

import Heading from './Heading'

interface Props {
    query: string
    analyze: boolean
}

const AnalysisMenu: FC<Props> = ({ query, analyze }: Props) => {
    const [data, setData]: [any, any] = useState(null)

    useEffect(() => {
        if (analyze) {
            setData(null)
            fetch('http://localhost:3000/api/mock-analyze')
                .then(resData => resData.json())
                .then(newData => setData(newData))
        }
    }, [analyze])

    const classes: string = [
        styles.container,
        styles[analyze ? 'mounted' : 'unmounted'],
    ].join(' ')

    // score,
    // vegitationAmount,
    // averageVegitationHeight,
    // dangerZone,

    const internals = !analyze ? (
        ''
    ) : !data ? (
        <Heading size="medium">Analyzing...</Heading>
    ) : (
        <div className={styles.innerContainer}>
            <Heading size="medium" className={styles.heading}>
                Query
            </Heading>
            <p className={styles.text}>{query}</p>
            <Heading size="medium" className={styles.heading}>
                Data
            </Heading>
            <p className={styles.text}>Score: {data.score}</p>
            <p className={styles.text}>
                Vegetation Amount: {data.vegitationAmount}
            </p>
            <p className={styles.text}>
                Average Vegitation Height: {data.averageVegitationHeight}
            </p>
            <p className={styles.text}>
                {data.dangerZone ? 'Is in danger zone' : 'Is in safe zone'}
            </p>
        </div>
    )

    return <div className={classes}>{internals}</div>
}

export default AnalysisMenu
