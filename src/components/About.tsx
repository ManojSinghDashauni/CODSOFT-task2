import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import ResumeDownload from "./Resume";
const About = () => {
  return (
    <div id="about" className="relative grid grid-cols-12 gap-5 px-20 h-screen place-content-center bg-neutral-950 p-8">
      <div className="col-start-4 col-end-9">
        <p className="text-left text-6xl font-black text-neutral-50">
          About me
        </p>
        <p className="text-left mx-auto mt-4 text-neutral-400">
          Hey, my name is Manoj singh dashauni, and I'm a Frontend Developer. My
          passion is to create and develop a clean UI/UX for my users.
        </p>
        <p className="text-left mx-auto mt-4 text-neutral-400">
          My main stack currently is React.js in combination with Tailwind CSS
          and TypeScript.
        </p>
        <p className="text-left mx-auto mt-4 text-neutral-400">
          You can check more about my profesional profile here: <ResumeDownload/>
        </p>
        <p className="text-left mx-auto mt-4 text-neutral-400">
          📍 Nainital, Uttrarakhand, India.
        </p>
      </div>

      <div className="col-start-4 col-end-8 grid grid-cols-8 gap-4 -mt-2">
        <button className="text-neutral-20 w-fit px-4 py-2 font-semibold text-neutral-200 transition-colors">
          <a href="https://github.com/ManojSinghDashauni" target="_blank">
            <FaGithub className="size-10" />
          </a>
        </button>
        <button className="text-neutral-20 w-fit px-4 py-2 font-semibold text-neutral-200 transition-colors">
          <a
            href="https://www.linkedin.com/in/manoj-dashauni-216a8233a/"
            target="_blank"
          >
            <FaLinkedin className="size-10" />
          </a>
        </button>
      </div>
    </div>
  );
};

export default About;
