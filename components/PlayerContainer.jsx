import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { slideIn } from "@/utils/motion";

// Load PlayerCanvas client-side only
// Import the Player canvas directly to avoid importing the entire canvas barrel
const PlayerCanvas = dynamic(() => import("./canvas/Player").then((m) => m.default), { ssr: false });

function PlayerContainer({ isMobile }) {
  return (
    <motion.div
      variants={slideIn("right", "tween", 0.2, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="md:w-1/3 w-full md:h-auto h-[440px] cursor-pointer"
    >
      <PlayerCanvas isMobile={isMobile} />
    </motion.div>
  );
}

export default PlayerContainer;
