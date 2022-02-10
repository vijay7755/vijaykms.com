import React from "react"
import styled from "styled-components"

import { Wrapper } from "./Wrapper"
import skills from "data/skills.json"

const Container = styled.div`
    width: auto;
    padding: 20px 3vw;
    text-align: left;
    color: ${props => props.theme.secondary};

    .content {
        margin: 1rem 0;
    }

`

const Specialization = () => {
    const { specialization } = skills
    return (
        <Wrapper>
            <Container>
                {specialization.map((item, i) => {
                    return (
                        <div key={i} className="content">
                            <h4>&#183; {item.main}</h4>
                            &nbsp;
                            <span>{item.sub}</span>
                        </div>
                    )
                })}
            </Container>
        </Wrapper>
    )
}

export default Specialization
