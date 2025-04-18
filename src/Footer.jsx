import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import logo from './assets/logo.png'

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-gray-200 dark:border-gray-800 px-4 py-10 text-center">
      <div className="max-w-4xl mx-auto space-y-6 bg-white dark:bg-zinc-950">
        <div className="flex flex-row justify-center gap-2 items-center">
            <img src={logo} className="w-10 h-10"></img>
            <p className="font-heading text-xl font-semibold text-black dark:text-white">aiByMusti</p>
        </div>
        <p className="font-subheading text-gray-600 dark:text-gray-400 text-sm">
        Innovating with AI, Engineering the Future.
        </p>

        <div className="flex justify-center gap-5 text-xl text-gray-700 dark:text-gray-300">
          <a href="https://github.com/imustitanveer" target="_blank" rel="noreferrer" className="hover:text-black dark:hover:text-white transition">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/mustassum-tanvir" target="_blank" rel="noreferrer" className="hover:text-black dark:hover:text-white transition">
            <FaLinkedin />
          </a>
          <a href="mailto:mustassum.tanveer@gmail.com" className="hover:text-black dark:hover:text-white transition">
            <FaEnvelope />
          </a>
        </div>

        <p className="text-xs text-gray-400 dark:text-gray-600 font-body">
          © {new Date().getFullYear()} Mustassum "Musti" Tanvir — All rights reserved.
        </p>
      </div>
    </footer>
  );
}