import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

import { Compass, Cross } from "./svgs"
import { primeTheme } from "styles/themes"
import NavIcon from "./NavIcon"


const NavContainer = styled.div`
    position: fixed;
    top: 1rem;
    right: calc(1rem + 1vw);
    background: ${props => props.toggle ? props.theme.bg_glass : "none"};
    border: 1px solid ${props => props.toggle ? props.theme.glass_border : "none"};
    border-radius: 50px;
    width: 50px;
    height: ${props => props.toggle ? "auto" : "50px"};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    z-index: 10;
    overflow: hidden;
    backdrop-filter: blur(${props => props.toggle ? "7px" : "0"});
    transform: scale(${props => props.toggle ? 1 : 1.3});

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 8px;
        transform: translateY(-1.5px);
        color: ${props => props.theme.secondary};

        p {
            font-size: 11px;
            color: ${props => props.theme.secondary};
            text-decoration: none;
            transform: translateY(-5px);
            text-align: center;
        }
    }
`

const NavBar = () => {
    const [toggleNav, setToggleNav] = useState(false)
    const [iconFill, setIconFill] = useState(primeTheme.secondary)
    const navRef = useRef()
    const compassRef = useRef(null)

    useEffect(() => {
        const rotate = () => {
            compassRef.current.style.transform = `rotate(` + -window.pageYOffset + `deg)`
        }

        window.addEventListener("scroll", rotate)

        return () => {
            window.removeEventListener("scroll", rotate)
        }

    }, [])

    useEffect(() => {
        if (!toggleNav) {
            setIconFill(primeTheme.secondary)
        }

        const checkIfClickedOutside = e => {
            if (toggleNav && navRef.current && !navRef.current.contains(e.target)) {
                setToggleNav(false)
            }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }

    }, [toggleNav])

    return (
        <NavContainer toggle={toggleNav} ref={navRef} >
            <motion.div
                initial={{
                    y: -200,
                    transition: { type: "spring", duration: 1.5, delay: 1.5 },
                }}
                animate={{
                    y: 0,
                    transition: { type: "spring", duration: 1.5, delay: 1.5 }
                }}
                ref={compassRef}
                onClick={() => setToggleNav(prev => !prev)}
                onMouseOver={() => setIconFill(primeTheme.primary)}
                onMouseOut={() => setIconFill(primeTheme.secondary)}
            >
                {toggleNav ?
                    <Cross width={35} height={35} fill={iconFill} /> :
                    <Compass width={35} height={35} fill={iconFill} />}

            </motion.div>
            <NavIcon path="/" text="Home" icon="home" />
            <NavIcon path="/about" text="About" icon="about" />
            <NavIcon path="/skills" text="Skills" icon="skills" />
            <NavIcon path="/work" text="Work" icon="work" />
            <NavIcon path="/blogs" text="Blogs" icon="blogs" />
            <NavIcon path="/contact" text="Contact" icon="contact" />
        </NavContainer>
    )
}

export default NavBar
