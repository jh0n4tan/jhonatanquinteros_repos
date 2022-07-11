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
exports.Metrics = void 0;
const typeorm_1 = require("typeorm");
const repository_model_1 = require("./repository.model");
let Metrics = class Metrics {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: "int", nullable: false }),
    (0, typeorm_1.OneToOne)(() => repository_model_1.Repository),
    (0, typeorm_1.JoinColumn)({ name: 'id_repository' }),
    __metadata("design:type", repository_model_1.Repository)
], Metrics.prototype, "id_repository", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal", nullable: false, precision: 2 }),
    __metadata("design:type", Number)
], Metrics.prototype, "coverage", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", nullable: false }),
    __metadata("design:type", Number)
], Metrics.prototype, "bugs", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", nullable: false }),
    __metadata("design:type", Number)
], Metrics.prototype, "vulnerabilities", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", nullable: false }),
    __metadata("design:type", Number)
], Metrics.prototype, "hospot", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", nullable: false }),
    __metadata("design:type", Number)
], Metrics.prototype, "code_smells", void 0);
Metrics = __decorate([
    (0, typeorm_1.Entity)()
], Metrics);
exports.Metrics = Metrics;
//# sourceMappingURL=metricts.model.js.map