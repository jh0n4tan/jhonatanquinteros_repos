"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.simulate_controller = void 0;
const simulate_1 = __importDefault(require("../models/simulate"));
const simulate_controller = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield simulate_1.default.getsimulate();
    res.status(200);
    res.send(response);
});
exports.simulate_controller = simulate_controller;
//# sourceMappingURL=simulate.controller.js.map