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
const axios_1 = __importDefault(require("axios"));
const simulate_controller = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.default.get('http://localhost:3000/mockserver');
    /* const respositories = result.data[0].respositories.map((repos:any)=>{
        return {...repos,state:mockRequestValues[repos.state]}
    }); */
    res.status(200);
    res.send(Object.assign({}, result.data[0]));
});
exports.simulate_controller = simulate_controller;
//# sourceMappingURL=simulate.controller.js.map