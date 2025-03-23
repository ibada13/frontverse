import Link from "next/link";
import { projects } from "./data";
import { FaGithub } from "react-icons/fa";
import { TbUniverse } from "react-icons/tb";
export default function Projects() {
   return (
        <div className="min-h-screen text-white flex flex-col items-center py-10 w-3/4">
           <h1 className="text-3xl font-bold mb-6 flex items-center gap-x-4 justify-center">
            <p>Front<span className="text-cyan-300">Verse</span></p>
                <TbUniverse color="cyan" size={60} /></h1>
          <h1 className="text-xl text-gray-400   mb-6">my simple front-end projects</h1>
          <div className="grid gap-4 w-full px-6">
          {projects.map((project, index) => (
          <div key={index} className="p-4 w-full rounded-xl shadow-lg flex justify-around items-center">
            <span className="text-xl font-semibold w-1/2">{project.name}</span>
            <Link 
  href={project.link} 
  target="_blank" 
  className="bg-cyan-500 px-6 py-4 rounded-2xl hover:bg-cyan-700 transition-all duration-300 hover:scale-105">
  Live Demo
</Link>

            <Link href={project.githublink} target="_blank" className="text-gray-300 flex items-center space-x-2 hover:text-white transition-colors duration-200">
              <FaGithub className="text-2xl" />
              <span>GitHub</span>
            </Link>
          </div>
        ))}
          </div>
        </div>
    );
};
 
