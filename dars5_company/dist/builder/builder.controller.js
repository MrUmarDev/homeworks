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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuilderController = void 0;
const common_1 = require("@nestjs/common");
const builder_service_1 = require("./builder.service");
const builder_dto_1 = require("./dto/builder-dto");
let BuilderController = class BuilderController {
    constructor(builderService) {
        this.builderService = builderService;
    }
    createCompany(data) {
        return this.builderService.createBuilder(data);
    }
    findAll() {
        return this.builderService.findAll();
    }
    findOne(id) {
        return this.builderService.findOne(id);
    }
    updateCompany(id, data) {
        return this.builderService.updateBuilder(id, data);
    }
    deleteCompany(id) {
        return this.builderService.deleteBuilder(id);
    }
};
exports.BuilderController = BuilderController;
__decorate([
    (0, common_1.Post)('/builder'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [builder_dto_1.CreateBuilderDto]),
    __metadata("design:returntype", void 0)
], BuilderController.prototype, "createCompany", null);
__decorate([
    (0, common_1.Get)('/builders'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BuilderController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/builder/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BuilderController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)('/builder/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, builder_dto_1.CreateBuilderDto]),
    __metadata("design:returntype", void 0)
], BuilderController.prototype, "updateCompany", null);
__decorate([
    (0, common_1.Delete)('/builder/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BuilderController.prototype, "deleteCompany", null);
exports.BuilderController = BuilderController = __decorate([
    (0, common_1.Controller)("/api"),
    __metadata("design:paramtypes", [builder_service_1.BuilderService])
], BuilderController);
//# sourceMappingURL=builder.controller.js.map