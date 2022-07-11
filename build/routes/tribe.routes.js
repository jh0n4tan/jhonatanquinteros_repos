"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const index_1 = require("../controllers/index");
router.get('/:id', index_1.tribe_controller.tribe_controller);
exports.default = router;
//# sourceMappingURL=tribe.routes.js.map