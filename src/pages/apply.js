import React from 'react'
import Layout from '../components/Layout/Layout'
import ApplyBanner from '../components/ApplyComponents/ApplyBanner'
import ApplyVideo from '../components/ApplyComponents/ApplyVideo'
import ApplyTimeline from '../components/ApplyComponents/ApplyTimeline'
import ApplyFAQ from '../components/ApplyComponents/ApplyFAQ'

const Apply = () => {
    return (
        <div>
        <Layout light={false}>
            <ApplyBanner/>
            <ApplyVideo/>
            <ApplyTimeline/>
            <ApplyFAQ/>
        </Layout>
        </div>
    )
}

export default Apply;