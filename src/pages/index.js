import React from "react"
import Layout from '../components/Layout/Layout'
import HomeBanner from '../components/HomeComponents/HomeBanner'
import HomeAbout from '../components/HomeComponents/HomeAbout'
import HomeCurr from '../components/HomeComponents/HomeCurr'
import HomeContact from '../components/HomeComponents/HomeContact'
import 'bootstrap/dist/css/bootstrap.min.css'


const Home = () => {
  return (
    <div>
    <Layout light={true}>
      <HomeBanner/>
      <HomeAbout/>
      <HomeCurr/>
      <HomeContact/>
    </Layout>
    </div>
  )
}

export default Home

