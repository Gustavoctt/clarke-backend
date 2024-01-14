"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const itensRouter = express_1.default.Router();
itensRouter.get("/suppliers", (req, res) => {
    const itens = [
        {
            id: 1,
            name: "Celesc",
            originState: "Santa Catarina",
            img: "https://www.celesc.com.br/images/logo-celesc-horizontal-peq.png",
            costPerWWH: 0.85,
            minKWH: 100,
            customersTotal: 83000,
            score: 1,
        },
        {
            id: 2,
            name: "Eletrobras",
            originState: "Rio de Janeiro",
            img: "https://logospng.org/download/eletrobras/logo-eletrobras-2048.png",
            costPerWWH: 0.89,
            minKWH: 100,
            customersTotal: 12000,
            score: 3,
        },
        {
            id: 3,
            name: "Light",
            originState: "Rio de Janeiro",
            img: "https://www.light.com.br/SiteAssets/images/logo.png",
            costPerWWH: 0.87,
            minKWH: 50,
            customersTotal: 20000,
            score: 5,
        },
        {
            id: 4,
            name: "Neoenergia",
            originState: "Rio de Janeiro",
            img: "https://www.neoenergia.com/documents/d/guest/logo-svg",
            costPerWWH: 0.81,
            minKWH: 101,
            customersTotal: 5000,
            score: 4,
        },
    ];
    res.json(itens);
});
exports.default = itensRouter;
//# sourceMappingURL=itens-router.js.map