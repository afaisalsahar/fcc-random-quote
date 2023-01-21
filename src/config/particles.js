const particlesConfig = {
    fpsLimit: 40,
    particles: {
        number: {
            value: 150,
            density: {
                enable: true,
            },
        },
        color: {
            value: ["#fdcf58", "#757676", "#f27d0c", "#800909", "#f07f13"],
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
            },
            polygon: {
                nb_sides: 5
            }
        },
        opacity: {
            value: { min: 0.1, max: 0.5 },
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity: {
                    value: { min: 0.1, max: 0.5 }
                },
                sync: false
            }
        },
        size: {
            value: { min: 1, max: 3 },
            random: true,
            anim: {
                enable: true,
                speed: 1,
                sync: false
            }
        },
        move: {
            enable: true,
            speed: 3,
            random: true,
        },
    },
    interactivity: {
        detectsOn: "canvas",
        events: {
            onHover: {
              enable: true,
              mode: 'bubble'
            },
            onClick: {
                enable: true,
                mode: 'repulse',
            },
            resize: true,
        },
    }
};

export default particlesConfig;