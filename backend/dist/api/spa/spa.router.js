"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SpaController = __importStar(require("./spa.controller"));
const authMiddleware_1 = require("../authMiddleware");
const prisma_1 = require("../../prisma");
const router = (0, express_1.Router)();
router.get('/', async (req, res, next) => {
    try {
        const spaList = await (0, prisma_1.prismaFetch)(async (prisma) => {
            try {
                return await prisma.spa.findMany({
                    orderBy: {
                        updated_at: 'desc',
                    },
                    include: {
                        owner: true,
                    },
                });
            }
            catch (err) {
                next(err);
            }
        }, next);
        if (spaList) {
            res.status(200).json(spaList);
        }
        else {
            res.status(400);
            next(new Error('Something went wrong'));
        }
    }
    catch (err) {
        next(err);
    }
});
router.post('/control', authMiddleware_1.protect, SpaController.createSpa);
router.put('/control', authMiddleware_1.protect, SpaController.updateSpa);
router.delete('/control/:id', authMiddleware_1.protect, SpaController.deleteSpa);
router.get('/control/search', authMiddleware_1.protect, SpaController.readSpa);
exports.default = router;
// ROUTES HERE
//# sourceMappingURL=spa.router.js.map