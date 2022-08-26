import React from 'react'
import SEO from '../components/SEO'
import Layout from '../components/Layout/Layout'
import DecalBody from '../components/DecalComponents/DecalBody'
import DecalBanner from '../components/DecalComponents/DecalBanner'

const Decal = () => {
    return (
        <div>
        <SEO title="Decal"/>
        <Layout light={false}>
            <DecalBanner/>
            <DecalBody/>
        </Layout>
        </div>
    )
}

export default Decal;