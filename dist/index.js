"use strict";
// Copyright IBM Corp. 2018. All Rights Reserved.
// Node module: @loopback/example-soap-calculator
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
const application_1 = require("./application");
exports.SoapCalculatorApplication = application_1.SoapCalculatorApplication;
async function main(options = {}) {
    const app = new application_1.SoapCalculatorApplication(options);
    await app.boot();
    await app.start();
    const url = app.restServer.url;
    console.log(`Server is running at ${url}`);
    return app;
}
exports.main = main;
//# sourceMappingURL=index.js.map