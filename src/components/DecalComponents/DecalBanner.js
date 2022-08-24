import React from 'react'
import Banner from '../Banner/Banner'

const DecalBanner = () => {
    return (
        <div>
            <Banner
                title="MCB 98"
                message="Introduction to Healthcare Consulting DeCal"
                subMessage="Introductory Course for students interested in the intersection of biology and business."
                bg="grey"
                buttonMsg="Apply &#8594;"
                buttonLink="https://docs.google.com/forms/d/e/1FAIpQLScvKcStOAlas75rNYp8Wo57nF-YeCeljx7dDNKcdSuopnljFg/viewform?usp=send_form"
            >
            </Banner>
        </div>
    )
}

export default DecalBanner;