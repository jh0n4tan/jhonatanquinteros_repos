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
const axios_1 = __importDefault(require("axios"));
const mockRequestValues_1 = __importDefault(require("../utils/mockRequestValues"));
class simulate {
    static getsimulate() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield axios_1.default.get('http://localhost:3000/mockserver');
            const respositories = result.data[0].respositories.map((repos) => {
                return Object.assign(Object.assign({}, repos), { state: mockRequestValues_1.default[repos.state] });
            });
            return Object.assign(Object.assign({}, result.data[0]), { respositories });
        });
    }
}
exports.default = simulate;
//# sourceMappingURL=simulate.js.map