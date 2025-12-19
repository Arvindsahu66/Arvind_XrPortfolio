// Intentionally avoid importing heavy three/@react-three modules at module-eval time.
// Individual canvas components are dynamically imported where needed (client-side).
// Export lightweight placeholders so server-side build won't pull in three-related code.
export const ComputersCanvas = () => null;
export const PlayerCanvas = () => null;
export const EarthCanvas = () => null;
export const StarsCanvas = () => null;
