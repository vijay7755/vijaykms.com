import React from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { motion } from "framer-motion"


const Logo = styled(motion.h2)`
    color: ${props => props.color ? props.color : props.theme.secondary};
    position: fixed;
    display: inline-block;
    top: 1rem;
    left: calc(0.5rem + 1vw);
    font-weight: 600;
    cursor: pointer;
    z-index: 4;
    /* TODO: Responsive font size */
    /* font-size: smaller; */ 
`

const LogoComponent = ({ color }) => {

    return (
        <NavLink to="/">
            <Logo
                initial={{
                    y: -200,
                    transition: { type: "spring", duration: 1.5, delay: 0.5 },
                }}
                animate={{
                    y: 0,
                    transition: { type: "spring", duration: 1.5, delay: 0.5 }
                }}
                color={color}>Vijay K M S</Logo>
        </NavLink>

    )
}

export default LogoComponent