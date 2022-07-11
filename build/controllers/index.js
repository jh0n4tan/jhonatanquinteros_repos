"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.csv_controller = exports.tribe_controller = exports.organizations_controller = exports.simulate_controller = void 0;
const simulate_controller_1 = require("./simulate.controller");
Object.defineProperty(exports, "simulate_controller", { enumerable: true, get: function () { return simulate_controller_1.simulate_controller; } });
const organizations_controller_1 = __importDefault(require("./organizations.controller"));
exports.organizations_controller = organizations_controller_1.default;
const tribe_controller_1 = __importDefault(require("./tribe.controller"));
exports.tribe_controller = tribe_controller_1.default;
const csv_controller_1 = __importDefault(require("./csv.controller"));
exports.csv_controller = csv_controller_1.default;
//# sourceMappingURL=index.js.map