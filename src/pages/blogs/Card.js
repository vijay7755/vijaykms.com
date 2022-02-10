import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

const Box = styled.div`
    height: calc(22rem + 10vh);
    background: ${props => props.theme.glass_bg};
    border: 1px solid ${props => props.theme.glass_border};
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 1px 2px 15px 3px rgba(56, 39, 29, 0.712);
    display: flex;
    flex-direction: column;
    gap: 5px;
    z-index: 3;
    color: ${props => props.theme.secondary};
    backdrop-filter: blur(8px);

    p {
        font-size: calc(0.5rem + 1vw);;
    }
`
const Image = styled.div`
    background-image: url(${props => props.img});
    width: 100%;
    height: 50%;
    border-radius: 8px;
    background-size: cover;
    background-position: center center;
`
const Title = styled.h3`
    font-size: calc(0.5rem + 1vw);
    font-weight: 900;
    font-family: 'Montserrat', sans-serif;
    padding-bottom: 5px;
    border-bottom: 2px solid ${props => props.theme.glass_border};
`
const Tag = styled.h5`
    font-weight: 600;
`
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: auto;
`
const Link = styled.a`
    text-decoration: none;
    color: ${props => props.theme.dark};
    font-weight: bolder;
    padding: 10px 20px;
    border-radius: 4px;
    background: ${props => props.theme.secondary};
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
        color: ${props => props.theme.secondary};
        background: ${props => props.theme.primary};
    }
`
const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
}

const Card = ({ data }) => {
    const { title, link, img_link, pubDate, content, categories } = data

    return (
        <motion.div className="item" variants={item}>
            <Box>
                <Image img={img_link} />
                <Title>{title}</Title>
                <p>{content}</p>
                <div>
                    {categories.map(item => <Tag key={item}>{`#${item}`}&nbsp;&nbsp;</Tag>)}
                </div>
                <Bottom>
                    <Link target="_blank" href={link}>Read</Link>
                    <p>{pubDate}</p>
                </Bottom>
            </Box>
        </motion.div>
    )
}

export default Card
