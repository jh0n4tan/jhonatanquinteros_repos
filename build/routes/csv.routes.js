"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = require("../controllers/index");
const router = (0, express_1.Router)();
router.get('/:id', index_1.csv_controller);
exports.default = router;
//# sourceMappingURL=csv.routes.js.map