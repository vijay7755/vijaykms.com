import React from "react"
import styled, { css } from "styled-components"
import { darken } from "polished"

import workExperience from "data/workExperience.json"
import { Star, ScrollUp } from "components/svgs"
import { primeTheme } from "styles/themes"
import { media } from "styles/responsive"
import { reveal } from "styles/animation"

const Wrapper = styled.div`
    position: relative;
    padding: 0 2vw;
    ${media.mobile_lg} { padding: 0 1vw; }
`
const centerCircleStyles = css`
        position: absolute;
        background-color: ${props => darken(0.12, props.theme.primary)};
        height: 30px;
        width: 30px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1px;
        box-shadow: 0 0 0 4px ${props => props.theme.primary}, inset 0 2px 0 rgba(0,0,0,0.08), 0 3px 0 4px rgba(0,0,0,0.05);
`
const CenterLine = styled.div`
    position: absolute;
    width: 3px;
    height: calc(100% - 10px);
    background: ${props => props.theme.primary};
    left: 50%;
    top: 15px;
    transform: translateX(-50%);
    &>*:first-child {
            ${centerCircleStyles}
            height: 15px;
            width: 15px;
            left: 50%;
            transform: translate(-50%, 100%);
            bottom: 10px;
        }

    ${media.tablet} { left: 30px; }
    ${media.mobile_lg} { left: 20px; }
`
const Box = styled.div`
    display: flex;
    justify-content: ${({ row }) => row % 2 === 0 ? "flex-start" : "flex-end"};
    ${media.tablet} { margin: 0 0 20px 50px; }
    transform-origin: top !important;
    animation: ${reveal} 1s linear;

    section {
        height: auto;
        background: ${props => props.theme.bg_glass};
        border: 1px solid ${props => props.theme.glass_border};
        border-radius: 10px;
        backdrop-filter: blur(3px);
        z-index: 3;
        text-align: left;
        padding: 7px;
        color: ${props => props.theme.secondary};
        width: calc(50% - 50px);
        position: relative;
        ${media.tablet} { width: 100%; }

        &>* {
            margin-top: 0.8rem;
        }

        &::before {
            box-sizing: border-box;
            content: "";
            position: absolute;
            width: 15px;
            height: 15px;
            background-color: ${props => props.theme.bg_glass};
            border: 1px solid ${props => props.theme.glass_border};
            top: 20px;
            z-index: 0;

            clip-path: polygon(50% 5%, 0% 100%, 100% 100%);
            transform: rotate(${({ row }) => row % 2 === 0 ? "-29deg" : "29deg"});
            right: ${({ row }) => row % 2 === 0 ? "-11px" : ""};
            left: ${({ row }) => row % 2 !== 0 ? "-11px" : ""};
            ${media.tablet} {
                transform: rotate(29deg);
                right: "";
                left: -11px;
            }
        }

        &>*:first-child {
            ${centerCircleStyles}
            top: 0;
            right: ${({ row }) => row % 2 === 0 ? "-51px" : ""};
            left: ${({ row }) => row % 2 !== 0 ? "-51px" : ""};
            ${media.tablet} {
                left: -51px;
                right: "";
            }
        }
        &>*:nth-child(2)::after {
            display: block;
            content: "";
            width: inherit;
            height: 2px;
            background: ${props => props.theme.secondary};
        }
        .work {
            margin-left: 1rem;
        }
        .company-details {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }
        .technologies {
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            p {
                padding-right: 5px;
            }
        }
    }
`


const WorkTimeline = () => {

    const workExperienceContainer = (data, i) => {
        const { title, company, period, work, technologies } = data
        return (
            <Box key={i} row={i}>
                <section>
                    <i>
                        <Star width={22} height={22} fill={primeTheme.dark} />
                    </i>
                    <h3>{title}</h3>
                    <div className="company-details">
                        <p>{company}</p>
                        <p>{period}</p>
                    </div>
                    <div>
                        <ul className="work">
                            {work.map((e, ei) => {
                                return <li key={ei}>{e}</li>
                            })}
                        </ul>
                    </div>
                    <h4>Technologies Used: </h4>
                    <div className="technologies">
                        {technologies.map((t, ti) => {
                            return <p key={ti}>
                                {t}
                                {ti < technologies.length - 1 && ","}
                            </p>
                        })}
                    </div>
                </section>
            </Box>
        )
    }

    return (
        <Wrapper>
            <CenterLine>
                <a href="#work" className="scroll-icon">
                    <ScrollUp width={15} height={15} fill={primeTheme.dark} />
                </a>
            </CenterLine>
            {workExperience.map((ex, index) => workExperienceContainer(ex, index))}
        </Wrapper>
    )
};

export default WorkTimeline
