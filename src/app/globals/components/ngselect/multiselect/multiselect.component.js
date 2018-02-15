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
let MultipleselectComponent = class MultipleselectComponent {
    constructor(commonService) {
        this.commonService = commonService;
        this.NameList = {};
        this.value = ['Athens'];
        this._disabledV = '0';
        this.disabled = false;
        this.placeholder = "No select seconday parent";
        if (commonService.permissionNewRolePlaceHolders) {
            this.placeholder = commonService.permissionNewRolePlaceHolders;
        }
        this.commonService.selectedFabric.subscribe(res => {
            var capabilityNameList = [];
            var capabilityList = [];
            if (this.commonService.capabilityRoleJson) {
                this.NameList = [];
                for (var i = 0; i < this.commonService.capabilityRoleJson.length; i++) {
                    if (this.commonService.capabilityRoleJson[i].fabricName == res) {
                        for (let capability of this.commonService.capabilityRoleJson[i].capabilities) {
                            capabilityNameList.push(capability.name);
                            capabilityList.push({ "Name": capability.name, "Id": capability.id });
                        }
                        this.NameList = capabilityNameList;
                        this.commonService.availableCapabilityList = capabilityList;
                        console.log("In multiselect Component :" + this.commonService.availableCapabilityList);
                    }
                }
            }
        });
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
        this.commonService.selectedCapabilityList.push(value.text);
        console.log("selectedCapabilityList" + this.commonService.selectedCapabilityList);
    }
    removed(value) {
        console.log('Removed value is: ', value);
        if (this.commonService.selectedCapabilityList) {
            var index = this.commonService.selectedCapabilityList.indexOf(value.text);
            if (index > -1) {
                this.commonService.selectedCapabilityList.splice(index, 1);
            }
        }
    }
    refreshValue(value) {
        this.value = value;
    }
    ngOnInit() {
        this.commonService.allNames$.subscribe((res) => {
            this.NameList = res;
        });
    }
    itemsToString(value = []) {
        return value
            .map((item) => {
            return item.text;
        }).join(',');
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], MultipleselectComponent.prototype, "autofill", void 0);
MultipleselectComponent = __decorate([
    core_1.Component({
        selector: 'multiple-demo',
        templateUrl: './multiselect.component.html',
        styleUrls: ['./multiselect.component.styles.scss']
    }),
    __metadata("design:paramtypes", [CommonService_1.CommonService])
], MultipleselectComponent);
exports.MultipleselectComponent = MultipleselectComponent;
//# sourceMappingURL=multiselect.component.js.map