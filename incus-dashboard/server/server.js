import express from "express";
import { exec } from "child_process";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

// Obtener lista de contenedores
app.get("/api/containers", (req, res) => {
  exec("incus list --format json", (error, stdout, stderr) => {
    if (error) {
      console.error("Error ejecutando Incus:", error);
      return res.status(500).json({ error: "Error ejecutando Incus" });
    }

    try {
      const containers = JSON.parse(stdout);
      res.json(containers);
    } catch (err) {
      console.error("Error procesando salida JSON:", err);
      res.status(500).json({ error: "Salida inválida de Incus" });
    }
  });
});

// Iniciar un contenedor
app.post("/api/containers/:name/start", (req, res) => {
  const { name } = req.params;
  exec(`incus start ${name}`, (error, stdout, stderr) => {
    if (error) return res.status(500).json({ error: stderr });
    res.json({ message: `Contenedor ${name} iniciado` });
  });
});

// Detener un contenedor
app.post("/api/containers/:name/stop", (req, res) => {
  const { name } = req.params;
  exec(`incus stop ${name}`, (error, stdout, stderr) => {
    if (error) return res.status(500).json({ error: stderr });
    res.json({ message: `Contenedor ${name} detenido` });
  });
});

// Eliminar un contenedor
app.delete("/api/containers/:name", (req, res) => {
  const { name } = req.params;
  exec(`incus delete ${name} --force`, (error, stdout, stderr) => {
    if (error) return res.status(500).json({ error: stderr });
    res.json({ message: `Contenedor ${name} eliminado` });
  });
});

app.listen(PORT, () => {
  console.log(`✅ Servidor API corriendo en puerto ${PORT}`);
});
