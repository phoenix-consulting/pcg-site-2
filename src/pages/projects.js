import React from 'react'
import Layout from '../components/Layout/Layout'
import ProjectsBanner from '../components/ProjectsComponents/ProjectsBanner'
import ProjectsCarousel from '../components/ProjectsComponents/ProjectsCarousel'
import ProjectsServices from '../components/ProjectsComponents/ProjectsServices'
import ProjectsTimeline from '../components/ProjectsComponents/ProjectsTimeline'
import PastProjects from '../components/ProjectsComponents/PastProjects'

const Projects = () => {
    return (
        <Layout>
            <ProjectsBanner/>
            <ProjectsServices/>
            <ProjectsTimeline/>
            <ProjectsCarousel/>
            <PastProjects/>
        </Layout>
    )
}

export default Projects;