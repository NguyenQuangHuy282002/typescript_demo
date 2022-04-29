"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _4_main_1 = require("./4-main");
describe('isPositive()', () => {
    it('should return true when n>0', () => {
        expect((0, _4_main_1.isPositive)(1)).toBe(true);
    });
    it('should return false when n=0', () => {
        expect((0, _4_main_1.isPositive)(0)).toBe(false);
    });
    it('should return false when n<0', () => {
        expect((0, _4_main_1.isPositive)(-1)).toBe(false);
    });
});
