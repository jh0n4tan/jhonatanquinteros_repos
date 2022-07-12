"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const index_1 = require("../controllers/index");
const cockroach_connection_1 = require("../db/cockroach.connection");
const tribe_model_1 = require("../models/entities/tribe.model");
const metricts_model_1 = require("../models/entities/metricts.model");
const mockRequestValues_1 = __importDefault(require("../utils/mockRequestValues"));
const axios_1 = __importDefault(require("axios"));
const tribeshandler = (0, index_1.tribe_controller)({ axios: axios_1.default, AppDataSource: cockroach_connection_1.AppDataSource, Tribe: tribe_model_1.Tribe, Metrics: metricts_model_1.Metrics, mockRequestValues: mockRequestValues_1.default });
router.get('/:id', tribeshandler.get);
exports.default = router;
//# sourceMappingURL=tribe.routes.js.map