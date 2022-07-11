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
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("../config"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("../routes");
const cockroach_connection_1 = require("../db/cockroach.connection");
class Server {
    constructor() {
        this.port = config_1.default.PORT || '4000';
        this.paths = {
            simulate: '/api/simulateserver',
            organization: '/api/organization',
            tribe: '/api/tribes'
        };
        this.app = (0, express_1.default)();
        this.middlewares();
        this.routes();
        this.db();
    }
    db() {
        return __awaiter(this, void 0, void 0, function* () {
            yield cockroach_connection_1.AppDataSource.initialize();
        });
    }
    middlewares() {
        this.app.use((0, cors_1.default)({ origin: true, credentials: true }));
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        this.app.use(body_parser_1.default.json());
    }
    routes() {
        this.app.use(this.paths.simulate, routes_1.simulateroutes);
        this.app.use(this.paths.organization, routes_1.organizationroutes);
        this.app.use(this.paths.tribe, routes_1.triberoutes);
    }
    listening() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map