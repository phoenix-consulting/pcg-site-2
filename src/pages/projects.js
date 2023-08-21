import React from 'react'
import SEO from '../components/SEO'
import Layout from '../components/Layout/Layout'
import ProjectsBanner from '../components/ProjectsComponents/ProjectsBanner'
import ProjectsCarousel from '../components/ProjectsComponents/ProjectsCarousel'
import ProjectsServices from '../components/ProjectsComponents/ProjectsServices'
import ProjectsTimeline from '../components/ProjectsComponents/ProjectsTimeline'
import PastProjects from '../components/ProjectsComponents/PastProjects'
import ProjectsCurr from '../components/ProjectsComponents/ProjectsCurr'

const Projects = () => {
    return (
        <div>
        <SEO title="Projects"/>
        <Layout>
            <ProjectsBanner/>
            <ProjectsServices/>
            <ProjectsTimeline/>
            <ProjectsCurr/>
            <PastProjects/>
            <ProjectsCarousel/>
        </Layout>
        </div>
    )
}

export default Projects;