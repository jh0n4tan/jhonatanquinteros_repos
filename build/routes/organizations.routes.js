"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = require("../controllers/index");
const router = (0, express_1.Router)();
router.get('/getall', index_1.organizations_controller.get_organizations);
router.post('/save', index_1.organizations_controller.create_organization);
router.put('/update/:id', index_1.organizations_controller.edit_organization);
router.delete('/delete/:id', index_1.organizations_controller.delete_organization);
exports.default = router;
//# sourceMappingURL=organizations.routes.js.map