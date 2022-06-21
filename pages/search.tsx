import { useState } from 'react'
import type { NextPage } from 'next'
import styles from '../styles/Search.module.css'

import SearchToolBar from '../components/SearchToolBar'
import Map from '../components/Map'
import Analyze from '../components/AnalysisMenu'

const Search: NextPage = () => {
    const [query, setQuery]: [string, any] = useState(
        '3322 Duke Ct. Santa Clara'
    )
    const [analyze, setAnalyze]: [boolean, any] = useState(false)

    return (
        <div className={styles.container}>
            <SearchToolBar {...{ query, setQuery, setAnalyze }} />
            <div className={styles.innerContainer}>
                <Map {...{ query }} />
                <Analyze {...{ query, analyze }} />
            </div>
        </div>
    )
}

export default Search
