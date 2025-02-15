// ProjectCard.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  projectLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, projectLink }) => {
  return (
    <motion.div
      className=" relative overflow-hidden border-2 border-white"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
    <div className="p-4 py-12 text-center text-white">
        <a href={projectLink} target="_blank">
        <h3  className="text-center text-xl font-bold mx-auto text-neutral-50">{title}</h3>
         <p className="text-center text-base mx-auto mt-2 text-neutral-400">
         {description}
        </p>
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
