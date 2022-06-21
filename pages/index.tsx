import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

import Header from '../components/Header'
import Heading from '../components/Heading'
import Button from '../components/Button'

const Home: NextPage = () => {
    return (
        <>
            <Header highlight={0} />
            <div className={styles.hero}>
                <Heading size="large">Fire</Heading>
                <Heading size="small">
                    Flammability Analysis on Properties
                </Heading>
                <div className={styles.overlay}></div>
                <div className={styles.imageContainer}>
                    <Image
                        src="/background.jpeg"
                        layout="fill"
                        objectFit="cover"
                        alt="Just some useless background"
                        priority
                    />
                </div>
                <div className={styles.buttonContainer}>
                    <Button type="primary" href="/search">
                        Get Started
                    </Button>
                    <Button type="secondary" href="/about">
                        Learn More
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Home
