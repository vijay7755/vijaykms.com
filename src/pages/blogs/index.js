import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

import backgroundImage from "assets/images/blog_bg.jpg"
import LogoComponent from "components/LogoComponent"
import PageTitle from "components/PageTitle"
import blogsData from "data/blogs.json"
import Card from "./Card"
import { media } from "styles/responsive"
import NavBar from "components/NavBar"

const PageWrapper = styled.div`
    width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
`
const Container = styled.div`
    background-color: rgba(0,0,0,0.7);
    width: 100%;
    min-height: 100vh;
    position: relative;
    padding-bottom: 5rem;
`
const CardWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 5vw;
`
const Grid = styled(motion.div)`
    margin-top: calc(2rem + 10vw);
    margin-left: calc(0.3rem + 4vw);
    margin-right: calc(0.3rem + 4vw);
    display: grid;
    grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
    grid-gap: calc(1rem + 4vw);

    ${media.tablet} {
        grid-template-columns: repeat(1, minmax(calc(8rem + 15vw), 1fr));
        margin-left: calc(2rem + 10vw);
        margin-right: calc(2rem + 10vw);
    }
    ${media.mobile_lg} {
        margin-left: calc(0.2rem + 3vw);
        margin-right: calc(0.2rem + 3vw);
    }
`
const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.5,
            staggerChildren: 0.3
        }
    }
}

const Blogs = () => {
    return (
        <PageWrapper>
            <Container>
                <NavBar />
                <LogoComponent />
                <PageTitle title1="BLOGS" title2="" top={"2vh"} left={"60%"} />
                <CardWrapper>
                    <Grid
                        className="container"
                        variants={container}
                        initial="hidden"
                        animate="visible"
                    >
                        {blogsData.map((data, i) => <Card key={i} data={data} />)}
                    </Grid>
                </CardWrapper>
            </Container>
        </PageWrapper>
    )
}

export default Blogs
