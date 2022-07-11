"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = {
    PORT: process.env.PORT,
    DATABASE_URL: `postgresql://${process.env.COCKROACH_USER}:${process.env.COCKROACH_PASS}@free-tier14.aws-us-east-1.cockroachlabs.cloud:26257/${process.env.COCKROACH_DB}?sslmode=verify-full&options=--cluster%3Dharbor-hornet-3359`
};
//# sourceMappingURL=config.js.map