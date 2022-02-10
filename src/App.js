import React from "react"
import GlobalStyles from "styles/globalStyles"
import { BrowserRouter } from "react-router-dom"
import { Routes, Route } from "react-router"
import { ThemeProvider } from "styled-components"

import { primeTheme } from "styles/themes"
import Home from "pages/home"
import About from "pages/about"
import Skills from "pages/skills"
import Blogs from "pages/blogs"
import Work from "pages/work"
import Contact from "pages/contact"

const App = () => {

    return (
        <BrowserRouter>
            <GlobalStyles />
            <ThemeProvider theme={primeTheme}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/work" element={<Work />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </ThemeProvider>
        </ BrowserRouter>
    )
}

export default App
