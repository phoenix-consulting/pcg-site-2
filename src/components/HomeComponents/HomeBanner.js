import React from 'react'
import Container from 'react-bootstrap/Container'
import styles from './HomeBanner.module.css'
import { DownCircleOutlined } from '@ant-design/icons'

const HomeBanner = () => {
    return (
        <div className={styles.bannerBack}>
            <Container>
                <h1 className={styles.bannerTitle}><span className={styles.bannerHighlight}>Improving healthcare</span>, 4 projects at a time.</h1>
                <p className={styles.bannerDescription}>Phoenix Consulting Group is a team of UC Berkeley 
                    students who consult for health-sector business problems.</p>
                <div className={styles.bannerIconBox} href="/#info">
                    <DownCircleOutlined style={{fontSize: "40px", cursor: "pointer"}} className={styles.bannerIcon}/>
                </div>
            </Container>
        </div>
    )
}

export default HomeBanner;
