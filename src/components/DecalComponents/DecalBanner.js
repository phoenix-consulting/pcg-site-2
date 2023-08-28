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
                buttonLink="https://docs.google.com/forms/d/1cq3E_5KVcHJUH9LAwlFmdz3XnEw6Tc2ymNqpY5vwoB4/edit"
            >
            </Banner>
        </div>
    )
}

export default DecalBanner;