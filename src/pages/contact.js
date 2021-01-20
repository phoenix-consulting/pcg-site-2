import React from 'react'
import ContactUsBanner from '../components/ContactUsComponents/ContactUsBanner'
import ContactUsSamples from '../components/ContactUsComponents/ContactUsSamples'
import Layout from '../components/Layout/Layout'
import ContactUsFAQ from '../components/ContactUsComponents/ContactUsFAQ'

const ContactUs = () => {
    return (
        <Layout light={false}>
            <ContactUsBanner/>
            <ContactUsSamples/>
            <ContactUsFAQ/>
        </Layout>
    )
}

export default ContactUs;