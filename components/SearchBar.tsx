import { FC, FormEventHandler, FormEvent } from 'react'
import styles from '../styles/SearchBar.module.css'

interface Props {
    query: string
    setQuery: any
}

const SearchBar: FC<Props> = ({ query, setQuery }: Props) => {
    const classes: string = [
        styles.input,
        styles[query.length > 0 ? 'expand' : ''],
    ].join(' ')

    const handleUpdateQuery: FormEventHandler = (
        e: FormEvent<HTMLInputElement>
    ) => setQuery(e.currentTarget.value)

    return (
        <input
            className={classes}
            type="text"
            placeholder="Search Address..."
            value={query}
            onChange={handleUpdateQuery}
        />
    )
}

export default SearchBar
