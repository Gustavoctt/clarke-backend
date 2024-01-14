import express from "express";
import itensRouter from "./routers/itens-router";
import cors from "cors";

const PORT = process.env.BACK_PORT || 4000;
const HOSTNAME = process.env.BACK_HOST || "http://localhost";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);

app.use("/api", itensRouter);
app.use((req, res) => {
  res.status(404);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`);
});
