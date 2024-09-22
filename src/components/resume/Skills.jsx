import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="flex lg:flex-row flex-col lg:gap-20 justify-between"
    >
      <div className="w-full lg:w-1/2">
        <div className="pt-12 lg:pb-12 pb-0">
          <p className="text-sm text-designColor tracking-tight">Features</p>
          <h2 className="text-4xl font-bold">Design Skill</h2>
        </div>
        <div className="mt-14   ">
          <div>
            <p className="uppercase font-medium text-sm">Photoshot</p>
            <span className="w-full overflow-hidden h-2 bg-black bg-opacity-40 inline-flex mt-2 rounded-md">
              <motion.span
                initial={{ x: "-100%", opacity: "0" }}
                animate={{ x: "0", opacity: "1" }}
                transition={{ duration: ".5", delay: ".5" }}
                className="w-full h-full rounded-md bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 relative"
              >
                <span className="absolute -top-7 right-0">100%</span>
              </motion.span>
            </span>
          </div>
          <div>
            <p className="uppercase font-medium text-sm">Photoshot</p>
            <span className="w-full overflow-hidden h-2 bg-black bg-opacity-40 inline-flex mt-2 rounded-md">
              <motion.span
                initial={{ x: "-100%", opacity: "0" }}
                animate={{ x: "0", opacity: "1" }}
                transition={{ duration: ".5", delay: ".5" }}
                className="w-full h-full rounded-md bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 relative"
              >
                <span className="absolute -top-7 right-0">100%</span>
              </motion.span>
            </span>
          </div>
          <div>
            <p className="uppercase font-medium text-sm">Photoshot</p>
            <span className="w-full overflow-hidden h-2 bg-black bg-opacity-40 inline-flex mt-2 rounded-md">
              <motion.span
                initial={{ x: "-100%", opacity: "0" }}
                animate={{ x: "0", opacity: "1" }}
                transition={{ duration: ".5", delay: ".5" }}
                className="w-full h-full rounded-md bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 relative"
              >
                <span className="absolute -top-7 right-0">100%</span>
              </motion.span>
            </span>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2">
        <div className="pt-12 lg:pb-12 pb-0">
          <p className="text-sm text-designColor tracking-tight">Features</p>
          <h2 className="text-4xl font-bold">Development Skill</h2>
        </div>
        <div className="mt-14  ">
          <div>
            <p className="uppercase font-medium text-sm">Photoshot</p>
            <span className="w-full overflow-hidden h-2 bg-black bg-opacity-40 inline-flex mt-2 rounded-md">
              <motion.span
                initial={{ x: "-100%", opacity: "0" }}
                animate={{ x: "0", opacity: "1" }}
                transition={{ duration: ".5", delay: ".5" }}
                className="w-full h-full rounded-md bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 relative"
              >
                <span className="absolute -top-7 right-0">100%</span>
              </motion.span>
            </span>
          </div>
          <div>
            <p className="uppercase font-medium text-sm">Photoshot</p>
            <span className="w-full overflow-hidden h-2 bg-black bg-opacity-40 inline-flex mt-2 rounded-md">
              <motion.span
                initial={{ x: "-100%", opacity: "0" }}
                animate={{ x: "0", opacity: "1" }}
                transition={{ duration: ".5", delay: ".5" }}
                className="w-full h-full rounded-md bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 relative"
              >
                <span className="absolute -top-7 right-0">100%</span>
              </motion.span>
            </span>
          </div>
          <div>
            <p className="uppercase font-medium text-sm">Photoshot</p>
            <span className="w-full overflow-hidden h-2 bg-black bg-opacity-40 inline-flex mt-2 rounded-md">
              <motion.span
                initial={{ x: "-100%", opacity: "0" }}
                animate={{ x: "0", opacity: "1" }}
                transition={{ duration: ".5", delay: ".5" }}
                className="w-full h-full rounded-md bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 relative"
              >
                <span className="absolute -top-7 right-0">100%</span>
              </motion.span>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
