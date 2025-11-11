import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    { title: "Contenedores", value: "6", color: "text-pink-400" },
    { title: "Activos", value: "4", color: "text-green-400" },
    { title: "CPU", value: "65%", color: "text-yellow-400" },
    { title: "Memoria", value: "3.2GB", color: "text-blue-400" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white/10 rounded-2xl p-6 shadow-lg"
    >
      <h3 className="text-2xl font-semibold mb-4">Estadísticas</h3>
      <div className="grid grid-cols-2 gap-6 text-center">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 p-4 rounded-xl hover:bg-white/20 transition"
          >
            <h4 className="text-lg text-gray-200">{s.title}</h4>
            <p className={`text-3xl font-bold ${s.color}`}>{s.value}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
