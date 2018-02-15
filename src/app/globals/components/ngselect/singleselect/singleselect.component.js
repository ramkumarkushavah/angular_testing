"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const CommonService_1 = require("./../../../CommonService");
let SingleDemoComponent = class SingleDemoComponent {
    constructor(commonService) {
        this.commonService = commonService;
        this.NameList = {};
        this.value = {};
        this._disabledV = '0';
        this.disabled = false;
    }
    get disabledV() {
        return this._disabledV;
    }
    set disabledV(value) {
        this._disabledV = value;
        this.disabled = this._disabledV === '1';
    }
    selected(value) {
        console.log('Selected value is: ', value);
    }
    removed(value) {
        console.log('Removed value is: ', value);
    }
    typed(value) {
        console.log('New search input: ', value);
    }
    refreshValue(value) {
        this.value = value;
    }
    ngOnInit() {
        this.commonService.allNames$.subscribe((res) => {
            this.NameList = res;
        });
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SingleDemoComponent.prototype, "autofill", void 0);
SingleDemoComponent = __decorate([
    core_1.Component({
        selector: 'single-demo',
        templateUrl: './singleselect.component.html',
        styleUrls: ['./singleselect.component.styles.scss']
    }),
    __metadata("design:paramtypes", [CommonService_1.CommonService])
], SingleDemoComponent);
exports.SingleDemoComponent = SingleDemoComponent;
var result = {};
console.log(result);
//# sourceMappingURL=singleselect.component.js.map