import React from "react"
import styled, { keyframes } from "styled-components"
import { darken } from "polished"

import skills from "data/skills.json"
import { Wrapper } from "./Wrapper"

const Container = styled.div`
    width: calc(100% - 8vw);
    padding: 20px 3vw;
`
const showText1 = keyframes`
        100% { opacity: 1; }
`
const revealProgress = keyframes`
    100% { transform: scaleX(1) };
`
const showText2 = keyframes`
        100% { opacity: 1; }
`
const Bar = styled.div`
     margin: 20px 0;
     color: ${props => props.theme.secondary};

     .info {
        margin-top: 0;
        margin-bottom: 5px;
        h4 {
            opacity: 0;
            animation: ${showText1} 0.2s 0.8s linear forwards;
        }
     }

     .progress-line {
        position: relative;
        width: 100%;
        height: 10px;
        background: ${props => props.theme.secondary};
        box-shadow: inset 0px 1px 1px rgba(0,0,0,0.05), 0px 1px rgba(255, 255, 255,0.8);
        transform: scaleX(0);
        transform-origin: left;
        animation: ${revealProgress} 1s cubic-bezier(1,0,0.5,1) forwards;
        animation-delay: 1s;
     }
`
const Progress = styled.span`
    position: absolute;
    background: ${props => darken(0.1, props.theme.primary)};
    height: 111%;
    width: ${props => props.percentage+"%"};
    transform: scaleX(0);
    transform-origin: left;
    animation: ${revealProgress} 1s cubic-bezier(1,0,0.5,1) forwards;

    &::before {
        position: absolute;
        content: "";
        right: 0;
        top: -10px;
        height: 0;
        width: 0;
        border: 7px solid transparent;
        border-bottom-width: 0px;
        border-right-width: 0px;
        border-top-color: #000;
        opacity: 0;
        animation: ${showText2} 0.4s 0.7s linear forwards;
    }
    &::after {
        position: absolute;
        content: "${props => `${props.percentage}%`}";
        right: 0;
        top: -24px;
        background: #000;
        color: #fff; 
        font-size: 12px;
        font-weight: 600;
        padding: 1px 8px;
        border-radius: 3px;
        opacity: 0;
        animation: ${showText2} 0.4s 0.7s linear forwards;
    }
`

const TechnicalSkills = () => {
    const { technical } = skills

    const renderSkillsBar = (data, i) => {
        return (
            <Bar key={i}>
                <div className="info">
                    <h4>{data.skill}</h4>
                </div>
                <div className="progress-line">
                    <Progress percentage={data.percentage}></Progress>
                </div>
            </Bar>
        )
    }
    return (
        <Wrapper>
            <Container>
                {technical.map((item, i) => renderSkillsBar(item, i))}
            </Container>
        </Wrapper>
    )
}

export default TechnicalSkills
