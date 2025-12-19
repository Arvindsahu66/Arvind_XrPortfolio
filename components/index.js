// Canvas components are client-only (depend on three/three-mesh-bvh).
// Import them dynamically where used to avoid server-side build issues.
import Hero from "./Hero";
import Navbar from "./Navbar";
import About from "./About";
import Tech from "./Tech";
import Experience from "./Experience";
import Works from "./Works";
import Feedbacks from "./Feedbacks";
import Contact from "./Contact";
import Acheivements from "./Acheivements";

export {
	Hero,
	Navbar,
	About,
	Tech,
	Experience,
	Works,
	Feedbacks,
	Contact,
	Acheivements
	// StarsCanvas is intentionally not exported here to avoid server-side imports
};
