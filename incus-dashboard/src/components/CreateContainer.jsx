import { useState } from "react";
import axios from "axios";

export default function CreateContainer({ onCreated }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("images:ubuntu/22.04");

  const handleCreate = async () => {
    if (!name.trim()) return alert("Escribe un nombre para el contenedor");

    try {
      await axios.post("http://localhost:3001/containers/create", {
        name,
        image,
      });

      alert("Contenedor creado correctamente");
      setName("");

      if (onCreated) onCreated();
    } catch (err) {
      alert("Error al crear contenedor");
      console.log(err);
    }
  };

  return (
    <div className="bg-white/10 p-4 rounded-xl shadow-lg mb-4">
      <h3 className="text-xl font-semibold mb-3">Crear contenedor</h3>

      <input
        className="w-full p-2 mb-3 bg-white/20 rounded-lg"
        placeholder="Nombre del contenedor"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="w-full p-2 mb-3 bg-white/20 rounded-lg"
        placeholder="Imagen (ej: images:ubuntu/22.04)"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <button
        onClick={handleCreate}
        className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-white w-full"
      >
        Crear
      </button>
    </div>
  );
}
