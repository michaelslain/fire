import { FC } from 'react'
import styles from '../styles/SearchToolBar.module.css'

import SearchBar from './SearchBar'
import SearchSuggestions from './SearchSuggestions'
import Button from './Button'

interface Props {
    query: string
    setQuery: any
    setAnalyze: any
}

const SearchToolBar: FC<Props> = ({ query, setQuery, setAnalyze }: Props) => {
    const handleAnalysis = () => {
        if (!query || query.length === 0) return

        setAnalyze(() => false)
        setTimeout(() => setAnalyze(() => true), 1000)
    }

    return (
        <div className={styles.container}>
            <div className={styles.buttonContainer}>
                <Button type="secondary" href="/">
                    ← Go Back
                </Button>
            </div>
            <div className={styles.searchContainer}>
                <SearchBar {...{ query, setQuery }} />
                <SearchSuggestions {...{ query, setQuery }} />
            </div>
            <div className={styles.buttonContainer}>
                <Button type="primary" onClick={handleAnalysis}>
                    Analyze
                </Button>
                <Button type="secondary">Save</Button>
            </div>
        </div>
    )
}

export default SearchToolBar
