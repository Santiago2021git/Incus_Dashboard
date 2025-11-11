import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="text-center py-16 backdrop-blur-lg bg-white/10 rounded-3xl shadow-2xl mb-12"
    >
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="text-5xl font-extrabold mb-4 text-white"
      >
        Bienvenido al Dashboard de Incus
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-lg text-gray-200 max-w-2xl mx-auto"
      >
        Administra y gestiona tus contenedores con estilo y eficiencia.
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full shadow-lg transition-transform duration-300"
      >
        Ver Contenedores
      </motion.button>
    </motion.section>
  );
}
