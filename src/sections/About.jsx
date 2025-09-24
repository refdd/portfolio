import { useState } from "react";
import ButtonHero from "../components/heroSections/ButtonHero.jsx";
import Globe from "react-globe.gl";

function About() {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("mohamedrefat8434@gmail.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        {/* grid 1 */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Hi, I’m Mohamed Refat</p>
              <p className="grid-subtext">
                Experienced Full Stack Developer with 4+ years of expertise in
                building end-to-end web applications using modern technologies
                including React.js, Next.js, Node.js, and database management.
                Proven track record of developing scalable, interactive, and
                responsive applications across frontend and backend systems.
              </p>
            </div>
          </div>
        </div>
        {/* grid 2 */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid2.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                Proficient in React.js, Next.js, React Native, TypeScript,
                Node.js, Express, MongoDB, PostgreSQL, RESTful APIs, GraphQL,
                Redux.js, Three.js, React Three Fiber, SEO Optimization, Cloud
                Services, Docker, and Git/GitHub.
              </p>
            </div>
          </div>
        </div>
        {/* grid 3 */}
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 26.8206, // Egypt's latitude
                    lng: 30.8025, // Egypt's longitude
                    text: "Egypt",
                    color: "white",
                    size: 90,
                  },
                ]}
                markersData={[
                  {
                    id: "marker1",
                    city: "Cairo",
                    color: "red",
                    coordinates: [30.8025, 26.8206],
                    value: 1,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                I’m very flexible with time zone communications & locations
              </p>
              <p className="grid-subtext">
                I&apos;m based in Nasr City, Egypt and open to remote work
                worldwide.
              </p>
              <ButtonHero
                name="Contact Me"
                isBeam
                containerClass="w-full mt-10"
              />
            </div>
          </div>
        </div>
        {/* grid 4 */}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">
                Strong Communication & Collaboration
              </p>
              <p className="grid-subtext">
                Strong communication skills with demonstrated ability to
                collaborate effectively in cross-functional teams and deliver
                client-focused solutions. Proficient in API development,
                database design, cloud deployment, and performance optimization.
              </p>
            </div>
          </div>
        </div>
        {/* grid 5 */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  mohamedrefat8434@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
