"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const select_1 = require("./select");
const selectpipes_1 = require("./selectpipes");
const offclick_1 = require("./offclick");
let SelectModule = class SelectModule {
};
SelectModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: [select_1.SelectComponent, selectpipes_1.HighlightPipe, offclick_1.OffClickDirective],
        exports: [select_1.SelectComponent, selectpipes_1.HighlightPipe, offclick_1.OffClickDirective]
    })
], SelectModule);
exports.SelectModule = SelectModule;
//# sourceMappingURL=select.module.js.map