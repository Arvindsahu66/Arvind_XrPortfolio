import { motion } from "framer-motion";
import { useState } from "react";

const achievements = [
  {
    title: "FOCCI BAF Award Winner 2025",
    image: "/assets/company/Ficci.jpg",
  },
  {
    title: "Infosys Global Hackathon Winner 2025",
    image: "/assets/company/infosys.jpg",
  },
  {
    title: "IEEE SSH 2024",
    image: "/assets/company/IEESSH.JPG",
  },
  {
    title: "GNI HACK AREANA HACKATHON 2024",
    image: "/assets/company/Gni.jpg",
  },
  {
    title: "DAY ZERO ONLINE HACKATHON 2024",
    image: "/assets/company/Dayzero.jpg",
  },
  {
    title: "IEEE Prototype Showcase 2024",
    image: "/assets/company/IEEP.jpg",
  },
  {
    title: "Visionary AR Hackathon 2024",
    image: "/assets/company/Vis.jpg",
  },
];

const Achievements = () => {
  const [isPaused, setIsPaused] = useState(false);

  const duplicatedAchievements = [...achievements, ...achievements];

  return (
    <section
      id="achievements"
      className="relative w-full py-24 overflow-hidden"
      style={{ backgroundColor: "#181826" }}
    >
      {/* Background Text */}
      <h1 className="absolute top-10 left-1/2 -translate-x-1/2 text-[6rem] md:text-[8rem] font-extrabold text-white opacity-5 select-none">
        Achievements
      </h1>

      {/* Heading */}
      <div className="relative z-10 text-center mb-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          We Don&apos;t Plan, We Achieve
        </h2>
      </div>

      {/* Auto Scroll Row */}
      <div className="relative z-10 overflow-hidden">
        <motion.div
          className="flex gap-8"
          animate={{
            x: isPaused ? 0 : ["0%", "-50%"],
          }}
          transition={{
            duration: 28,
            ease: "linear",
            repeat: Infinity,
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {duplicatedAchievements.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-[#51069818] border border-white/10 rounded-2xl 
                         w-[360px] h-[260px] flex-shrink-0 p-4"
            >
              {/* Image Container */}
              <div className="w-full h-[170px] rounded-xl bg-black/30 flex items-center justify-center overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Title */}
              <div className="mt-4 text-center">
                <h3 className="text-white text-sm font-semibold tracking-wide uppercase">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
