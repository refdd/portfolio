import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Text,
  Sphere,
  Box,
  Torus,
  Octahedron,
  MeshDistortMaterial,
  MeshWobbleMaterial,
} from "@react-three/drei";
import CanvasLoader from "../components/heroSections/CanvasLoader.jsx";
import { skills } from "../constants/index.js";

const AnimatedSphere = ({ position, color, scale = [1, 1, 1] }) => {
  const ref = useRef();
  useFrame((state) => {
    ref.current.position.y =
      position[1] + Math.sin(state.clock.elapsedTime) * 0.1;
    ref.current.rotation.x = state.clock.elapsedTime * 0.1;
    ref.current.rotation.y = state.clock.elapsedTime * 0.2;
  });

  return (
    <Sphere ref={ref} scale={scale} position={position}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.4}
        speed={1.5}
        roughness={0}
      />
    </Sphere>
  );
};

const AnimatedBox = ({ position, color, scale = [1, 1, 1] }) => {
  const ref = useRef();
  useFrame((state) => {
    ref.current.position.y =
      position[1] + Math.cos(state.clock.elapsedTime * 1.2) * 0.15;
    ref.current.rotation.x = state.clock.elapsedTime * 0.15;
    ref.current.rotation.y = state.clock.elapsedTime * 0.25;
    ref.current.rotation.z = state.clock.elapsedTime * 0.1;
  });

  return (
    <Box ref={ref} scale={scale} position={position}>
      <MeshWobbleMaterial
        color={color}
        attach="material"
        speed={2}
        factor={0.6}
      />
    </Box>
  );
};

const AnimatedTorus = ({ position, color, scale = [1, 1, 1] }) => {
  const ref = useRef();
  useFrame((state) => {
    ref.current.position.y =
      position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.12;
    ref.current.rotation.x = state.clock.elapsedTime * 0.2;
    ref.current.rotation.y = state.clock.elapsedTime * 0.3;
  });

  return (
    <Torus ref={ref} scale={scale} position={position} args={[1, 0.3, 8, 16]}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.3}
        speed={2}
        roughness={0.1}
      />
    </Torus>
  );
};

const AnimatedOctahedron = ({ position, color, scale = [1, 1, 1] }) => {
  const ref = useRef();
  useFrame((state) => {
    ref.current.position.y =
      position[1] + Math.sin(state.clock.elapsedTime * 1.5) * 0.08;
    ref.current.rotation.x = state.clock.elapsedTime * 0.18;
    ref.current.rotation.y = state.clock.elapsedTime * 0.22;
  });

  return (
    <Octahedron ref={ref} scale={scale} position={position}>
      <MeshWobbleMaterial
        color={color}
        attach="material"
        speed={1.5}
        factor={0.4}
      />
    </Octahedron>
  );
};

const SkillText = ({ position, children, color = "#ffffff" }) => {
  const ref = useRef();
  useFrame((state) => {
    ref.current.position.y =
      position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.05;
  });

  return (
    <Text
      ref={ref}
      position={position}
      fontSize={0.6}
      color={color}
      anchorX="center"
      anchorY="middle"
      maxWidth={2}
      lineHeight={1}
      letterSpacing={-0.02}
      textAlign="center"
    >
      {children}
    </Text>
  );
};

const SkillsCanvas = () => {
  return (
    <div className="w-full h-full">
      <Canvas>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Suspense fallback={<CanvasLoader />}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />

          {/* Main center sphere */}
          <AnimatedSphere
            position={[0, 0, 0]}
            color="#915eff"
            scale={[2, 2, 2]}
          />
          <SkillText position={[0, 0, 0]} color="#ffffff">
            Full Stack
          </SkillText>

          {/* Frontend Skills */}
          <AnimatedSphere
            position={[-4, 2, 0]}
            color="#61dafb"
            scale={[1.2, 1.2, 1.2]}
          />
          <SkillText position={[-4, 2, 0]} color="#61dafb">
            React.js
          </SkillText>

          <AnimatedBox
            position={[-6, -1, 0]}
            color="#000000"
            scale={[1, 1, 1]}
          />
          <SkillText position={[-6, -1, 0]} color="#ffffff">
            Next.js
          </SkillText>

          <AnimatedTorus
            position={[-2, -3, 0]}
            color="#3178c6"
            scale={[1.1, 1.1, 1.1]}
          />
          <SkillText position={[-2, -3, 0]} color="#3178c6">
            TypeScript
          </SkillText>

          <AnimatedOctahedron
            position={[-4, -4, 0]}
            color="#06b6d4"
            scale={[1, 1, 1]}
          />
          <SkillText position={[-4, -4, 0]} color="#06b6d4">
            Tailwind
          </SkillText>

          {/* Backend Skills */}
          <AnimatedBox
            position={[4, 2, 0]}
            color="#68a063"
            scale={[1.2, 1.2, 1.2]}
          />
          <SkillText position={[4, 2, 0]} color="#68a063">
            Node.js
          </SkillText>

          <AnimatedTorus
            position={[6, -1, 0]}
            color="#000000"
            scale={[1, 1, 1]}
          />
          <SkillText position={[6, -1, 0]} color="#ffffff">
            Express
          </SkillText>

          <AnimatedOctahedron
            position={[2, -3, 0]}
            color="#47a248"
            scale={[1.1, 1.1, 1.1]}
          />
          <SkillText position={[2, -3, 0]} color="#47a248">
            MongoDB
          </SkillText>

          <AnimatedBox
            position={[4, -4, 0]}
            color="#336791"
            scale={[1, 1, 1]}
          />
          <SkillText position={[4, -4, 0]} color="#336791">
            PostgreSQL
          </SkillText>

          {/* 3D & Animation Skills */}
          <AnimatedTorus
            position={[0, 4, 0]}
            color="#ff6b6b"
            scale={[1.1, 1.1, 1.1]}
          />
          <SkillText position={[0, 4, 0]} color="#ff6b6b">
            Three.js
          </SkillText>

          <AnimatedBox
            position={[-2, 5, 0]}
            color="#ff9ff3"
            scale={[1, 1, 1]}
          />
          <SkillText position={[-2, 5, 0]} color="#ff9ff3">
            React Three Fiber
          </SkillText>

          <AnimatedOctahedron
            position={[2, 5, 0]}
            color="#54a0ff"
            scale={[1, 1, 1]}
          />
          <SkillText position={[2, 5, 0]} color="#54a0ff">
            Framer Motion
          </SkillText>

          {/* Mobile Development */}
          <AnimatedBox
            position={[0, -5, 0]}
            color="#61dafb"
            scale={[1.1, 1.1, 1.1]}
          />
          <SkillText position={[0, -5, 0]} color="#61dafb">
            React Native
          </SkillText>

          <AnimatedTorus
            position={[-2, -6, 0]}
            color="#764abc"
            scale={[1, 1, 1]}
          />
          <SkillText position={[-2, -6, 0]} color="#764abc">
            Redux
          </SkillText>

          <AnimatedOctahedron
            position={[2, -6, 0]}
            color="#e535ab"
            scale={[1, 1, 1]}
          />
          <SkillText position={[2, -6, 0]} color="#e535ab">
            GraphQL
          </SkillText>

          {/* Additional Technologies - Different Shapes */}
          <AnimatedTorus
            position={[-7, 0, 0]}
            color="#f97316"
            scale={[0.8, 0.8, 0.8]}
          />
          <SkillText position={[-7, 0, 0]} color="#f97316">
            Docker
          </SkillText>

          <AnimatedOctahedron
            position={[7, 0, 0]}
            color="#10b981"
            scale={[0.9, 0.9, 0.9]}
          />
          <SkillText position={[7, 0, 0]} color="#10b981">
            Git
          </SkillText>

          <AnimatedBox
            position={[0, -7, 0]}
            color="#8b5cf6"
            scale={[0.8, 0.8, 0.8]}
          />
          <SkillText position={[0, -7, 0]} color="#8b5cf6">
            Webpack
          </SkillText>

          <AnimatedTorus
            position={[-3, 6, 0]}
            color="#ef4444"
            scale={[0.7, 0.7, 0.7]}
          />
          <SkillText position={[-3, 6, 0]} color="#ef4444">
            SEO
          </SkillText>

          <AnimatedBox
            position={[3, 6, 0]}
            color="#06b6d4"
            scale={[0.7, 0.7, 0.7]}
          />
          <SkillText position={[3, 6, 0]} color="#06b6d4">
            Cloud
          </SkillText>
        </Suspense>
      </Canvas>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="c-space my-20" id="skills">
      <div className="w-full text-white-600">
        <p className="head-text">My Skills</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* 3D Skills Visualization */}
          <div className=" col-span-1 w-full h-[500px] lg:h-full skills-3d-container">
            <SkillsCanvas />
          </div>

          {/* Skills Categories */}
          <div className=" col-span-1 w-full space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.map((category, index) => (
                <div key={index} className="skills-card">
                  <h3 className="text-xl font-bold text-white mb-4">
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="skill-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-2">
            {/* Additional Info */}
            <div className="skills-info-card">
              <h3 className="text-lg font-bold text-white mb-3">
                What I Bring to the Table
              </h3>
              <ul className="space-y-2 text-white-600">
                <li>• 4+ years of full-stack development experience</li>
                <li>
                  • Expertise in modern JavaScript frameworks and libraries
                </li>
                <li>• Strong database design and API development skills</li>
                <li>• Experience with 3D web development and animations</li>
                <li>• Mobile app development with React Native</li>
                <li>• Cloud deployment and DevOps practices</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
