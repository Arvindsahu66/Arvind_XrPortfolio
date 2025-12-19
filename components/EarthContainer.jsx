import { motion } from "framer-motion";
import dynamic from "next/dynamic";

import { slideIn } from "@/utils/motion";
// Load EarthCanvas client-side only (it depends on three and @react-three/drei)
// Import the Earth canvas component file directly to avoid importing the whole canvas barrel
const EarthCanvas = dynamic(() => import("./canvas/Earth").then((m) => m.default), { ssr: false });

function EarthContainer({ isMobile }) {
	return (
		<motion.div
			variants={slideIn("right", "tween", 0.2, 1)}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true }}
			className="xl:w-1/2 w-full md:w-2/3 md:h-auto h-[550px]"
		>
			<EarthCanvas isMobile={isMobile} />
		</motion.div>
	);
}

export default EarthContainer;
