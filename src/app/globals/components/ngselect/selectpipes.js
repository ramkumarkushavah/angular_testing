"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const common_1 = require("./common");
let HighlightPipe = class HighlightPipe {
    transform(value, query) {
        if (query.length < 1) {
            return value;
        }
        if (query) {
            let tagRE = new RegExp('<[^<>]*>', 'ig');
            let tagList = value.match(tagRE);
            let tmpValue = value.replace(tagRE, '$!$');
            value = tmpValue.replace(new RegExp(common_1.escapeRegexp(query), 'gi'), '<strong>$&</strong>');
            for (let i = 0; value.indexOf('$!$') > -1; i++) {
                value = value.replace('$!$', tagList[i]);
            }
        }
        return value;
    }
};
HighlightPipe = __decorate([
    core_1.Pipe({ name: 'highlight' })
], HighlightPipe);
exports.HighlightPipe = HighlightPipe;
function stripTags(input) {
    let tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
    let commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
    return input.replace(commentsAndPhpTags, '').replace(tags, '');
}
exports.stripTags = stripTags;
//# sourceMappingURL=selectpipes.js.map