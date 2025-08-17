import { technologies } from "../constants";
import { motion } from "framer-motion";

export default function Technologies() {
  return (
    <motion.div
      className="flex flex-row flex-wrap justify-center gap-12 mx-[135px]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {technologies.map((technology, index) => (
        <motion.div
          key={technology.name}
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1.2 }}
          transition={{ delay: index * 0.1, type: "spring" }}
        >
          {/* Ball Animation */}
          <motion.div
            className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center shadow-sm"
            whileHover={{
              scale: 1.15,
              rotate: 8,
              boxShadow: "0 0 25px rgba(255,255,255,0.3)",
            }}
            animate={{
              y: [0, -8, 0], // floating effect
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-14 h-14 object-contain"
            />
          </motion.div>

          <p className="mt-3 text-sm font-medium text-gray-200">
            {technology.name}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
