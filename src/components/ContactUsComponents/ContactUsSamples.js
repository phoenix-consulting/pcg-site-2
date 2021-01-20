import React from 'react'
import InfoSec from '../InfoSec/InfoSec'
import { Link } from 'gatsby'

import styles from './ContactUs.module.css'

const ContactUsSamples = () => {
    return (
        <div>
            <InfoSec regtitle="Work Samples" alignment="left" background="gray">
            <div className={styles.readMore}>Read more about our projects <Link to="/projects" className={styles.readMoreLink}>here</Link>.</div>
            <iframe src="https://drive.google.com/file/d/1CZ1AfFKjbJmUTzXr1muF8pVJxG4Yn-6M/preview" 
            width="640" height="480" className={styles.workSample}></iframe>
            </InfoSec>
        </div>
    )
}

export default ContactUsSamples;