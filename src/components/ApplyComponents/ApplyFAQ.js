import React from 'react'
import InfoSec from '../InfoSec/InfoSec'

import { student_faq } from '../../constants'
import styles from './ApplyFAQ.module.css'

const ApplyFAQ = () => {
    
    const faq_questions = student_faq.map((faqObject, index) => {
        if (index == 2) {
            return (
                <div className={styles.questionWrapper}>
                <div className={styles.question}>{faqObject.question}</div>
                <div className={styles.answer}>{faqObject.answer}</div>
                <div className={styles.answer}>{faqObject.answer2}</div>
                </div>
            )
        }

        return (
            <div className={styles.questionWrapper}>
                <div className={styles.question}>{faqObject.question}</div>
                <div className={styles.answer}>{faqObject.answer}</div>
            </div>
        )
    })



    return (
        <div id="faq">
            <InfoSec regtitle="Frequently Asked Questions" background="white">
                {faq_questions}
            </InfoSec>
        </div>
    )
}

export default ApplyFAQ;