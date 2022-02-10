import React from "react"
import styled from "styled-components"

import { Wrapper } from "./Wrapper"
import skills from "data/skills.json"

const Container = styled.div`
    width: auto;
    padding: 20px 2vw;
    text-align: left;
    color: ${props => props.theme.secondary};
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;

    p {
        font-size: 1rem;
        font-weight: 600;
    }

`

const InterpersonalSkills = () => {
    const { interpersonal } = skills
    return (
        <Wrapper>
            <Container>
                {interpersonal.map((item, i) => {
                    return (
                        <p key={i}>
                            {item}{i < interpersonal.length-1 && <span>,</span>}
                            &nbsp;&nbsp;&nbsp;
                            </p>
                    )
                })}
            </Container>
        </Wrapper>
    )
}

export default InterpersonalSkills
