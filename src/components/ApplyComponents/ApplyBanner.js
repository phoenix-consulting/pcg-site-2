import React from 'react'
import Banner from '../Banner/Banner'

import styles from './ApplyBanner.module.css'

const ApplyBanner = () => {
    return (
        <div>
            <Banner
                title="RECRUITMENT FALL 2021"
                message="Hey there! Phoenix is currently recruiting its Fall 2021 class. Check out our LinkTree and resources on this page for more information. 
                We're excited to meet you!"
                buttonMsg="LinkTree &#8594;"
                buttonLink="https://linktr.ee/phoenixrecruitment"
                bg="white"
            >
            <div className={styles.linksWrapper}>
            <div>
            <a className={styles.link} href="https://form.typeform.com/to/cULpEfuh">Application Form &#8594;</a>
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