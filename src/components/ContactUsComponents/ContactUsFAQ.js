import React from 'react'
import InfoSec from '../InfoSec/InfoSec'

import { company_faq } from '../../constants'
import styles from './ContactUs.module.css'

const ContactUsFAQ = () => {
    const faq_questions = company_faq.map((faqObject, index) => {
        return (
            <div className={styles.questionWrapper}>
                <div className={styles.question}>{faqObject.question}</div>
                <div className={styles.answer}>{faqObject.answer}</div>
            </div>
        )
    })


    return (
        <div id="FAQ">
            <InfoSec regtitle="Frequently Asked Questions" alignment="left" background="white">
                {faq_questions}
            </InfoSec>

        </div>
    )
}

export default ContactUsFAQ;