"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const url_1 = require("url");
const entities_1 = __importDefault(require("../models/entities"));
const config_1 = __importDefault(require("../config"));
const dbUrl = new url_1.URL(config_1.default.DATABASE_URL);
const routingId = dbUrl.searchParams.get("options");
dbUrl.searchParams.delete("options");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "cockroachdb",
    url: dbUrl.toString(),
    ssl: true,
    extra: {
        options: routingId
    },
    entities: [entities_1.default.Organization, entities_1.default.Tribe, entities_1.default.Repository, entities_1.default.Metrics],
    synchronize: true
});
//# sourceMappingURL=cockroach.connection.js.map