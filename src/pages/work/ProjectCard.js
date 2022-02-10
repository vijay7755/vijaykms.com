import React from "react"
import styled, { css } from "styled-components"
import { darken } from "polished"
import { motion } from "framer-motion"

import { media } from "styles/responsive"


const Box = styled(motion.div)`
    height: 300px;
    background: ${props => props.theme.bg_glass};
    border: 1px solid ${props => props.theme.glass_border};
    border-radius: 10px;
    backdrop-filter: blur(5px);
    z-index: 3;
    margin-top: calc(4vw + 2rem);
    text-align: left;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.secondary};

    ${media.tablet} {
        height: auto;
        flex-direction: column;
    }
`
const scrollCss = css`
    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px ${props => props.theme.gray}; 
        border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb {
        background: gray; 
        border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: ${props => darken(0.1, props.theme.gray)}; 
    }
`
const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: rgba(0,0,0,0.8);
    border: 1px solid ${props => props.theme.glass_border};
    border-radius: 10px;
    backdrop-filter: blur(5px);
    transform: translateX(-3rem);
    padding: 0.8rem;
    height: 80%;
    width: calc(30% + 4vw);

    h2 {
        margin-bottom: 3px;
    }
    &>*:nth-child(2) {
        margin-bottom: 5px;
        border-bottom: 1px solid ${props => props.theme.secondary};
        color: ${props => props.theme.gray};
    }
    .description-container {
        margin-top: 2px;
        max-height: 100%;
        overflow-y: auto;
        ${scrollCss}
    }

    ${media.tablet} {
        transform: translate(0, -3rem);
        height: calc(10rem + 6vw);
        width: 80%;
    }
`
const RolesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin: 0 0 0 -2rem;
    width: 90%;

    .roles-container {
        max-height: 200px;
        overflow-y: auto;
        ${scrollCss}
        ul li {
            padding: 0.5rem 0;
        }
    }
    
    &>*:nth-child(2) {
        margin-top: 10px;
        border-top: 1px solid ${props => props.theme.secondary};
        color: ${props => props.theme.gray};
    }
    &>*:nth-child(3) {
        color: ${props => props.theme.gray};
    }

    ${media.tablet} {
        margin: -2rem calc(0.5rem + 3vw) 0 calc(0.5rem + 3vw);
    }
`
const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
}

const ProjectCard = ({ data }) => {
    const { title, client, description, role, tech } = data
    return (
        <Box variants={item}>
            <AboutContainer>
                <h2>{title}</h2>
                <p>{client}</p>
                <div className="description-container">
                    <p>{description}</p>
                </div>
            </AboutContainer>
            <RolesContainer>
                <div className="roles-container">
                    <ul>
                        {role.map((item, i) => {
                            return <li key={i}>{" "}{item}</li>
                        })}
                    </ul>
                </div>
                <h3>Tech Stack:</h3>
                <div>
                    {tech.map((t, i) => <i key={i}>{t}{i < tech.length - 1 && ","} &nbsp;</i>)}
                </div>
            </RolesContainer>
        </Box>
    )
}

export default ProjectCard
