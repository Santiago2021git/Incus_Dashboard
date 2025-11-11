import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white/10 backdrop-blur-lg shadow-lg sticky top-0 z-50 rounded-b-2xl"
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <h2 className="text-2xl font-bold text-pink-400">Incus Dashboard</h2>
        <ul className="flex space-x-6 text-gray-100">
          {["Inicio", "Contenedores", "Estadísticas", "Configuración"].map(
            (item) => (
              <motion.li
                whileHover={{ scale: 1.1, color: "#f472b6" }}
                key={item}
                className="cursor-pointer transition"
              >
                {item}
              </motion.li>
            )
          )}
        </ul>
      </div>
    </motion.nav>
  );
}
