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
const json2csv_1 = require("json2csv");
const axios_1 = __importDefault(require("axios"));
const get_organizations = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id_tribe = req.params.id;
    const url = `http://localhost:4000/api/tribes/${id_tribe}`;
    const response = yield axios_1.default.get(url);
    const jsonToCsv = new json2csv_1.Parser();
    const csvGenerated = jsonToCsv.parse(response.data.repositories[0]);
    res.attachment('RepositoryMetrics.csv');
    res.set('Content-Type', 'text/csv');
    res.status(200);
    res.send(csvGenerated);
});
exports.default = get_organizations;
//# sourceMappingURL=csv.controller.js.map