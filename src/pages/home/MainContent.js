import React from "react"
import styled, { css, keyframes } from "styled-components"
import { motion } from "framer-motion"

import { media } from "styles/responsive"
import { Download } from "components/svgs"
import { primeTheme } from "styles/themes"
import ProfilePic from "assets/images/proPic.jpg"
import socialLinks from "data/socialLinks.json"
import SocialLinks from "components/SocialLinks"
import { useDesktop, useLaptop, useTablet, useMobile, useMobile_lg } from "utils/breakpoints"

const Box = styled(motion.div)`
    position: absolute;
    box-sizing: border-box;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 77vh;
    width: 86vw;
    background: ${props => props.theme.dark};
    border: 5px solid ${props => props.theme.secondary};
    border-radius: 20px;
    display: flex;
    padding: 5px;

    ${media.tablet} {
        height: 80vh;
        width: 75vw;
        flex-direction: column-reverse;
    }
    ${media.mobile_lg} {
        height: 80vh;
        width: 74vw;
    }
    ${media.mobile} {
        height: 80vh;
        width: 76vw;
    }
`
const Content = styled(motion.div)`
    box-sizing: border-box;
    background: ${props => props.theme.secondary};
    border-radius: 13px 0 0 13px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${media.tablet} {
        border-radius: 0 0 13px 13px;
    }
`
const Text = styled(motion.div)`
    font-size: calc(1em + 1.5vw);
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${props => props.theme.dark};

    &>*:nth-child(2) {
        span {
            color: ${props => props.theme.primary};
        }
    }
`
const slide = keyframes`
    0% {margin-top: -360px;}
    10% {margin-top: -270px;}
    25% {margin-top: -270px;}
    35% {margin-top: -180px;}
    50% {margin-top: -180px;}
    65% {margin-top: -90px;}
    75% {margin-top: -90px;}
    85% {margin-top: 0;}
    99.98% {margin-top: 0;}
    100% {margin-top: -360px;}
`

const Slider = styled.div`
    height: 40px;
    padding: 7px;
    overflow: hidden;
    text-align: center;
    width: 100%;

    p {
        height: 40px;
        margin-bottom: 50px;
        font-weight: bolder;
        color: ${props => props.theme.secondary};
        background: ${props => props.theme.dark};
    }

    &>*:first-child {
        animation: ${slide} 7s linear infinite;
        animation-delay: 2s;
    }
`

const DownloadButton = styled(motion.a)`
    background: ${props => props.theme.primary};
    text-decoration: none;
    text-align: center;
    border: none;
    border-radius: 4px;
    width: 75%;
    height: max-content;
    padding: 0.6rem calc(0.5rem + 1vw);
    color: ${props => props.theme.dark};
    font-weight: bolder;
    font-size: 1.5rem;
    margin-top: 1rem;
    transition: box-shadow 0.4s ease-in-out;
    box-shadow: 1px 2px 5px 1px ${props => props.theme.gray};
    cursor: pointer;

    &:hover {
        box-shadow: 1px 2px 15px 2px ${props => props.theme.primary};
    }
`
const SocialIcons = styled(motion.div)`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 1.5rem;
    width: calc(60% + 2vw);
`

const ProfilePicContainer = styled.div`
    background: ${props => props.theme.dark};
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 0 13px 13px 0;
    ${media.tablet} {
        border-radius: 13px 13px 0 0;
    }
`
const Image = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    z-index: 2;
    height: 400px;
    width: 400px;

    ${media.desktop} {
        height: 420px;
        width: 420px;
    }
    ${media.laptop} {
        height: 370px;
        width: 370px;
    }
    @media all and (max-width: 863px) {
        height: 330px;
        width: 330px;
    }
    ${media.tablet} {
        height: 300px;
        width: 300px;
    }
    ${media.mobile_lg} {
        height: 280px;
        width: 280px;
    }
    ${media.mobile} {
        height: 250px;
        width: 250px;
    }

    div {
        height: 92%;
        width: 92%;
        background-image: url(${ProfilePic});
        background-size: cover;
        border-radius: 50%;
        background-position: center;
        background-repeat: no-repeat;
    }
`
const circleResponsiveSize = css`
    height: 360px;
    width: 360px;

    ${media.desktop} {
        height: 340px;
        width: 340px;
    }
    ${media.laptop} {
        height: 310px;
        width: 310px;
    }
    @media all and (max-width: 863px) {
        height: 270px;
        width: 270px;
    }
    ${media.tablet} {
        height: 240px;
        width: 240px;
    }
    ${media.mobile_lg} {
        height: 220px;
        width: 220px;
    }
    ${media.mobile} {
        height: 190px;
        width: 190px;
    }
`
const circleCommonProps = css`
    position: absolute;
    border-radius: 50%;
    z-index: 0;
    ${circleResponsiveSize}
`
const Circle1 = styled.div`
    ${circleCommonProps}
    top: -16%;
    left: -10%;
    background-color: ${props => props.theme.purple};
`
const Circle2 = styled.div`
    ${circleCommonProps}
    bottom: -16%;
    right: -10%;
    background-color: ${props => props.theme.primary};
`

const MainContent = () => {
    const isDesktop = useDesktop()
    const isLaptop = useLaptop()
    const isTablet = useTablet()
    const isMobile_lg = useMobile_lg()
    const isMobile = useMobile()

    const boxAnimate = () => {
        if (isDesktop) {
            return { height: "77vh", width: "86vw" }
        } else if (isLaptop) {
            return { height: "77vh", width: "86vw" }
        } else if (isTablet) {
            return { height: "80vh", width: "75vw" }
        } else if (isMobile_lg) {
            return { height: "80vh", width: "74vw" }
        } else if (isMobile) {
            return { height: "80vh", width: "76vw" }
        } else {
            return { height: "77vh", width: "86vw" }
        }
    }

    return (
        <Box
            initial={{ height: 0, width: 0 }}
            animate={boxAnimate}
            transition={{ type: "spring", duration: 2, delay: 0.5 }}
        >
            <Content
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}>
                <Text
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}>
                    <h2>Hi,</h2>
                    <h4>This is <span><h3>Vijay</h3></span></h4>
                    <Slider>
                        <p>Passionate Photographer</p>
                        <p>Full Stack Developer</p>
                        <p>Creative Web Designer</p>
                        <p>Front-End Engineer</p>
                    </Slider>
                </Text>
                <DownloadButton
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                    href="Resume.pdf"
                    download="vijay_resume.pdf"
                >
                    Resume <Download width={25} height={25} fill={primeTheme.dark} />
                </DownloadButton>
                <SocialIcons
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                >
                    {
                        socialLinks.map(({ site, link }, i) => {
                            return <SocialLinks 
                                            key={site} 
                                            site={site} 
                                            link={link} 
                                            delay={+(+(i) * 0.2).toFixed(1) + 2.8} />
                        })
                    }
                </SocialIcons>
            </Content>
            <ProfilePicContainer>
                <Image>
                    <div></div>
                </Image>
                <Circle1 />
                <Circle2 />
            </ProfilePicContainer>
        </Box>
    )
}

export default MainContent
