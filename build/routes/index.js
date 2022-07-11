"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.triberoutes = exports.organizationroutes = exports.simulateroutes = void 0;
const simulate_routes_1 = __importDefault(require("./simulate.routes"));
exports.simulateroutes = simulate_routes_1.default;
const organizations_routes_1 = __importDefault(require("./organizations.routes"));
exports.organizationroutes = organizations_routes_1.default;
const tribe_routes_1 = __importDefault(require("./tribe.routes"));
exports.triberoutes = tribe_routes_1.default;
//# sourceMappingURL=index.js.map