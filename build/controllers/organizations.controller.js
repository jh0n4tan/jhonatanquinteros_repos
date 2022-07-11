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
Object.defineProperty(exports, "__esModule", { value: true });
const cockroach_connection_1 = require("../db/cockroach.connection");
const organization_model_1 = require("../models/entities/organization.model");
const get_organizations = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield cockroach_connection_1.AppDataSource.getRepository(organization_model_1.Organization).find();
    res.json(users);
});
exports.default = {
    get_organizations
};
//# sourceMappingURL=organizations.controller.js.map