import React from "react"
import styled from "styled-components"

import courses from "data/courses.json"
import { media } from "styles/responsive"
import { reveal } from "styles/animation"


const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(calc(5rem + 2vw), 1fr));
    grid-gap: 10px;
    ${media.tablet} {grid-template-columns: repeat(2, minmax(calc(5rem + 2vw), 1fr));}
    ${media.mobile_lg} {grid-template-columns: repeat(1, minmax(calc(5rem + 2vw), 1fr));}
`
const Box = styled.div`
    height: auto;
    background: ${props => props.theme.bg_glass};
    border: 1px solid ${props => props.theme.glass_border};
    border-radius: 10px;
    backdrop-filter: blur(3px);
    z-index: 3;
    text-align: left;
    padding: 7px;
    color: ${props => props.theme.secondary};
    animation: ${reveal} 1s linear;

    margin: 1rem;
    display: flex;
    flex-direction: column;
    &>* {
        margin: 0.5rem 0; 
    }

    h5 {
        margin-top: auto;
    }
`

const CoursesSection = () => {
    const renderBox = (data, i) => {
        const {title, platform, instructor} = data
        return (
            <Box key={i}>
                <h3>{title}</h3>
                <p>{platform}</p>
                <h5>Instructor: {instructor}</h5>
            </Box>
        )
    }

    return (
        <Container>
            {courses.map((item, i) => renderBox(item, i))}
        </Container>
    )
};

export default CoursesSection
