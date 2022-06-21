import { FC, useMemo, FormEvent, FormEventHandler } from 'react'
import styles from '../styles/SearchSuggestions.module.css'

interface Props {
    query: string
    setQuery: any
}

const SearchSuggestions: FC<Props> = ({ query, setQuery }: Props) => {
    const suggestions: Array<string> | undefined = useMemo(() => {
        return ['bruh', 'balls', 'chicken']
    }, [query])

    if (query.length === 0) return <></>

    return (
        <div className={styles.container}>
            {suggestions.map((suggestion: string, i: number) => {
                return (
                    <div
                        key={i}
                        className={styles.suggestion}
                        onClick={() => setQuery(suggestion)}
                    >
                        {suggestion}
                    </div>
                )
            })}
        </div>
    )
}

export default SearchSuggestions
