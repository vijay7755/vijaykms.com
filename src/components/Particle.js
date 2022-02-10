import React from "react"
import styled from "styled-components"
import Particles from "react-particles-js"

import { primeTheme } from "styles/themes"
import reactImg from "assets/images/react_logo.png"
import vsCodeImg from "assets/images/vs_code_logo.png"
import fireImg from "assets/images/firebase_logo.png"
import htmlImg from "assets/images/html_logo.png"
import jsImg from "assets/images/js_logo.png"
import sassImg from "assets/images/sass_logo.png"
import nodeImg from "assets/images/nodejs_logo.png"

const snow = {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": false
            }
        },
        "size": {
            "value": 5,
            "random": true
        },
        "move": {
            "direction": "bottom",
            "out_mode": "out"
        },
        "line_linked": {
            "enable": false
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 250,
                "size": 0,
                "duration": 2,
                "opacity": 0,
                "speed": 3
            },
            "repulse": {
                "distance": 400,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    }
}

const images = {
    "particles": {
        "number": {
            "value": 30,
            "density": {
                "enable": true,
                "value_area": 500
            }
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "speed": 1,
            "out_mode": "out"
        },
        "shape": {
            "type": [
                "image",
            ],
            "image": [
                {
                    "src": reactImg,
                    "height": 20,
                    "width": 23
                },
                {
                    "src": vsCodeImg,
                    "height": 20,
                    "width": 20
                },
                {
                    "src": fireImg,
                    "height": 20,
                    "width": 20
                },
                {
                    "src": htmlImg,
                    "height": 20,
                    "width": 23
                },
                {
                    "src": nodeImg,
                    "height": 20,
                    "width": 20
                },
                {
                    "src": jsImg,
                    "height": 20,
                    "width": 20
                },
                {
                    "src": sassImg,
                    "height": 20,
                    "width": 20
                }
            ]
        },
        "size": {
            "value": 30,
            "random": false,
            "anim": {
                "enable": true,
                "speed": 1,
                "size_min": 10,
                "sync": false
            }
        }
    },
    "retina_detect": false
}

const atomic = {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": primeTheme.secondary
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": primeTheme.secondary
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": primeTheme.secondary,
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "retina_detect": true
}

const Box = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;
`

const Particle = ({ type }) => {
    const particleType = () => {
        switch (type) {
            case "snow":
                return snow
            case "images":
                return images
            case "atomic":
                return atomic
            default:
                return snow
        }
    }
    return (
        <Box>
            <Particles
                style={{ position: "absolute", top: 0 }}
                params={particleType()} />
        </Box>
    )
}

export default Particle
