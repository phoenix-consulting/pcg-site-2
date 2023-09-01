import React from 'react'
import Banner from '../Banner/Banner'

const DecalBanner = () => {
    return (
        <div>
            <Banner
                title="UGBA 198"
                message="Introduction to Healthcare Consulting DeCal"
                subMessage="Introductory course for students interested in the intersection of biology and business."
                bg="grey"
                buttonMsg="Apply &#8594;"
                buttonLink="https://forms.gle/YsToRHjWkaZSaf7MA"
            >
            </Banner>
        </div>
    )
}

export default DecalBanner;