import React from 'react'
import Layout from '../components/Layout/Layout'
import ProjectsBanner from '../components/ProjectsComponents/ProjectsBanner'
import ProjectsServices from '../components/ProjectsComponents/ProjectsServices'

const Projects = () => {
    return (
        <Layout>
            <ProjectsBanner/>
            <ProjectsServices/>
        </Layout>
    )
}

export default Projects;