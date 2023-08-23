import React from 'react'
import Banner from '../Banner/Banner'

import styles from './MembersBanner.module.css'

const MembersBanner = () => {
    return (
        <div>
            <Banner
                title="MEET THE MEMBERS"
                message="Feel free to reach out to any of our members to schedule a coffee chat, or also feel free to reach out to any of our members directly!"
                bg="gray"
                buttonMsg="Coffee Chat Us! &#8594;"
                buttonLink="https://forms.gle/BCwYA117DrVJFvXa9"
            >
            </Banner>
        </div>
    )
}

export default MembersBanner;