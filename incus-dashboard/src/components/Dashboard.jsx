import { motion } from "framer-motion";
import ContainerList from "./ContainerList";
import Stats from "./Stats";

export default function Dashboard() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="backdrop-blur-lg bg-white/10 p-8 rounded-3xl shadow-2xl mt-8"
    >
      <h2 className="text-3xl font-bold mb-6 text-center text-white drop-shadow">
        Panel de Control de Contenedores
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <ContainerList />
        <Stats />
      </div>
    </motion.section>
  );
}
