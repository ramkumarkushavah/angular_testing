import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from './../../../CommonService';
@Component({
    selector: 'multiple-demo',
    templateUrl: './multiselect.component.html',
    styleUrls: ['./multiselect.component.styles.scss']
})
export class MultipleselectComponent {
    //@Input() multisearch

    //public input: Array<Object> = this.multisearch;

    @Input() autofill
    public NameList: any = {};

    private value: any = ['Athens'];
    private _disabledV: string = '0';
    private disabled: boolean = false;
    placeholder = "No select seconday parent";
    constructor(public commonService: CommonService) {

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

    private get disabledV(): string {
        return this._disabledV;
    }

    private set disabledV(value: string) {
        this._disabledV = value;
        this.disabled = this._disabledV === '1';
    }

    public selected(value: any): void {
        console.log('Selected value is: ', value);
        this.commonService.selectedCapabilityList.push(value.text);
        console.log("selectedCapabilityList" + this.commonService.selectedCapabilityList);
    }

    public removed(value: any): void {
        console.log('Removed value is: ', value);
        if (this.commonService.selectedCapabilityList) {
            var index = this.commonService.selectedCapabilityList.indexOf(value.text);
            if (index > -1) {
                this.commonService.selectedCapabilityList.splice(index, 1);
            }
        }
    }

    public refreshValue(value: any): void {
        this.value = value;
    }
    ngOnInit() {
        this.commonService.allNames$.subscribe((res: any) => {
            this.NameList = res;
        });

    }

    public itemsToString(value: Array<any> = []): string {
        return value
            .map((item: any) => {
                return item.text;
            }).join(',');
    }
}