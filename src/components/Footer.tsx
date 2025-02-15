import { FaGithub, FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="relative flex flex-row justify-around items-center h-10 bg-neutral-950 p-8">
      <p className="text-left  text-neutral-400">
      Copyright © 2025. All rights are reserved
      </p>
      <div className="flex items-center justify-center">
        <button className="text-neutral-20 w-fit px-4 py-2 font-semibold text-neutral-200 transition-colors">
          <a href="https://github.com/ManojSinghDashauni" target="_blank">
            <FaGithub className="size-8" />
          </a>
        </button>
        <button className="text-neutral-20 w-fit px-4 py-2 font-semibold text-neutral-200 transition-colors">
          <a
            href="https://www.linkedin.com/in/manoj-dashauni-216a8233a/"
            target="_blank"
          >
            <FaLinkedin className="size-8" />
          </a>
        </button>

      </div>
    </div>
  )
}

export default Footer