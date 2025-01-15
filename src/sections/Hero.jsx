import React from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import CanvasLoader from "../components/heroSections/CanvasLoader.jsx";
import { HackerRoom } from "../components/heroSections/HackerRoom.jsx";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index.js";
import { Leva, useControls } from "leva";
import HeroCamera from "../components/heroSections/HeroCamera.jsx";
import Target from "../components/heroSections/Target.jsx";
import ReactLogo from "../components/heroSections/ReactLogo.jsx";
import Rings from "../components/heroSections/Rings.jsx";
import Cube from "../components/heroSections/Cube.jsx";
import ButtonHero from "../components/heroSections/ButtonHero.jsx";

function Hero() {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  // const x = useControls("hackroom", {
  //     positionX: {value: 2.5, min: -10, max: 1,},
  //     positionY: {value: 2.5, min: -10, max: 1,},
  //     positionZ: {value: 2.5, min: -10, max: 1,},
  //     rotationX: {value: 0.1, min: -Math.PI, max: Math.PI,},
  //     rotationY: {value: -Math.PI, min: -Math.PI, max: Math.PI,},
  //     rotationZ: {value: 0, min: -Math.PI, max: Math.PI,},
  //     scale: {value: 0.05, min: 0.01, max: 0.1, step: 0.01},
  //
  //
  // })
  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Mohamed Refat <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Building websites & Applications
        </p>
      </div>
      <div className="w-full h-full absolute inset-0">
        <Leva hidden />
        <Canvas className="w-full h-full">
          <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />{" "}
          <Suspense fallback={<CanvasLoader />}>
            {/* To hide controller */}
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />

            {/* <HeroCamera isMobile={isMobile}> */}
            {/*<HackerRoom scale={sizes.deskScale} position={sizes.deskPosition}*/}
            {/*            rotation={[0.1, -Math.PI, 0]}/> */}
            <HackerRoom
              scale={sizes.deskScale}
              position={sizes.deskPosition}
              rotation={[0.1, -Math.PI, 0]}
              // position={[x.positionX, x.positionY, x.positionZ]}
              // rotation={[x.rotationX, x.rotationY, x.rotationZ]}
              // scale={[x.scale, x.scale, x.scale]}
            />
            {/* </HeroCamera> */}

            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Rings position={sizes.ringPosition} />
              <Cube position={sizes.cubePosition} />
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <ButtonHero
            name="Let's work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div>
    </section>
  );
}

export default Hero;
