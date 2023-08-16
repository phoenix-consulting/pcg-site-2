import React from 'react'
import Banner from '../Banner/Banner'

const DecalBanner = () => {
    return (
        <div>
            <Banner
                title="UGBA 198"
                message="Introduction to Healthcare Consulting DeCal"
                subMessage="Introductory Course for students interested in the intersection of biology and business."
                bg="grey"
                buttonMsg="Apply &#8594;"
                buttonLink="https://docs.google.com/forms/d/e/1FAIpQLSezPXbnh8IIMdlzgMqdHHyB90BIFYIRiXaKllPgNR9b-XGhiA/viewform"
            >
            </Banner>
        </div>
    )
}

export default DecalBanner;