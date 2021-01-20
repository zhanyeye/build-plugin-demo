"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function jsonLoader(content) {
    let jsonContent = content;
    try {
        const obj = JSON.parse(content);
        // 增加额外数据
        obj.newProperty = 'test content';
        jsonContent = JSON.stringify(obj);
    }
    catch (err) { }
    return jsonContent;
}
exports.default = jsonLoader;
