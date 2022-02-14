import React, { lazy, Suspense } from "react"
import GlobalStyles from "styles/globalStyles"
import { BrowserRouter } from "react-router-dom"
import { Routes, Route } from "react-router"
import { ThemeProvider } from "styled-components"

import { primeTheme } from "styles/themes"
import LoadingFallback from "components/LoadingFallback"
const Home = lazy(() => import("pages/home"))
const About = lazy(() => import("pages/about"))
const Skills = lazy(() => import("pages/skills"))
const Blogs = lazy(() => import("pages/blogs"))
const Work = lazy(() => import("pages/work"))
const Contact = lazy(() => import("pages/contact"))
const NotFoundPage = lazy(() => import("pages/notFound"))

const App = () => {

    return (
        <BrowserRouter>
            <GlobalStyles />
            <ThemeProvider theme={primeTheme}>
                <Suspense fallback={<LoadingFallback />}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/blogs" element={<Blogs />} />
                        <Route path="/work" element={<Work />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </Suspense>
            </ThemeProvider>
        </ BrowserRouter>
    )
}

export default App
