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
const create_organization = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const organization = yield cockroach_connection_1.AppDataSource.getRepository(organization_model_1.Organization).create(req.body);
    const results = yield cockroach_connection_1.AppDataSource.getRepository(organization_model_1.Organization).save(organization);
    return res.status(200).send(results);
});
const edit_organization = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const organization = yield cockroach_connection_1.AppDataSource.getRepository(organization_model_1.Organization).findOneBy({
        id_organization: parseInt(id)
    });
    if (!organization)
        return res.status(400).send('there is no organization to update');
    const results = yield cockroach_connection_1.AppDataSource.getRepository(organization_model_1.Organization).update(id, req.body);
    return res.send(results);
});
exports.default = {
    get_organizations,
    create_organization,
    edit_organization
};
//# sourceMappingURL=organizations.controller.js.map