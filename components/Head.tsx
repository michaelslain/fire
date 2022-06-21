/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head'
import { FC } from 'react'

const CustomHead: FC = () => {
    return (
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin="true"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,700;1,300&display=swap"
                rel="stylesheet"
            />
        </Head>
    )
}

export default CustomHead
