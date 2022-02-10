import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"

import { primeTheme } from "styles/themes"
import { Home, About, Skill, Work, Blog, Contact } from "./svgs"

const Icon = styled.div`
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

        p:hover {
            color: ${props => props.theme.primary};
        }
        
    }
`

const NavIcon = ({ path, text, icon }) => {
    const [iconFill, setIconFill] = useState(primeTheme.secondary)

    const renderIcon = () => {
        switch (icon) {
            case "home":
                return <Home width={35} height={35} fill={iconFill} />
            case "about":
                return <About width={35} height={35} fill={iconFill} />
            case "skills":
                return <Skill width={35} height={35} fill={iconFill} />
            case "work":
                return <Work width={35} height={35} fill={iconFill} />
            case "blogs":
                return <Blog width={35} height={35} fill={iconFill} />
            case "contact":
                return <Contact width={35} height={35} fill={iconFill} />
        }
    }

    return (
        <Icon
            onMouseOver={() => setIconFill(primeTheme.primary)}
            onMouseOut={() => setIconFill(primeTheme.secondary)}>
            <NavLink to={path}>
                {renderIcon()}
                <p>{text}</p>
            </NavLink>
        </Icon>
    )
}

export default NavIcon
