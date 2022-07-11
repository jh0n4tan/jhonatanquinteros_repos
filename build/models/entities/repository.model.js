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
exports.Repository = void 0;
const tribe_model_1 = require("./tribe.model");
const typeorm_1 = require("typeorm");
let Repository = class Repository {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: "int", nullable: false }),
    __metadata("design:type", Number)
], Repository.prototype, "id_repository", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tribe_model_1.Tribe),
    (0, typeorm_1.JoinColumn)({ name: 'id_tribe' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", tribe_model_1.Tribe)
], Repository.prototype, "id_tribe", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "char", length: 50, nullable: false }),
    __metadata("design:type", String)
], Repository.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "char", length: 1, nullable: false }),
    __metadata("design:type", Number)
], Repository.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp" }),
    __metadata("design:type", typeorm_1.Timestamp)
], Repository.prototype, "create_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "char", length: 1, nullable: false }),
    __metadata("design:type", Number)
], Repository.prototype, "status", void 0);
Repository = __decorate([
    (0, typeorm_1.Entity)()
], Repository);
exports.Repository = Repository;
//# sourceMappingURL=repository.model.js.map