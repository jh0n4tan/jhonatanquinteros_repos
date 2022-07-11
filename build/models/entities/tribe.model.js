"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tribe = void 0;
const typeorm_1 = require("typeorm");
const organization_model_1 = require("./organization.model");
let Tribe = class Tribe {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: "int", nullable: false }),
    __metadata("design:type", Number)
], Tribe.prototype, "id_tribe", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "char", length: 50, nullable: false }),
    __metadata("design:type", String)
], Tribe.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", nullable: false }),
    __metadata("design:type", Number)
], Tribe.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => organization_model_1.Organization),
    (0, typeorm_1.JoinColumn)({ name: 'id_organization' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", organization_model_1.Organization)
], Tribe.prototype, "id_organization", void 0);
Tribe = __decorate([
    (0, typeorm_1.Entity)()
], Tribe);
exports.Tribe = Tribe;
//# sourceMappingURL=tribe.model.js.map