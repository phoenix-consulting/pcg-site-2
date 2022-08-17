import React from 'react'
import SEO from '../components/SEO'
import Layout from '../components/Layout/Layout'
import DecalBanner from '../components/DecalComponents/DecalBanner'
import DecalBody from '../components/DecalComponents/DecalBody'

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

export default Decal
