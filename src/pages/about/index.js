import React from "react"
import styled, { keyframes } from "styled-components"
import { darken, lighten } from "polished"

import LogoComponent from "components/LogoComponent"
import Particle from "components/Particle"
import PageTitle from "components/PageTitle"
import Introduction from "./Introduction"
import WorkTimeline from "./WorkTimeline"
import EducationSection from "./EducationSection"
import CoursesSection from "./CoursesSection"
import NavBar from "components/NavBar"
import { slide } from "styles/animation"


const PageWrapper = styled.div`
    background-color: ${props => props.theme.dark};
    width: 100vw;
    min-height: 100vh;
    position: relative;
    overflow-x: hidden;
`
const Container = styled.div`
    box-sizing: border-box;
    height: auto;
    position: relative;
    margin: 3vh 5vw;
    padding: 3vh 5vw;
    text-align: center;
`
const SectionTitle = styled.h1`
    font-weight: bolder;
    font-size: calc(3vw + 1rem);
    margin: 3rem 0 2rem 0;
    color: ${props => props.theme.secondary};
    animation: ${slide} 1s linear;

    &::before {
      content: "";
      display: inline-block;
      height: calc(2vw + 1rem);
      width: calc(2vw + 60px);
      margin-right: 5px;
      background-image: linear-gradient(to right, ${props => darken(0.30, props.theme.primary)}, ${props => darken(0.30, props.theme.primary)} 40%, ${props => props.theme.primary} 20%, ${props => props.theme.primary} 75%, ${props => lighten(0.30, props.theme.primary)}, ${props => lighten(0.30, props.theme.primary)} 20%)
    }
`

const About = () => {
    return (
        <PageWrapper>
            <NavBar />
            <Particle type="snow" />
            <LogoComponent />
            <PageTitle title1="ABOUT" title2="ME" top={"2vh"} left={"60%"} />
            <Container>
                <Introduction />
                <SectionTitle id="work">
                    Work Experience
                </SectionTitle>
                <WorkTimeline />
                <SectionTitle>
                    Education
                </SectionTitle>
                <EducationSection />
                <SectionTitle>
                    Courses
                </SectionTitle>
                <CoursesSection />
            </Container>
        </PageWrapper>
    )
}

export default About
