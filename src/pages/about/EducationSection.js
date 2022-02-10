import React from "react"
import styled from "styled-components"

import educationData from "data/education.json"
import { media } from "styles/responsive"
import { reveal } from "styles/animation"


const Container = styled.div`
    /* background: black; */
    display: flex;
    justify-content: space-between;

    ${media.tablet} {
        flex-direction: column;
    }
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

    width: 100%;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    &>* {
        margin-bottom: 1.5rem;
    }
    .bottom {
        display: flex;
        justify-content: space-between;
        margin-top: auto;
    }

    ${media.tablet} {
        width: auto;
    }

`

const EducationSection = () => {
const renderBox = (data, i) => {
    const {institute, course, period, marks} = data
    return (
        <Box key={i}>
            <h3>{course}</h3>
            <p>{institute}</p>
            <div className="bottom">
                <h5>{marks}</h5>
                <p>{period}</p>
            </div>
        </Box>
    )

}
  return (
    <Container>
        {educationData.map((item, i) => renderBox(item, i))}
    </Container>
  )
}

export default EducationSection
