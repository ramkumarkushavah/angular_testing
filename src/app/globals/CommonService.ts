import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Subject } from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/buffer';
import 'rxjs/add/observable/of';
import { BehaviorSubject, ReplaySubject } from 'rxjs/Rx';
import { Message, MessageData, MessageModel, MessageType, Routing, Type } from '../globals/Model/Message'
import { EntityTypes } from '../globals/Model/EntityTypes'
import { UUIDGenarator } from '../globals/utils/UUIDGenarator'
import { Router } from '@angular/router';

@Injectable()
export class CommonService {

    public treenodeNavigate = new Subject();

    // capabilities document
    submitbuttonstatus = true;
    public GetTenantObject = new Subject();
    public GetFilePath = new Subject();
    public GetObjectInfo = new Subject();
    public cursorPoint = new Subject();

    public GetObjectPath = new BehaviorSubject(null);
    public GetFileLists = new Subject();
    public GetFileDetailsLists = new Subject();
    public UpdateEditedDoc = new Subject();
    public GetLocalFileURL = new Subject();
    public VersionJson = new Subject();
    public GetBlobStoreURL = new Subject();
    public companypeople$ = new Subject();


    // for unseen message
    private unseenCount = 0;
    unSeenMsgChange: Subject<number> = new Subject<number>();
    UpdateUnseen(count: number) {
        this.unseenCount = count;
        this.unSeenMsgChange.next(this.unseenCount);
    }
//////////////////


    doActivity$ = new Subject();
    category
    username;
    UserSettings = false;
    uservar = false;
    // Subscribed only in formgenerator
    formSchemaFormData$ = new Subject();

    ObjectPath;
    cssJson: Observable<any>;
    tenantName;
    tenantID;
    diagramgraph;
    assetsgraph;
    clientGuid;
    lastOpenedFabric;
    fabric;
    doubleclickDrawingcapabilty;
    globalVarForUserPermission;
    globalVarForUserGroups;
    CreatePermissionsComponent$ = new Subject();
    DestroyPermisiionComponent = new Subject();
    public CreateGroupsComponent$ = new Subject();
    public DestroyGroupsComponent = new Subject();
    CreateDynamicComponent = new Subject();
    constructor(private http: Http, private router: Router) {
    }
    capabilityRoleJson = [];
    fabicName;
    checkStatus = true;
    checkTreeActive = true;
    currentUserName;
    currentUserId
    checkchannel = true;
    checkImageActive = false;
    checkImageStatus = false;
    DiagramId;
    DiagramName;
    commondrawing;
    zoomEnable = true;

    chatchannel = true;
    permissionValue = null;
    currentHoverData;
    IsUserPreferrence: boolean = false;
    IsStencilLoaded: boolean = false;
    addedNames = [];

    //Permissions
    //selected capabilityList
    selectedCapabilityList = [];
    //list of available Capabiliy based on selected fabric
    availableCapabilityList = [];
    public selectedFabric = new Subject();
    public listOfFabrics = new Subject();

    //Button Activities
    homebutton: boolean = false;
    workbutton: boolean = false;
    ideasbutton: boolean = false;
    peoplebutton: boolean = false;
    assetsbutton: boolean = false;
    bibutton: boolean = false;
    collaborationbutton: boolean = false;
    isPalleteCreated: boolean = false;
    isAssetsPalleteCreated: boolean = false;
    isPermissionTree: boolean = false;
    isPartitionButtonClicked: boolean = false;

    treeJsonData;
    public palletFilter = new Subject();
    public getDynamicImage = new Subject();
    public checkTreeStatus = new Subject();
    public changeRatios = new Subject();
    public CheckButtonStatus = new Subject();
    public ActivateTree = new Subject();
    public DeActivateTree = new Subject();
    public createDiagramSubscription$ = new Subject();
    public createPalleteSubscription$ = new Subject();
    public CreateUserSpecificPallete = new Subject();
    //public CreateDynamicComponent = new Subject();
    public removeDiagramComponent = new Subject();
    public createFormSubscription = new Subject();
    public createdblformSubscription = new Subject();
    public EditDiagramSub = new Subject();
    public ActivatePallete = new Subject();
    public updateOriginPeopleTree = new Subject();
    public ToolsActivityObservable$ = new Subject();
    public LeftTreeNodeDelete$ = new Subject();
    public LeftTreeRenameEntity = new Subject();
    public LeftTreePeopleNodeDelete = new Subject();
    public LeftTreePeopleRenameEntity = new Subject();
    public LastViewDiagram = new Subject();
    public companylistsub = new Subject();
    public CreateCSS = new Subject();
    public CreateTreeCSS = new Subject();
    public showCategoryTreeMessage$ = new Subject();
    public showFilterTree = new Subject();
    public updateOriginActivityTree$ = new Subject();
    public entitesInfo$ = new Subject();
    public updateOriginActivityList$ = new Subject();
    public CapabilityFormSub = new Subject();
    public Diagramdrawings = new Subject();
    public ClickSortButton = new Subject();
    public searchNavigator = new BehaviorSubject(null);
    public parentName$ = new Subject();
    public searchNavigationForEntities$ = new Subject();
    public updatedRoleJson = new Subject();
    public newRoleObserver = new Subject();
    permissionNewRolePlaceHolders;
    public allNames$ = new BehaviorSubject(null);
    DeleteEntityDoc(path) {
        var url = 'http://192.168.1.243:8615/document/DeleteFile?pathOfFolder=' + path;
        this.http.delete(url + "&fileName=")
           .subscribe(
            (data) => {
                console.log(data);
                if (data != null) {
                    var dataJson = JSON.parse(data['_body']);
                }
            },
            (err) => console.log("Error : " + err))
    }

    GetCSSJSONData() {
        if (this.cssJson != null || this.cssJson != undefined) {
            return this.cssJson;
        } else {
            return this.http.get('../../assets/json/aspectratio.json').map(res => {
                this.cssJson = Observable.of(res.json());
                return res.json();
            });
        }
    }

    async GetAspectRatioJSON(): Promise<number> {
        const response = await this.http.get('../../assets/json/aspectratio.json').toPromise();
        return response.json();
    }
    getMessage(): MessageModel {
        var message = new MessageModel();
        message.MessageId = UUIDGenarator.generateUUID()
        message.ClientID = this.clientGuid;
        message.TenantName = this.tenantName;
        message.TenantID = this.tenantID
        message.UserID = this.currentUserId;
        return message;
    }

    //GetTenantId(tenantName) {
    //    this.http.get('api/V2R/tenantId/' + tenantName).subscribe(res => {
    //        console.log(res.text())
    //        this.tenantID = res.text();
    //    });
    //}

    GetNewUUID() {
      return   UUIDGenarator.generateUUID()
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
                //return this.router.navigateByUrl;
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
    localtoTimestamp()
    {
        var curDate = new Date();
        var epoch = curDate.getTime() / 1000;
        return epoch.toString();
    }

    search(encodeTerm: string): Observable<any[]> {
        var term = encodeURIComponent(encodeTerm).toString();
        console.log("term");

        if (!term.trim()) {
            // if not search term, return empty.
            return Observable.of<any[]>([]);
        }
        //if (term.length < 3)
        //    return Observable.of<any[]>([]);
        var EntityList = this.http.get(`api/V2R/search?term=` + term + "&tenantName=" + this.tenantID)
            //.map((r: Response) => { return (r.json().length != 0 ? r.json() : null) as any[] });
            .map((response: Response) => {
                console.log(response)
                //if (response) {
                    var data = response.json();
                    console.log(data)
                    if (data) {
                        return data

                    } else {
                        return null
                    }
                //}
            });
        console.log(EntityList);
        return EntityList;
    }
}