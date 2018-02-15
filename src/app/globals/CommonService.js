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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
const Rx_1 = require("rxjs/Rx");
const Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/buffer");
require("rxjs/add/observable/of");
const Rx_2 = require("rxjs/Rx");
const Message_1 = require("../globals/Model/Message");
const UUIDGenarator_1 = require("../globals/utils/UUIDGenarator");
const router_1 = require("@angular/router");
let CommonService = class CommonService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.treenodeNavigate = new Rx_1.Subject();
        this.submitbuttonstatus = true;
        this.GetTenantObject = new Rx_1.Subject();
        this.GetFilePath = new Rx_1.Subject();
        this.GetObjectInfo = new Rx_1.Subject();
        this.cursorPoint = new Rx_1.Subject();
        this.GetObjectPath = new Rx_2.BehaviorSubject(null);
        this.GetFileLists = new Rx_1.Subject();
        this.GetFileDetailsLists = new Rx_1.Subject();
        this.UpdateEditedDoc = new Rx_1.Subject();
        this.GetLocalFileURL = new Rx_1.Subject();
        this.VersionJson = new Rx_1.Subject();
        this.GetBlobStoreURL = new Rx_1.Subject();
        this.companypeople$ = new Rx_1.Subject();
        this.unseenCount = 0;
        this.unSeenMsgChange = new Rx_1.Subject();
        this.doActivity$ = new Rx_1.Subject();
        this.UserSettings = false;
        this.uservar = false;
        this.formSchemaFormData$ = new Rx_1.Subject();
        this.CreatePermissionsComponent$ = new Rx_1.Subject();
        this.DestroyPermisiionComponent = new Rx_1.Subject();
        this.CreateGroupsComponent$ = new Rx_1.Subject();
        this.DestroyGroupsComponent = new Rx_1.Subject();
        this.CreateDynamicComponent = new Rx_1.Subject();
        this.capabilityRoleJson = [];
        this.checkStatus = true;
        this.checkTreeActive = true;
        this.checkchannel = true;
        this.checkImageActive = false;
        this.checkImageStatus = false;
        this.zoomEnable = true;
        this.chatchannel = true;
        this.permissionValue = null;
        this.IsUserPreferrence = false;
        this.IsStencilLoaded = false;
        this.addedNames = [];
        this.selectedCapabilityList = [];
        this.availableCapabilityList = [];
        this.selectedFabric = new Rx_1.Subject();
        this.listOfFabrics = new Rx_1.Subject();
        this.homebutton = false;
        this.workbutton = false;
        this.ideasbutton = false;
        this.peoplebutton = false;
        this.assetsbutton = false;
        this.bibutton = false;
        this.collaborationbutton = false;
        this.isPalleteCreated = false;
        this.isAssetsPalleteCreated = false;
        this.isPermissionTree = false;
        this.isPartitionButtonClicked = false;
        this.palletFilter = new Rx_1.Subject();
        this.getDynamicImage = new Rx_1.Subject();
        this.checkTreeStatus = new Rx_1.Subject();
        this.changeRatios = new Rx_1.Subject();
        this.CheckButtonStatus = new Rx_1.Subject();
        this.ActivateTree = new Rx_1.Subject();
        this.DeActivateTree = new Rx_1.Subject();
        this.createDiagramSubscription$ = new Rx_1.Subject();
        this.createPalleteSubscription$ = new Rx_1.Subject();
        this.CreateUserSpecificPallete = new Rx_1.Subject();
        this.removeDiagramComponent = new Rx_1.Subject();
        this.createFormSubscription = new Rx_1.Subject();
        this.createdblformSubscription = new Rx_1.Subject();
        this.EditDiagramSub = new Rx_1.Subject();
        this.ActivatePallete = new Rx_1.Subject();
        this.updateOriginPeopleTree = new Rx_1.Subject();
        this.ToolsActivityObservable$ = new Rx_1.Subject();
        this.LeftTreeNodeDelete$ = new Rx_1.Subject();
        this.LeftTreeRenameEntity = new Rx_1.Subject();
        this.LeftTreePeopleNodeDelete = new Rx_1.Subject();
        this.LeftTreePeopleRenameEntity = new Rx_1.Subject();
        this.LastViewDiagram = new Rx_1.Subject();
        this.companylistsub = new Rx_1.Subject();
        this.CreateCSS = new Rx_1.Subject();
        this.CreateTreeCSS = new Rx_1.Subject();
        this.showCategoryTreeMessage$ = new Rx_1.Subject();
        this.showFilterTree = new Rx_1.Subject();
        this.updateOriginActivityTree$ = new Rx_1.Subject();
        this.entitesInfo$ = new Rx_1.Subject();
        this.updateOriginActivityList$ = new Rx_1.Subject();
        this.CapabilityFormSub = new Rx_1.Subject();
        this.Diagramdrawings = new Rx_1.Subject();
        this.ClickSortButton = new Rx_1.Subject();
        this.searchNavigator = new Rx_2.BehaviorSubject(null);
        this.parentName$ = new Rx_1.Subject();
        this.searchNavigationForEntities$ = new Rx_1.Subject();
        this.updatedRoleJson = new Rx_1.Subject();
        this.newRoleObserver = new Rx_1.Subject();
        this.allNames$ = new Rx_2.BehaviorSubject(null);
    }
    UpdateUnseen(count) {
        this.unseenCount = count;
        this.unSeenMsgChange.next(this.unseenCount);
    }
    DeleteEntityDoc(path) {
        var url = 'http://192.168.1.243:8615/document/DeleteFile?pathOfFolder=' + path;
        this.http.delete(url + "&fileName=")
            .subscribe((data) => {
            console.log(data);
            if (data != null) {
                var dataJson = JSON.parse(data['_body']);
            }
        }, (err) => console.log("Error : " + err));
    }
    GetCSSJSONData() {
        if (this.cssJson != null || this.cssJson != undefined) {
            return this.cssJson;
        }
        else {
            return this.http.get('json/aspectratio.json').map(res => {
                this.cssJson = Observable_1.Observable.of(res.json());
                return res.json();
            });
        }
    }
    GetAspectRatioJSON() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.get('json/aspectratio.json').toPromise();
            return response.json();
        });
    }
    getMessage() {
        var message = new Message_1.MessageModel();
        message.MessageId = UUIDGenarator_1.UUIDGenarator.generateUUID();
        message.ClientID = this.clientGuid;
        message.TenantName = this.tenantName;
        message.TenantID = this.tenantID;
        message.UserID = this.currentUserId;
        return message;
    }
    GetNewUUID() {
        return UUIDGenarator_1.UUIDGenarator.generateUUID();
    }
    GetFabricName(url) {
        switch (url) {
            case "/workfabric":
                return "Activity";
            case "/drawingsfabric":
                return "Drawings";
            case "/peoplefabric":
                return "People";
            case "/assetsfabric":
                return "Assets";
            case "/bifabric":
                return "BI";
            case "/collaborationfabric":
                return "Collaboration";
        }
    }
    GetFabricURL(name) {
        switch (name) {
            case "Activity":
                this.router.navigateByUrl('/workfabric');
                this.CheckButtonStatus.next('workfabric');
                break;
            case "Drawings":
                this.router.navigateByUrl('/drawingsfabric');
                this.CheckButtonStatus.next('drawingsfabric');
                break;
            case "Ideas":
                this.router.navigateByUrl('/drawingsfabric');
                this.CheckButtonStatus.next('drawingsfabric');
                break;
            case "People":
                this.router.navigateByUrl('/peoplefabric');
                this.CheckButtonStatus.next('peoplefabric');
                break;
            case "Assets":
                this.router.navigateByUrl('/assetsfabric');
                this.CheckButtonStatus.next('assetsfabric');
                break;
            case "BI":
                this.router.navigateByUrl('/bifabric');
                this.CheckButtonStatus.next('bifabric');
                break;
            case "Collaboration":
                this.router.navigateByUrl('/collaborationfabric');
                this.CheckButtonStatus.next('collaborationfabric');
                break;
        }
    }
    localtoTimestamp() {
        var curDate = new Date();
        var epoch = curDate.getTime() / 1000;
        return epoch.toString();
    }
    search(encodeTerm) {
        var term = encodeURIComponent(encodeTerm).toString();
        console.log("term");
        if (!term.trim()) {
            return Observable_1.Observable.of([]);
        }
        var EntityList = this.http.get(`api/V2R/search?term=` + term + "&tenantName=" + this.tenantID)
            .map((response) => {
            console.log(response);
            var data = response.json();
            console.log(data);
            if (data) {
                return data;
            }
            else {
                return null;
            }
        });
        console.log(EntityList);
        return EntityList;
    }
};
CommonService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
], CommonService);
exports.CommonService = CommonService;
//# sourceMappingURL=CommonService.js.map