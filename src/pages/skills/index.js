import React from "react"
import styled from "styled-components"
import { darken, lighten } from "polished"

import LogoComponent from "components/LogoComponent"
import Particle from "components/Particle"
import PageTitle from "components/PageTitle"
import TechnicalSkills from "./TechnicalSkills"
import Specialization from "./Specialization"
import InterpersonalSkills from "./InterpersonalSkills"
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
const Skills = () => {
  return (
    <PageWrapper>
      <NavBar />
      <Particle type="images" />
      <LogoComponent />
      <PageTitle title1="MY" title2="SKILLS" top={"2vh"} left={"60%"} />
      <Container>
        <SectionTitle>
          Technical Skills
        </SectionTitle>
        <TechnicalSkills />
        <SectionTitle>
          Specialization
        </SectionTitle>
        <Specialization />
        <SectionTitle>
          Interpersonal Skills
        </SectionTitle>
        <InterpersonalSkills />
      </Container>
    </PageWrapper>
  )
}

export default Skills
