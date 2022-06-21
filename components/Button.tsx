import { FC, MouseEventHandler } from 'react'
import styles from '../styles/Button.module.css'

interface Props {
    children: any
    type: 'primary' | 'secondary'
    onClick?: MouseEventHandler
    href?: string
    className?: string
}

const Button: FC<Props> = ({
    children,
    onClick,
    href,
    className,
    type,
}: Props) => {
    const classes: string = [className, styles.button, styles[type]].join(' ')

    return (
        <a {...{ href, onClick }} className={classes}>
            {children}
        </a>
    )
}

export default Button
