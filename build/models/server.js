"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("../config"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("../routes");
class Server {
    constructor() {
        this.port = config_1.default.PORT || '4000';
        this.paths = {
            simulate: '/api/simulateserver'
        };
        this.app = (0, express_1.default)();
        this.middlewares();
        this.routes();
        this.db();
    }
    db() {
    }
    middlewares() {
        this.app.use((0, cors_1.default)({ origin: true, credentials: true }));
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        this.app.use(body_parser_1.default.json());
    }
    routes() {
        this.app.use(this.paths.simulate, routes_1.simulateroutes);
    }
    listening() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map