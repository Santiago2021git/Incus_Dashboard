import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Play, Square, Trash2, RefreshCw } from "lucide-react";

export default function ContainerList() {
  const [containers, setContainers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchContainers = async () => {
    setLoading(true);
    try {
      const res = await axios.get("/api/containers");
      setContainers(res.data);
    } catch (error) {
      console.error("Error al obtener contenedores:", error);
    }
    setLoading(false);
  };

  const handleAction = async (name, action) => {
    try {
      await axios.post(`/api/containers/${name}/${action}`);
      fetchContainers();
    } catch (err) {
      console.error(`Error al ${action} contenedor`, err);
    }
  };

  useEffect(() => {
    fetchContainers();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg"
    >
      <h3 className="text-xl font-semibold mb-4 text-center">Contenedores Activos</h3>

      {loading ? (
        <p className="text-center text-gray-300">Cargando contenedores...</p>
      ) : containers.length === 0 ? (
        <p className="text-center text-gray-300">No hay contenedores activos.</p>
      ) : (
        <ul className="space-y-3">
          {containers.map((c) => (
            <li
              key={c.name}
              className="flex justify-between items-center p-3 rounded-xl bg-white/5 hover:bg-white/20 transition-all"
            >
              <span className="font-medium">{c.name}</span>
              <div className="flex gap-2">
                <button
                  onClick={() => handleAction(c.name, "start")}
                  className="text-green-400 hover:text-green-600"
                >
                  <Play size={18} />
                </button>
                <button
                  onClick={() => handleAction(c.name, "stop")}
                  className="text-yellow-400 hover:text-yellow-600"
                >
                  <Square size={18} />
                </button>
                <button
                  onClick={() => handleAction(c.name, "delete")}
                  className="text-red-400 hover:text-red-600"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="text-center mt-4">
        <button
          onClick={fetchContainers}
          className="flex mx-auto items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition"
        >
          <RefreshCw size={16} /> Actualizar
        </button>
      </div>
    </motion.div>
  );
}
