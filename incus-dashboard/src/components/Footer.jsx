import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 1 }}
      className="text-center py-6 mt-8 text-gray-300 text-sm"
    >
      © {new Date().getFullYear()} Incus Dashboard — Desarrollado por{" "}
      <span className="text-pink-400 font-semibold">Santiago Gallego & Equipo</span>
    </motion.footer>
  );
}
