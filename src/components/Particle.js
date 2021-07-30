// Author : Vincent Garreau  - vincentgarreau.com
// MIT license: opensource.org/licenses/MIT
// Demo / Generator : vincentgarreau.com/particles.js
// GitHub : github.com/VincentGarreau/particles.js
// How to use? : Check the GitHub README

import React from 'react';
import Particles from 'react-particles-js'

export default function Particle(){
    return (
        <>
            <Particles width="100%" height="100vh"

            params={{
                    "particles": {
                        "number": {
                            "value": 160,
                            "density": {
                                "enable": false
                            }
                        },
                        "size": {
                            "value": 10,
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
                        "events": {
                            "onclick": {
                                "enable": true,
                                "mode": "remove"
                            }
                        },
                        "modes": {
                            "remove": {
                                "particles_nb": 10
                            }
                        }
                    }
                }} />
        </>
    );
};