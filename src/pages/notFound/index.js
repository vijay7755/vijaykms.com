import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

import LogoComponent from "components/LogoComponent"
import PageTitle from "components/PageTitle"
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
const MessageSection = styled.div`
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
`
const BackToSite = styled(Link)`
  padding: 1rem;
  background: ${props => props.theme.primary};
  color: ${props => props.theme.dark};
  border-radius: 5px;
  font-weight: 800;
  text-decoration: none;
`

const NotFoundPage = () => {
  return (
    <PageWrapper>
      <LogoComponent />
      <PageTitle title1="PAGE" title2="Not Found" top={"2vh"} left={"60%"} />
      <Container>
        <MessageSection>
          <h1>404 Error</h1>
          <div>
            <p>Looks like you have entered the URL that doesn't exist on this site.</p>
          </div>
          <BackToSite to="/">
             {"<"} Back to our site
          </BackToSite>
        </MessageSection>
      </Container>
    </PageWrapper>
  )
}

export default NotFoundPage

