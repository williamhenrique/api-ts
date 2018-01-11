"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorHanderApi(res, req, error, next) {
    console.error("Houve um erro " + error);
    res.status(500).json({
        "Err-Code": '001',
        "message": "Houve um erro interno"
    });
}
exports.errorHanderApi = errorHanderApi;
//# sourceMappingURL=errorHandlerApi.js.map