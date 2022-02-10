import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

import Particle from "components/Particle"
import LogoComponent from "components/LogoComponent"
import PageTitle from "components/PageTitle"
import ProjectCard from "./ProjectCard"
import projectsData from "data/projects.json"
import NavBar from "components/NavBar"

const PageWrapper = styled.div`
    background-color: ${props => props.theme.dark};
    width: 100vw;
    min-height: 100vh;
    position: relative;
    overflow-x: hidden;
`
const Container = styled(motion.div)`
    box-sizing: border-box;
    position: relative;
    margin: 3vh 5vw;
    padding: 3vh 5vw;
    text-align: center;
`
const list = {
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.7,
            staggerChildren: 0.5
        }
    },
    hidden: { opacity: 0 }
}

const Work = () => {
    return (
        <PageWrapper>
            <NavBar />
            <Particle type="atomic" />
            <LogoComponent />
            <PageTitle title1="PROJECTS" title2="" top={"2vh"} left={"60%"} />
            <Container
                initial="hidden"
                animate="visible"
                variants={list}
            >
                {projectsData.map((data, i) => <ProjectCard key={i} data={data} />)}
            </Container>
        </PageWrapper>
    )
}

export default Work
