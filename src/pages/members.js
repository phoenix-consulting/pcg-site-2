import React from 'react'
import SEO from '../components/SEO'
import Layout from '../components/Layout/Layout'
import MembersAirtable from '../components/MembersComponents/MembersAirtable'
import MembersBanner from '../components/MembersComponents/MembersBanner'

const Members = () => {
    return (
        <div>
        <SEO title="Members"/>
        <Layout light={false}>
            {/* <MembersBanner/> */}
            <MembersAirtable/>
        </Layout>
        </div>
    )
}

export default Members
