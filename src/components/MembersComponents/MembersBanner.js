import React from 'react'
import Banner from '../Banner/Banner'

import styles from './MembersBanner.module.css'

const MembersBanner = () => {
    return (
        <div>
            <Banner
                title="MEET PHOENIX"
                message="Feel free to reach out to any of our members to schedule a coffee chat! Fill out the form on the 'Join' page to schedule a coffee chat, or also feel free to reach out to any of our members directly!"
                bg="gray"
                buttonMsg="Latest Updates &#8594;"
                buttonLink="https://medium.com/@phoenixconsulting"
            >
            </Banner>
        </div>
    )
}

export default MembersBanner;