"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const itens_router_1 = __importDefault(require("./routers/itens-router"));
const cors_1 = __importDefault(require("cors"));
const PORT = process.env.BACK_PORT || 4000;
const HOSTNAME = process.env.BACK_HOST || "http://localhost";
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({
    origin: ["http://localhost:5173"],
}));
app.use("/api", itens_router_1.default);
app.use((req, res) => {
    res.status(404);
});
app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`);
});
//# sourceMappingURL=index.js.map