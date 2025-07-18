"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadedFilesCustom = void 0;
const common_1 = require("@nestjs/common");
exports.UploadedFilesCustom = (0, common_1.createParamDecorator)(async (data, ctx) => {
    const request = ctx
        .switchToHttp()
        .getRequest();
    const files = await request.files();
    const fileProcessingPromises = [];
    for await (const fileData of files) {
        const processFile = async (fileData) => {
            const file = fileData.file;
            const fileName = fileData.filename;
            let buffer = Buffer.alloc(0);
            for await (const chunk of file) {
                buffer = Buffer.concat([buffer, chunk]);
            }
            return {
                fileName,
                buffer,
                mimeType: fileData.mimetype,
                size: fileData.size,
            };
        };
        fileProcessingPromises.push(processFile(fileData));
    }
    const uploadedFiles = await Promise.all(fileProcessingPromises);
    return uploadedFiles;
});
//# sourceMappingURL=fileUpload.decorator.js.map