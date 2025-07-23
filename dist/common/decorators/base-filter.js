"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseFilter = BaseFilter;
exports.CommonGetResponse = CommonGetResponse;
exports.CommonPostResponse = CommonPostResponse;
exports.CommonPatchResponse = CommonPatchResponse;
exports.CommonDeleteResponse = CommonDeleteResponse;
exports.ApiOperationCustom = ApiOperationCustom;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
function BaseFilter() {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiQuery)({
        name: 'page',
        type: 'number',
        example: 1,
        description: 'Số thứ tự trang cần lấy dữ liệu, ví dụ: 1, 2, 3, ...',
    }), (0, swagger_1.ApiQuery)({
        name: 'limit',
        type: 'number',
        example: 10,
        description: 'Số bản ghi trên 1 trang, ví dụ: 10, 25, 50, 100, ...',
    }), (0, swagger_1.ApiQuery)({
        name: 'sort',
        type: 'string',
        required: false,
        description: 'Sắp xếp theo trường dữ liệu, ví dụ: createdAt, updatedAt, ...',
    }), (0, swagger_1.ApiQuery)({
        name: 'typeSort',
        type: 'string',
        required: false,
        description: 'Kiểu sắp xếp, ví dụ: ASC, DESC, ...',
    }));
}
function CommonGetResponse(responseArray) {
    const decorators = [];
    if (responseArray)
        decorators.push((0, swagger_1.ApiOkResponse)({
            description: 'The resource was returned successfully',
            schema: {
                type: 'object',
                properties: {
                    pagination: {
                        type: 'object',
                        description: 'Pagination data',
                    },
                    data: {
                        type: 'array',
                        items: { type: 'object' },
                        description: 'Array of item',
                    },
                },
            },
        }));
    else
        decorators.push((0, swagger_1.ApiOkResponse)({
            description: 'The resource was returned successfully',
            schema: {
                type: 'object',
            },
        }));
    decorators.push((0, swagger_1.ApiUnprocessableEntityResponse)({
        description: 'Bad Request',
        schema: {
            type: 'object',
            properties: {
                message: {
                    type: 'string',
                    default: 'Bad request',
                },
                statusCode: {
                    type: 'number',
                    default: 422,
                },
            },
        },
    }), (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Unauthorized Request',
        schema: {
            type: 'object',
            properties: {
                message: {
                    type: 'string',
                    default: 'Unauthorized',
                },
                statusCode: {
                    type: 'number',
                    default: 401,
                },
            },
        },
    }), (0, swagger_1.ApiForbiddenResponse)({
        description: 'Forbidden Request',
        schema: {
            type: 'object',
            properties: {
                message: {
                    type: 'string',
                    default: 'Forbidden',
                },
                statusCode: {
                    type: 'number',
                    default: 403,
                },
            },
        },
    }));
    return (0, common_1.applyDecorators)(...decorators);
}
function CommonPostResponse() {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiCreatedResponse)({
        description: 'Created Succesfully',
        schema: { type: 'object' },
    }), (0, swagger_1.ApiUnprocessableEntityResponse)({
        description: 'Bad Request',
        schema: {
            type: 'object',
            properties: {
                message: {
                    type: 'string',
                    default: 'Bad request',
                },
                statusCode: {
                    type: 'number',
                    default: 422,
                },
            },
        },
    }), (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Unauthorized Request',
        schema: {
            type: 'object',
            properties: {
                message: {
                    type: 'string',
                    default: 'Unauthorized',
                },
                statusCode: {
                    type: 'number',
                    default: 401,
                },
            },
        },
    }), (0, swagger_1.ApiForbiddenResponse)({
        description: 'Forbidden Request',
        schema: {
            type: 'object',
            properties: {
                message: {
                    type: 'string',
                    default: 'Forbidden',
                },
                statusCode: {
                    type: 'number',
                    default: 403,
                },
            },
        },
    }));
}
function CommonPatchResponse() {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiOkResponse)({
        description: 'The resource was updated successfully',
        schema: { type: 'object' },
    }), (0, swagger_1.ApiUnprocessableEntityResponse)({
        description: 'Bad Request',
        schema: {
            type: 'object',
            properties: {
                message: {
                    type: 'string',
                    default: 'Bad request',
                },
                statusCode: {
                    type: 'number',
                    default: 422,
                },
            },
        },
    }), (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Unauthorized Request',
        schema: {
            type: 'object',
            properties: {
                message: {
                    type: 'string',
                    default: 'Unauthorized',
                },
                statusCode: {
                    type: 'number',
                    default: 401,
                },
            },
        },
    }), (0, swagger_1.ApiForbiddenResponse)({
        description: 'Forbidden Request',
        schema: {
            type: 'object',
            properties: {
                message: {
                    type: 'string',
                    default: 'Forbidden',
                },
                statusCode: {
                    type: 'number',
                    default: 403,
                },
            },
        },
    }));
}
function CommonDeleteResponse() {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiOkResponse)({
        description: 'The resource was deleted successfully',
        schema: { type: 'object' },
    }), (0, swagger_1.ApiUnprocessableEntityResponse)({
        description: 'Bad Request',
        schema: {
            type: 'object',
            properties: {
                message: {
                    type: 'string',
                    default: 'Bad request',
                },
                statusCode: {
                    type: 'number',
                    default: 422,
                },
            },
        },
    }), (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Unauthorized Request',
        schema: {
            type: 'object',
            properties: {
                message: {
                    type: 'string',
                    default: 'Unauthorized',
                },
                statusCode: {
                    type: 'number',
                    default: 401,
                },
            },
        },
    }), (0, swagger_1.ApiForbiddenResponse)({
        description: 'Forbidden Request',
        schema: {
            type: 'object',
            properties: {
                message: {
                    type: 'string',
                    default: 'Forbidden',
                },
                statusCode: {
                    type: 'number',
                    default: 403,
                },
            },
        },
    }));
}
function ApiOperationCustom(resource, method, applyReponse = true, getOne = false) {
    const decorators = [];
    decorators.push((0, swagger_1.ApiBearerAuth)());
    switch (method.toUpperCase()) {
        case 'POST':
            decorators.push((0, swagger_1.ApiOperation)({
                summary: `Tạo mới ${resource}`,
                description: `API tạo mới ${resource}`,
            }));
            if (applyReponse)
                decorators.push(CommonPostResponse());
            break;
        case 'GET':
            if (!getOne) {
                decorators.push((0, swagger_1.ApiOperation)({
                    summary: `Lấy danh sách ${resource}`,
                    description: `API lấy danh sách ${resource}`,
                }));
                if (applyReponse)
                    decorators.push(CommonGetResponse(true));
            }
            else {
                decorators.push((0, swagger_1.ApiOperation)({
                    summary: `Lấy ${resource} theo ID`,
                    description: `API lấy ${resource} theo ID`,
                }), (0, swagger_1.ApiParam)({
                    name: 'id',
                    description: `ID của ${resource}`,
                }));
                if (applyReponse)
                    decorators.push(CommonGetResponse());
            }
            break;
        case 'PATCH':
            decorators.push((0, swagger_1.ApiOperation)({
                summary: `Cập nhật ${resource} theo ID`,
                description: `API cập nhật ${resource} theo ID`,
            }), (0, swagger_1.ApiParam)({
                name: 'id',
                description: `ID của ${resource}`,
            }));
            if (applyReponse)
                decorators.push(CommonPatchResponse());
            break;
        case 'DELETE':
            decorators.push((0, swagger_1.ApiOperation)({
                summary: `Xóa ${resource} theo ID`,
                description: `API xóa ${resource} theo ID`,
            }), (0, swagger_1.ApiParam)({
                name: 'id',
                description: `ID của ${resource}`,
            }));
            if (applyReponse)
                decorators.push(CommonDeleteResponse());
            break;
        default:
            break;
    }
    return (0, common_1.applyDecorators)(...decorators);
}
