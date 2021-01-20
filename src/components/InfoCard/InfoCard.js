import React from 'react'
import Card from 'react-bootstrap/Card'

import styles from './InfoCard.module.css'

const InfoCard = (props) => {
    return (
        <Card className={styles.cardStyle} style={{width: props.width, height: props.height, backgroundColor: props.backgroundColor, borderColor: props.backgroundColor}}>
            <Card.Body>
                <Card.Title className={styles.cardTitleStyle}>{props.title}</Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default InfoCard;
