import React from 'react'
import SEO from '../components/SEO'
import ContactUsBanner from '../components/ContactUsComponents/ContactUsBanner'
import ContactUsSamples from '../components/ContactUsComponents/ContactUsSamples'
import Layout from '../components/Layout/Layout'
import ContactUsFAQ from '../components/ContactUsComponents/ContactUsFAQ'

const ContactUs = () => {
    return (
        <div>
        <SEO title="Contact Us"/>
        <Layout light={false}>
            <ContactUsBanner/>
            <ContactUsSamples/>
            <ContactUsFAQ/>
        </Layout>
        </div>
    )
}

export default ContactUs;