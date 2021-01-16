import React from 'react'
import Container from 'react-bootstrap/Container'

import styles from './InfoSec.module.css'

// InfoSec makes use of the following props:
// - title --> directly passed in and styled
// - subtitle --> directly passed in and styled
// - alignment --> whether title/subtitle are aligned left (default), center, or right (deprecated)
// - background --> background color // supported: white (default), gray, red, blue

const InfoSec = (props) => {

    const titleStyles = [styles.infoSecTitle];
    const subtitleStyles = [styles.infoSecDescription];
    const headerStyles = [];
    const bgStyles = [styles.bg];

    // Alignment Logic
    if (props.alignment) {
        if (props.alignment === "right") {
            titleStyles.push(styles.rightTitle);
            subtitleStyles.push(styles.rightTitle);
        } else if (props.alignment === "center") {
            titleStyles.push(styles.centerTitle);
            subtitleStyles.push(styles.centerTitle);
            headerStyles.push(styles.headerContainerCenter)
        } else {
            titleStyles.push(styles.leftTitle);
            subtitleStyles.push(styles.leftTitle);
            headerStyles.push(styles.headerContainerLeft)
        }
    }
    // Background Logic
    if (props.background) {
        if (props.background === "blue") {
            bgStyles.push(styles.navyTheme);
            titleStyles.push(styles.navyThemeTitle);
            subtitleStyles.push(styles.navyThemeTitle);
        } else if (props.background === "gray") {
            titleStyles.push(styles.grayThemeTitle);
            bgStyles.push(styles.grayTheme);
        } else if (props.background === "red") {
            bgStyles.push(styles.redTheme);
            titleStyles.push(styles.redThemeTitle);
            subtitleStyles.push(styles.redThemeTitle);
        } else {
            titleStyles.push(styles.whiteThemeTitle);
            bgStyles.push(styles.whiteTheme);
        }
    }

    return (
        <div className={bgStyles.join(' ')}>
            <Container>
                <div className={headerStyles.join(' ')}>
                <h1 className={titleStyles.join(' ')}>{props.title}</h1>
                <h2 className={subtitleStyles.join(' ')}>{props.subtitle}</h2>
                </div>
            {props.children}
            </Container>
        </div>
    )
};

export default InfoSec;