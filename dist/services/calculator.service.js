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
const service_proxy_1 = require("@loopback/service-proxy");
const core_1 = require("@loopback/core");
const calculator_datasource_1 = require("../datasources/calculator.datasource");
let CalculatorServiceProvider = class CalculatorServiceProvider {
    constructor(dataSource = new calculator_datasource_1.CalculatorDataSource()) {
        this.dataSource = dataSource;
    }
    value() {
        return service_proxy_1.getService(this.dataSource);
    }
};
CalculatorServiceProvider = __decorate([
    __param(0, core_1.inject('datasources.calculator')),
    __metadata("design:paramtypes", [service_proxy_1.juggler.DataSource])
], CalculatorServiceProvider);
exports.CalculatorServiceProvider = CalculatorServiceProvider;
//# sourceMappingURL=calculator.service.js.map