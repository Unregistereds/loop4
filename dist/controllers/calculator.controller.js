"use strict";
// Copyright IBM Corp. 2018,2019. All Rights Reserved.
// Node module: @loopback/example-soap-calculator
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
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
const core_1 = require("@loopback/core");
const rest_1 = require("@loopback/rest");
let CalculatorController = class CalculatorController {
    constructor(calculatorService) {
        this.calculatorService = calculatorService;
    }
    async multiply(intA, intB) {
        return await this.calculatorService.multiply({
            intA,
            intB,
        });
    }
    async add(intA, intB) {
        return await this.calculatorService.add({
            intA,
            intB,
        });
    }
    async subtract(intA, intB) {
        return await this.calculatorService.subtract({
            intA,
            intB,
        });
    }
    async divide(intA, intB) {
        //Preconditions
        if (intB === 0) {
            throw new rest_1.HttpErrors.PreconditionFailed('Cannot divide by zero');
        }
        return await this.calculatorService.divide({
            intA,
            intB,
        });
    }
};
__decorate([
    rest_1.get('/multiply/{intA}/{intB}'),
    __param(0, rest_1.param.path.integer('intA')),
    __param(1, rest_1.param.path.integer('intB')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], CalculatorController.prototype, "multiply", null);
__decorate([
    rest_1.get('/add/{intA}/{intB}'),
    __param(0, rest_1.param.path.integer('intA')),
    __param(1, rest_1.param.path.integer('intB')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], CalculatorController.prototype, "add", null);
__decorate([
    rest_1.get('/subtract/{intA}/{intB}'),
    __param(0, rest_1.param.path.integer('intA')),
    __param(1, rest_1.param.path.integer('intB')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], CalculatorController.prototype, "subtract", null);
__decorate([
    rest_1.get('/divide/{intA}/{intB}'),
    __param(0, rest_1.param.path.integer('intA')),
    __param(1, rest_1.param.path.integer('intB')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], CalculatorController.prototype, "divide", null);
CalculatorController = __decorate([
    __param(0, core_1.inject('services.CalculatorService')),
    __metadata("design:paramtypes", [Object])
], CalculatorController);
exports.CalculatorController = CalculatorController;
//# sourceMappingURL=calculator.controller.js.map