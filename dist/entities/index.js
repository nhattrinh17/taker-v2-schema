"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.entities = void 0;
const glob_1 = require("glob");
const path_1 = require("path");
exports.entities = (0, glob_1.globSync)((0, path_1.join)(__dirname, "./**/*.entity.{ts,js}")).flatMap((file) => {
    const module = require(file);
    return Object.values(module).filter((v) => typeof v === "function");
});
