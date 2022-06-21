import { FC } from 'react'
import styles from '../styles/Heading.module.css'

interface Props {
    children: any
    size: 'small' | 'medium' | 'large'
    className?: string
}

const Heading: FC<Props> = ({ children, size, className }: Props) => {
    const classes: string = [className, styles[size], styles.text].join(' ')

    return <h1 className={classes}>{children}</h1>
}

export default Heading
