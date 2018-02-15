"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AspectRatioUtil {
    constructor() {
    }
    static WidthRatio(referenceWidth, deviceWidth) {
        return deviceWidth / referenceWidth;
    }
    static ComponentWidth(ratioWidth, referenceWidth) {
        return referenceWidth * ratioWidth;
    }
    static ComponentLeft(componentWidthRatio, componentJsonRefLeft) {
        return componentWidthRatio * componentJsonRefLeft;
    }
    static ComponentHeight(currentComponentWidth, componentJsonRefHeightRatio) {
        return currentComponentWidth * componentJsonRefHeightRatio;
    }
    static ComponentTop(componentLeft, componentJsonRefTopRatio) {
        return componentLeft * componentJsonRefTopRatio;
    }
}
exports.AspectRatioUtil = AspectRatioUtil;
//# sourceMappingURL=AspectRatioUtil.js.map