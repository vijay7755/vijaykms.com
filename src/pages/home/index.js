import React from "react"
import { NavLink } from "react-router-dom"
import styled, { css } from "styled-components"
import { motion } from "framer-motion"

import LogoComponent from "components/LogoComponent"
import MainContent from "pages/home/MainContent"


const MainContainer = styled.div`
    background: ${props => props.theme.dark};
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    position: relative;

    h2,h3,h4,h5,h6 {
        font-family: 'Open Sans', sans-serif;
        font-weight: bold;
    }
`
const Container = styled.div`
    padding: 2rem;
`
const linkCommonStyles = css`
    text-decoration: none;
    z-index: 1;
    color: ${({ theme }) => theme.secondary};
    transition: all 0.2s ease-in-out;

    &:hover {
        color: ${({ theme }) => theme.primary};
    }
`
const Contact = styled(NavLink)`
    ${linkCommonStyles}
    position: absolute;
    top: 1rem;
    right: calc(0.5rem + 2vw);
`
const About = styled(NavLink)`
    ${linkCommonStyles}
    position: absolute;
    top: 50%;
    left: calc(0.5rem + 1vw);
    transform: rotate(-90deg) translate(25%, -50%);
`
const Skills = styled(NavLink)`
    ${linkCommonStyles}
    position: absolute;
    top: 50%;
    right: calc(0.5rem + 1vw);
    transform: rotate(90deg) translate(-25%, -50%);
`
const BottomBar = styled.div`
    display: flex;
    justify-content: space-evenly;
    position: absolute;
    bottom: 1rem;
    left: 0;
    right: 0;
    width: 100%;
`
const BottomNavItem = styled(NavLink)`
    ${linkCommonStyles}
`

const Home = () => {
    return (
        <MainContainer>
            <Container>
                <LogoComponent />
                <Contact to="/contact">
                    <motion.h2
                        initial={{
                            y: -200,
                            transition: { type: "spring", duration: 1.5, delay: 0.8 },
                        }}
                        animate={{
                            y: 0,
                            transition: { type: "spring", duration: 1.5, delay: 0.8 }
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Contact
                    </motion.h2>
                </Contact>
                <About to="/about">
                    <motion.h2
                        initial={{
                            y: -200,
                            transition: { type: "spring", duration: 1.5, delay: 0.8 },
                        }}
                        animate={{
                            y: 0,
                            transition: { type: "spring", duration: 1.5, delay: 0.8 }
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        About
                    </motion.h2>
                </About>
                <Skills to="/skills">
                    <motion.h2
                        initial={{
                            y: -200,
                            transition: { type: "spring", duration: 1.5, delay: 0.8 },
                        }}
                        animate={{
                            y: 0,
                            transition: { type: "spring", duration: 1.5, delay: 0.8 }
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Skills
                    </motion.h2>
                </Skills>
                <BottomBar>
                    <BottomNavItem to="/work">
                        <motion.h2
                            initial={{
                                y: 200,
                                transition: { type: "spring", duration: 1.5, delay: 0.8 },
                            }}
                            animate={{
                                y: 0,
                                transition: { type: "spring", duration: 1.5, delay: 0.8 }
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            Work
                        </motion.h2>
                    </BottomNavItem>
                    <BottomNavItem to="/blogs">
                        <motion.h2
                            initial={{
                                y: 200,
                                transition: { type: "spring", duration: 1.5, delay: 0.8 },
                            }}
                            animate={{
                                y: 0,
                                transition: { type: "spring", duration: 1.5, delay: 0.8 }
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            Blogs
                        </motion.h2>
                    </BottomNavItem>
                </BottomBar>
            </Container>
            <MainContent />
        </MainContainer>
    )
}

export default Home
