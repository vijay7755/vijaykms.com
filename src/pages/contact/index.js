import React from "react"
import styled from "styled-components"

import LogoComponent from "components/LogoComponent"
import PageTitle from "components/PageTitle"
import socialLinks from "data/socialLinks.json"
import SocialLinks from "components/SocialLinks"
import { primeTheme } from "styles/themes"
import NavBar from "components/NavBar"
import { reveal } from "styles/animation"


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
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${reveal} 1s linear;
`
const ContactForm = styled.div`
    height: auto;
    width: calc(150px + 30vw);
    background: ${props => props.theme.bg_glass};
    border: 1px solid ${props => props.theme.glass_border};
    border-radius: 10px;
    backdrop-filter: blur(3px);
    z-index: 3;
    margin-top: 5vw;
    padding: 2vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    flex-wrap: wrap;
    color: ${props => props.theme.secondary};
    gap: 1rem;

    a {
        color: ${props => props.theme.primary};
        font-size: 1.2rem;
        font-weight: 900;
    }
`
const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 0.5rem;
    width: calc(60% + 2vw);
`

const Contact = () => {
    return (
        <PageWrapper>
            <NavBar />
            <LogoComponent />
            <PageTitle title1="CONTACT" title2="ME" top={"2vh"} left={"60%"} />
            <Container>
                <ContactForm>
                    <h1>Let's talk !</h1>
                    <div>
                        <p>If you want to hire me or invite me into a project, just email me on</p>
                        <a target="_blank" href="mailto:mailto:vijaysekar2295@gmail.com">vijaysekar2295@gmail.com</a>
                    </div>
                    <div>
                        <p>You can reach out to me through social media:</p>
                        <SocialIcons>
                            {
                                socialLinks.map(({ site, link },i) => {
                                    return <SocialLinks delay={+(+(i) * 0.2).toFixed(1) + 1} key={site} site={site} link={link} hoverColor={primeTheme.secondary} />
                                })
                            }
                        </SocialIcons>
                    </div>
                </ContactForm>
            </Container>
        </PageWrapper>
    )
}

export default Contact
