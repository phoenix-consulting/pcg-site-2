import React from 'react'
import SEO from '../components/SEO'
import Layout from '../components/Layout/Layout'
import ProjectsBanner from '../components/ProjectsComponents/ProjectsBanner'
import ProjectsCarousel from '../components/ProjectsComponents/ProjectsCarousel'
import ProjectsServices from '../components/ProjectsComponents/ProjectsServices'
import ProjectsTimeline from '../components/ProjectsComponents/ProjectsTimeline'
import PastProjects from '../components/ProjectsComponents/PastProjects'

const Projects = () => {
    return (
        <div>
        <SEO title="Projects"/>
        <Layout>
            <ProjectsBanner/>
            <ProjectsServices/>
            <ProjectsTimeline/>
            <PastProjects/>
            <ProjectsCarousel/>
        </Layout>
        </div>
    )
}

export default Projects;