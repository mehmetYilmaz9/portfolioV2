import React, { useCallback }  from "react"

import Particles from "react-particles";
import { loadFull } from "tsparticles";

const HomePage = () => {
    const particlesInit = useCallback(async (engine) => {
        
        await loadFull(engine);
      }, []);
    
      const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
      }, []);

    return (
        <section>
            <div className="max-w-6xl mx-auto  bg-white dark:bg-gray-800  ">
              <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                  fpsLimit: 150,
                  interactivity: {
                    events: {
                      onClick: {
                        enable: false,
                        mode: "push",
                      },
                      onHover: {
                        enable: false,
                        mode: "repulse",
                      },
                      resize: true,
                    },
                    modes: {
                      push: {
                        quantity: 6,
                      },
                      repulse: {
                        distance: 200,
                        duration: 0.4,
                      },
                    },
                  },
                  particles: {
                    color: {
                      value: "#696969",
                    },
                    links: {
                      color: "#696969",
                      distance: 150,
                      enable: true,
                      opacity: 0.5,
                      width: 1,
                    },
                    collisions: {
                      enable: true,
                    },
                    move: {
                      directions: "none",
                      enable: true,
                      outModes: {
                        default: "bounce",
                      },
                      random: false,
                      speed: 2.08120772123013452,
                      straight: false,
                    },
                    number: {
                      density: {
                        enable: true,
                        area: 800,
                      },
                      value: 80,
                    },
                    opacity: {
                      value: 0.5,
                    },
                    shape: {
                      type: "edge",
                      stroke : {
                        width: 3,
                        color: "#000000"
                      }
                    },
                    size: {
                      value: { min: 1, max: 5 },
                    },
                  },
                  detectRetina: true,
                }}
              />
              
              <div className="flex justify-center  items-center h-64 ">
                <div className="">
                  <h1 className="text-2xl py-2 flex justify-center font-serif font-semibold">
                    Funny Web3 Developer 
                  </h1>
                  <h2 className="text-xl italic flex justify-center font-serif font-medium">Hello There, I&lsquo;m Mehmet</h2>

                  <div className="my-3">
                    <span className=" flex justify-center font-extralight	text-lg   tracking-wide ">
                      <a href="https://github.com/mehmetYilmaz9" className="mx-2" target="_blank" rel="noopener noreferrer">Github</a> | 
                      <a href="https://www.linkedin.com/in/mehmet-yilmaz-50597715b/"  target="_blank" rel="noopener noreferrer" className="mx-2">Linkedin</a> |
                      <a href="https://twitter.com/mehmetydev"  className="mx-2" target="_blank" rel="noopener noreferrer">Twitter</a> 
                    </span>
                  </div>
                </div>
              </div>
            </div>
        </section>
    )
}

export default HomePage;
