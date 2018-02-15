import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from './../../../CommonService';


@Component({
    selector: 'single-demo',
    templateUrl: './singleselect.component.html',
    styleUrls: ['./singleselect.component.styles.scss']
})
export class SingleDemoComponent {

    @Input() autofill
    public NameList: any = {};
    private value: any = {};
    private _disabledV: string = '0';
    private disabled: boolean = false;
    constructor(public commonService: CommonService) {


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
    }

    public removed(value: any): void {
        console.log('Removed value is: ', value);
    }

    public typed(value: any): void {
        console.log('New search input: ', value);
    }

    public refreshValue(value: any): void {
        this.value = value;
    }
    ngOnInit() {
        this.commonService.allNames$.subscribe((res: any) => {
            this.NameList = res;
        });

    }
}


// var str1 = "Chandu";
//var str2 = "";
//var n = str2.startsWith(str2);
//console.log(str2);




var result = {};

// for(var i = 0; i < input.length; i++)
// {
//     result[input[i].id] = input[i].text;
// }


console.log(result);

