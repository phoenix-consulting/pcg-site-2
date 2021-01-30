import React from 'react'
import Banner from '../Banner/Banner'

import styles from './ApplyBanner.module.css'

const ApplyBanner = () => {
    return (
        <div>
            <Banner
                title="RECRUITMENT SPRING 2021"
                message="Hey there! We’re currently recruiting new members for Spring 2021. If you’re interested in being a part of our 
                community, check out the resources below."
                buttonMsg="LinkTree &#8594;"
                buttonLink="https://linktr.ee/phoenixrecruitment"
                bg="white"
            >
            <div className={styles.linksWrapper}>
            <div>
            <a className={styles.link} href="https://recruiting640291.typeform.com/to/XINGe2LQ">Application Form &#8594;</a>
            </div>
            <div>
            <a className={styles.link} href="https://docs.google.com/document/d/1ahxtZDqLib7-kKSa5zcsztxx4TaAsszIcWR_xwCFJsI/edit?usp=sharing">
                Recruitment Guide &#8594;
            </a>
            </div>
            </div>
            </Banner>
        </div>
    )
}

export default ApplyBanner