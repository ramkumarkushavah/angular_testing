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
const forms_1 = require("@angular/forms");
const platform_browser_1 = require("@angular/platform-browser");
const selectitem_1 = require("./selectitem");
const selectpipes_1 = require("./selectpipes");
const common_1 = require("./common");
let styles = `
  .ui-select-toggle {
    position: relative;
}
.ui-select-toggle[_ngcontent-c38] {
    position: relative;
    width: 168px;
    margin-top: 24px;

  }
  /* Fix caret going into new line in Firefox */
  .ui-select-placeholder {
    float: left;
  }
  
  /* Fix Bootstrap dropdown position when inside a input-group */
  .input-group > .dropdown {
    /* Instead of relative */
 width: 279px;
    margin-top: -10px;
    position: static;
  }
.dropdown, .dropup {
    width: 279px;
    margin-top: -10px;
    position: relative;
}
  
  .ui-select-match > .btn {
    /* Instead of center because of .btn */
    text-align: left !important;
    width:181px;

  }
  
  .ui-select-match > .caret {
    position: absolute;
    top: 45%;
    right: 15px;
  }
  
  .ui-disabled {
    background-color: #eceeef;
    border-radius: 4px;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 5;
    opacity: 0.6;
    top: 0;
    left: 0;
    cursor: not-allowed;
  }
.ui-select-multiple[_ngcontent-c31] .ui-select-match-item[_ngcontent-c31] {
   
    outline: 0;
    margin: 0 3px 3px 0;
    padding: 3px 3px 0 3px;
    margin-left: -1px;
    width: 75px;
   
}
  
  .ui-select-choices {
    width: 100%;
    height: auto;
    max-width: 16px;
    max-height: 104px;
    overflow-x: hidden;
    margin-top: 0;
  }
  
  .ui-select-multiple .ui-select-choices {
    margin-top: 1px;
  }
  .ui-select-choices-row>a {
      display: block;
      padding: 3px 20px;
      clear: both;
      font-weight: 400;
      line-height: 1.42857143;
      color: #333;
      white-space: nowrap;
  }
//.ui-select-match[_ngcontent-c31] > .btn[_ngcontent-c31] {
//    /* text-align: left !important; */
//    height: 25px;

//    margin-left: -2px;
   
//    width: 180px;
//    margin-top: 22px;
//}
.ui-select-match[_ngcontent-c29] > .btn[_ngcontent-c29] {
    width: 13vw;
    text-align: left !important;
    margin-top: 2vw;
}
  .ui-select-choices-row.active>a {
      color: #fff;
      text-decoration: none;
      outline: 0;
      background-color: #428bca;
  }
  
  .ui-select-multiple {
    height: auto;
    margin-top: 27px;
    padding: 3px 3px 0 3px;
    width: 179px;
  }
  
  .ui-select-multiple input.ui-select-search {
    background-color: transparent !important; /* To prevent double background when disabled */
    border: none;
    outline: none;
    box-shadow: none;
    height: 1.6666em;
    padding: 0;
    margin-bottom: 3px;
    
  }
  .ui-select-match .close {
      font-size: 1.6em;
      line-height: 0.75;
  }
  
  .ui-select-multiple .ui-select-match-item {
 width: 177px;
    outline: 0;
    margin: 0 3px 3px 0;
    padding: 3px 3px 0 3px;
    margin-left: 4px;
    width: 72px;
    height: 31px;  }
  .ui-select-toggle > .caret {
      position: absolute;
      height: 10px;
      top: 50%;
      right: 10px;
      margin-top: -2px;
  }
`;
let SelectComponent = SelectComponent_1 = class SelectComponent {
    constructor(element, sanitizer) {
        this.sanitizer = sanitizer;
        this.allowClear = false;
        this.placeholder = '';
        this.idField = 'id';
        this.textField = 'text';
        this.childrenField = 'children';
        this.multiple = false;
        this.data = new core_1.EventEmitter();
        this.selected = new core_1.EventEmitter();
        this.removed = new core_1.EventEmitter();
        this.typed = new core_1.EventEmitter();
        this.opened = new core_1.EventEmitter();
        this.options = [];
        this.itemObjects = [];
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.inputMode = false;
        this._optionsOpened = false;
        this.inputValue = '';
        this._items = [];
        this._disabled = false;
        this._active = [];
        this.element = element;
        this.clickedOutside = this.clickedOutside.bind(this);
    }
    set items(value) {
        if (!value) {
            this._items = this.itemObjects = [];
        }
        else {
            this._items = value.filter((item) => {
                if ((typeof item === 'string') || (typeof item === 'object' && item && item[this.textField] && item[this.idField])) {
                    return item;
                }
            });
            this.itemObjects = this._items.map((item) => (typeof item === 'string' ? new selectitem_1.SelectItem(item) : new selectitem_1.SelectItem({ id: item[this.idField], text: item[this.textField], children: item[this.childrenField] })));
        }
    }
    set disabled(value) {
        this._disabled = value;
        if (this._disabled === true) {
            this.hideOptions();
        }
    }
    get disabled() {
        return this._disabled;
    }
    set active(selectedItems) {
        if (!selectedItems || selectedItems.length === 0) {
            this._active = [];
        }
        else {
            let areItemsStrings = typeof selectedItems[0] === 'string';
            this._active = selectedItems.map((item) => {
                let data = areItemsStrings
                    ? item
                    : { id: item[this.idField], text: item[this.textField] };
                return new selectitem_1.SelectItem(data);
            });
        }
    }
    get active() {
        return this._active;
    }
    set optionsOpened(value) {
        this._optionsOpened = value;
        this.opened.emit(value);
    }
    get optionsOpened() {
        return this._optionsOpened;
    }
    sanitize(html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }
    inputEvent(e, isUpMode = false) {
        if (e.keyCode === 9) {
            return;
        }
        if (isUpMode && (e.keyCode === 37 || e.keyCode === 39 || e.keyCode === 38 ||
            e.keyCode === 40 || e.keyCode === 13)) {
            e.preventDefault();
            return;
        }
        if (!isUpMode && e.keyCode === 8) {
            let el = this.element.nativeElement
                .querySelector('div.ui-select-container > input');
            if (!el.value || el.value.length <= 0) {
                if (this.active.length > 0) {
                    this.remove(this.active[this.active.length - 1]);
                }
                e.preventDefault();
            }
        }
        if (!isUpMode && e.keyCode === 27) {
            this.hideOptions();
            this.element.nativeElement.children[0].focus();
            e.preventDefault();
            return;
        }
        if (!isUpMode && e.keyCode === 46) {
            if (this.active.length > 0) {
                this.remove(this.active[this.active.length - 1]);
            }
            e.preventDefault();
        }
        if (!isUpMode && e.keyCode === 37 && this._items.length > 0) {
            this.behavior.first();
            e.preventDefault();
            return;
        }
        if (!isUpMode && e.keyCode === 39 && this._items.length > 0) {
            this.behavior.last();
            e.preventDefault();
            return;
        }
        if (!isUpMode && e.keyCode === 38) {
            this.behavior.prev();
            e.preventDefault();
            return;
        }
        if (!isUpMode && e.keyCode === 40) {
            this.behavior.next();
            e.preventDefault();
            return;
        }
        if (!isUpMode && e.keyCode === 13) {
            if (this.active.indexOf(this.activeOption) === -1) {
                this.selectActiveMatch();
                this.behavior.next();
            }
            e.preventDefault();
            return;
        }
        let target = e.target || e.srcElement;
        if (target && target.value) {
            this.inputValue = target.value;
            this.behavior.filter(new RegExp(common_1.escapeRegexp(this.inputValue), 'ig'));
            this.doEvent('typed', this.inputValue);
        }
        else {
            this.open();
        }
    }
    ngOnInit() {
        this.behavior = (this.firstItemHasChildren) ?
            new ChildrenBehavior(this) : new GenericBehavior(this);
    }
    remove(item) {
        if (this._disabled === true) {
            return;
        }
        if (this.multiple === true && this.active) {
            let index = this.active.indexOf(item);
            this.active.splice(index, 1);
            this.data.next(this.active);
            this.doEvent('removed', item);
        }
        if (this.multiple === false) {
            this.active = [];
            this.data.next(this.active);
            this.doEvent('removed', item);
        }
    }
    doEvent(type, value) {
        if (this[type] && value) {
            this[type].next(value);
        }
        this.onTouched();
        if (type === 'selected' || type === 'removed') {
            this.onChange(this.active);
        }
    }
    clickedOutside() {
        this.inputMode = false;
        this.optionsOpened = false;
    }
    get firstItemHasChildren() {
        return this.itemObjects[0] && this.itemObjects[0].hasChildren();
    }
    writeValue(val) {
        this.active = val;
        this.data.emit(this.active);
    }
    validate(c) {
        let controlValue = c ? c.value : [];
        if (!controlValue) {
            controlValue = [];
        }
        return (controlValue.length > 0) ? null : {
            ng2SelectEmptyError: {
                valid: false
            }
        };
    }
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { this.onTouched = fn; }
    matchClick(e) {
        if (this._disabled === true) {
            return;
        }
        this.inputMode = !this.inputMode;
        if (this.inputMode === true && ((this.multiple === true && e) || this.multiple === false)) {
            this.focusToInput();
            this.open();
        }
        $("#gridId").animate({ "scrollTop": $("#gridId").scrollTop() + 100 });
    }
    mainClick(event) {
        if (this.inputMode === true || this._disabled === true) {
            return;
        }
        if (event.keyCode === 46) {
            event.preventDefault();
            this.inputEvent(event);
            return;
        }
        if (event.keyCode === 8) {
            event.preventDefault();
            this.inputEvent(event, true);
            return;
        }
        if (event.keyCode === 9 || event.keyCode === 13 ||
            event.keyCode === 27 || (event.keyCode >= 37 && event.keyCode <= 40)) {
            event.preventDefault();
            return;
        }
        this.inputMode = true;
        let value = String
            .fromCharCode(96 <= event.keyCode && event.keyCode <= 105 ? event.keyCode - 48 : event.keyCode)
            .toLowerCase();
        this.focusToInput(value);
        this.open();
        let target = event.target || event.srcElement;
        target.value = value;
        this.inputEvent(event);
    }
    selectActive(value) {
        this.activeOption = value;
    }
    isActive(value) {
        return this.activeOption.id === value.id;
    }
    removeClick(value, event) {
        event.stopPropagation();
        this.remove(value);
    }
    focusToInput(value = '') {
        setTimeout(() => {
            let el = this.element.nativeElement.querySelector('div.ui-select-container > input');
            if (el) {
                el.focus();
                el.value = value;
            }
        }, 0);
    }
    open() {
        this.options = this.itemObjects
            .filter((option) => (this.multiple === false ||
            this.multiple === true && !this.active.find((o) => option.text === o.text)));
        if (this.options.length > 0) {
            this.behavior.first();
        }
        this.optionsOpened = true;
    }
    hideOptions() {
        this.inputMode = false;
        this.optionsOpened = false;
    }
    selectActiveMatch() {
        this.selectMatch(this.activeOption);
    }
    selectMatch(value, e = void 0) {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        if (this.options.length <= 0) {
            return;
        }
        if (this.multiple === true) {
            this.active.push(value);
            this.data.next(this.active);
        }
        if (this.multiple === false) {
            this.active[0] = value;
            this.data.next(this.active[0]);
        }
        this.doEvent('selected', value);
        this.hideOptions();
        if (this.multiple === true) {
            this.focusToInput('');
        }
        else {
            this.focusToInput(selectpipes_1.stripTags(value.text));
            this.element.nativeElement.querySelector('.ui-select-container').focus();
        }
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SelectComponent.prototype, "allowClear", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SelectComponent.prototype, "placeholder", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SelectComponent.prototype, "idField", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SelectComponent.prototype, "textField", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SelectComponent.prototype, "childrenField", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SelectComponent.prototype, "multiple", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], SelectComponent.prototype, "items", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], SelectComponent.prototype, "disabled", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], SelectComponent.prototype, "active", null);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], SelectComponent.prototype, "data", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], SelectComponent.prototype, "selected", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], SelectComponent.prototype, "removed", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], SelectComponent.prototype, "typed", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], SelectComponent.prototype, "opened", void 0);
SelectComponent = SelectComponent_1 = __decorate([
    core_1.Component({
        selector: 'ng-select',
        styles: [styles],
        providers: [
            {
                provide: forms_1.NG_VALUE_ACCESSOR,
                useExisting: core_1.forwardRef(() => SelectComponent_1),
                multi: true
            },
            {
                provide: forms_1.NG_VALIDATORS,
                useExisting: core_1.forwardRef(() => SelectComponent_1),
                multi: true,
            }
        ],
        template: `
  <div tabindex="0"
     *ngIf="multiple === false"
     (keyup)="mainClick($event)"
     [offClick]="clickedOutside"
     class="ui-select-container dropdown open">
    <div [ngClass]="{'ui-disabled': disabled}"></div>
    <div class="ui-select-match"
         *ngIf="!inputMode">
      <span tabindex="-1"
          class="btn btn-default btn-secondary form-control ui-select-toggle"
          (click)="matchClick($event)"
          style="outline: 0;">
        <span *ngIf="active.length <= 0" class="ui-select-placeholder text-muted">{{placeholder}}</span>
        <span *ngIf="active.length > 0" class="ui-select-match-text pull-left"
              [ngClass]="{'ui-select-allow-clear': allowClear && active.length > 0}"
              [innerHTML]="sanitize(active[0].text)"></span>
        <i class="dropdown-toggle pull-right"></i>
        <i class="caret pull-right"></i>
        <a *ngIf="allowClear && active.length>0" class="btn btn-xs btn-link pull-right" style="margin-right: 10px; padding: 0;" (click)="removeClick(active[0], $event)">
           <i class="glyphicon glyphicon-remove"></i>
        </a>
      </span>
    </div>
    <input type="text" autocomplete="false" tabindex="-1"
           (keydown)="inputEvent($event)"
           (keyup)="inputEvent($event, true)"
           [disabled]="disabled"
           class="form-control ui-select-search"
           *ngIf="inputMode"
           placeholder="{{active.length <= 0 ? placeholder : ''}}">
     <!-- options template -->
     <ul *ngIf="optionsOpened && options && options.length > 0 && !firstItemHasChildren"
          class="ui-select-choices dropdown-menu" role="menu">
        <li *ngFor="let o of options" role="menuitem">
          <div class="ui-select-choices-row"
               [class.active]="isActive(o)"
               (mouseenter)="selectActive(o)"
               (click)="selectMatch(o, $event)">
            <a href="javascript:void(0)" class="dropdown-item">
              <div [innerHtml]="sanitize(o.text | highlight:inputValue)"></div>
            </a>
          </div>
        </li>
      </ul>
  
      <ul *ngIf="optionsOpened && options && options.length > 0 && firstItemHasChildren"
          class="ui-select-choices dropdown-menu" role="menu">
        <li *ngFor="let c of options; let index=index" role="menuitem">
          <div class="divider dropdown-divider" *ngIf="index > 0"></div>
          <div class="dropdown-header">{{c.text}}</div>
  
          <div *ngFor="let o of c.children"
               class="ui-select-choices-row"
               [class.active]="isActive(o)"
               (mouseenter)="selectActive(o)"
               (click)="selectMatch(o, $event)"
               [ngClass]="{'active': isActive(o)}">
            <a href="javascript:void(0)" class="dropdown-item">
              <div [innerHtml]="sanitize(o.text | highlight:inputValue)"></div>
            </a>
          </div>
        </li>
      </ul>
  </div>
  <div tabindex="0"
     *ngIf="multiple === true"
     (keyup)="mainClick($event)"
     (focus)="focusToInput('')"
     [offClick]="clickedOutside"
     class="ui-select-container ui-select-multiple dropdown form-control open">
    <div [ngClass]="{'ui-disabled': disabled}"></div>
    <span class="ui-select-match">
        <span *ngFor="let a of active">
            <span class="ui-select-match-item btn btn-default btn-secondary btn-xs"
                  tabindex="-1"
                  type="button"
                  [ngClass]="{'btn-default': true}">
               <a class="close"
                  style="margin-left: 5px; padding: 0;"
                  (click)="removeClick(a, $event)">&times;</a>
               <span [innerHtml]="sanitize(a.text)"></span>
           </span>
        </span>
    </span>
    <input type="text"
           (keydown)="inputEvent($event)"
           (keyup)="inputEvent($event, true)"
           (click)="matchClick($event)"
           [disabled]="disabled"
           autocomplete="false"
           autocorrect="off"
           autocapitalize="off"
           spellcheck="false"
           class="form-control ui-select-search"
           placeholder="{{active.length <= 0 ? placeholder : ''}}"
           role="combobox">
     <!-- options template -->
     <ul *ngIf="optionsOpened && options && options.length > 0 && !firstItemHasChildren"
          class="ui-select-choices dropdown-menu" role="menu">
        <li *ngFor="let o of options" role="menuitem">
          <div class="ui-select-choices-row"
               [class.active]="isActive(o)"
               (mouseenter)="selectActive(o)"
               (click)="selectMatch(o, $event)">
            <a href="javascript:void(0)" class="dropdown-item">
              <div [innerHtml]="sanitize(o.text | highlight:inputValue)"></div>
            </a>
          </div>
        </li>
      </ul>
  
      <ul *ngIf="optionsOpened && options && options.length > 0 && firstItemHasChildren"
          class="ui-select-choices dropdown-menu" role="menu">
        <li *ngFor="let c of options; let index=index" role="menuitem">
          <div class="divider dropdown-divider" *ngIf="index > 0"></div>
          <div class="dropdown-header">{{c.text}}</div>
  
          <div *ngFor="let o of c.children"
               class="ui-select-choices-row"
               [class.active]="isActive(o)"
               (mouseenter)="selectActive(o)"
               (click)="selectMatch(o, $event)"
               [ngClass]="{'active': isActive(o)}">
            <a href="javascript:void(0)" class="dropdown-item">
              <div [innerHtml]="sanitize(o.text | highlight:inputValue)"></div>
            </a>
          </div>
        </li>
      </ul>
  </div>
  `
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, platform_browser_1.DomSanitizer])
], SelectComponent);
exports.SelectComponent = SelectComponent;
class Behavior {
    constructor(actor) {
        this.optionsMap = new Map();
        this.actor = actor;
    }
    fillOptionsMap() {
        this.optionsMap.clear();
        let startPos = 0;
        this.actor.itemObjects
            .map((item) => {
            startPos = item.fillChildrenHash(this.optionsMap, startPos);
        });
    }
    ensureHighlightVisible(optionsMap = void 0) {
        let container = this.actor.element.nativeElement.querySelector('.ui-select-choices-content');
        if (!container) {
            return;
        }
        let choices = container.querySelectorAll('.ui-select-choices-row');
        if (choices.length < 1) {
            return;
        }
        let activeIndex = this.getActiveIndex(optionsMap);
        if (activeIndex < 0) {
            return;
        }
        let highlighted = choices[activeIndex];
        if (!highlighted) {
            return;
        }
        let posY = highlighted.offsetTop + highlighted.clientHeight - container.scrollTop;
        let height = container.offsetHeight;
        if (posY > height) {
            container.scrollTop += posY - height;
        }
        else if (posY < highlighted.clientHeight) {
            container.scrollTop -= highlighted.clientHeight - posY;
        }
    }
    getActiveIndex(optionsMap = void 0) {
        let ai = this.actor.options.indexOf(this.actor.activeOption);
        if (ai < 0 && optionsMap !== void 0) {
            ai = optionsMap.get(this.actor.activeOption.id);
        }
        return ai;
    }
}
exports.Behavior = Behavior;
class GenericBehavior extends Behavior {
    constructor(actor) {
        super(actor);
    }
    first() {
        this.actor.activeOption = this.actor.options[0];
        super.ensureHighlightVisible();
    }
    last() {
        this.actor.activeOption = this.actor.options[this.actor.options.length - 1];
        super.ensureHighlightVisible();
    }
    prev() {
        let index = this.actor.options.indexOf(this.actor.activeOption);
        this.actor.activeOption = this.actor
            .options[index - 1 < 0 ? this.actor.options.length - 1 : index - 1];
        super.ensureHighlightVisible();
    }
    next() {
        let index = this.actor.options.indexOf(this.actor.activeOption);
        this.actor.activeOption = this.actor
            .options[index + 1 > this.actor.options.length - 1 ? 0 : index + 1];
        super.ensureHighlightVisible();
    }
    filter(query) {
        let options = this.actor.itemObjects
            .filter((option) => {
            return selectpipes_1.stripTags(option.text).match(query) &&
                (this.actor.multiple === false ||
                    (this.actor.multiple === true && this.actor.active.map((item) => item.id).indexOf(option.id) < 0));
        });
        this.actor.options = options;
        if (this.actor.options.length > 0) {
            this.actor.activeOption = this.actor.options[0];
            super.ensureHighlightVisible();
        }
    }
}
exports.GenericBehavior = GenericBehavior;
class ChildrenBehavior extends Behavior {
    constructor(actor) {
        super(actor);
    }
    first() {
        this.actor.activeOption = this.actor.options[0].children[0];
        this.fillOptionsMap();
        this.ensureHighlightVisible(this.optionsMap);
    }
    last() {
        this.actor.activeOption =
            this.actor
                .options[this.actor.options.length - 1]
                .children[this.actor.options[this.actor.options.length - 1].children.length - 1];
        this.fillOptionsMap();
        this.ensureHighlightVisible(this.optionsMap);
    }
    prev() {
        let indexParent = this.actor.options
            .findIndex((option) => this.actor.activeOption.parent && this.actor.activeOption.parent.id === option.id);
        let index = this.actor.options[indexParent].children
            .findIndex((option) => this.actor.activeOption && this.actor.activeOption.id === option.id);
        this.actor.activeOption = this.actor.options[indexParent].children[index - 1];
        if (!this.actor.activeOption) {
            if (this.actor.options[indexParent - 1]) {
                this.actor.activeOption = this.actor
                    .options[indexParent - 1]
                    .children[this.actor.options[indexParent - 1].children.length - 1];
            }
        }
        if (!this.actor.activeOption) {
            this.last();
        }
        this.fillOptionsMap();
        this.ensureHighlightVisible(this.optionsMap);
    }
    next() {
        let indexParent = this.actor.options
            .findIndex((option) => this.actor.activeOption.parent && this.actor.activeOption.parent.id === option.id);
        let index = this.actor.options[indexParent].children
            .findIndex((option) => this.actor.activeOption && this.actor.activeOption.id === option.id);
        this.actor.activeOption = this.actor.options[indexParent].children[index + 1];
        if (!this.actor.activeOption) {
            if (this.actor.options[indexParent + 1]) {
                this.actor.activeOption = this.actor.options[indexParent + 1].children[0];
            }
        }
        if (!this.actor.activeOption) {
            this.first();
        }
        this.fillOptionsMap();
        this.ensureHighlightVisible(this.optionsMap);
    }
    filter(query) {
        let options = [];
        let optionsMap = new Map();
        let startPos = 0;
        for (let si of this.actor.itemObjects) {
            let children = si.children.filter((option) => query.test(option.text));
            startPos = si.fillChildrenHash(optionsMap, startPos);
            if (children.length > 0) {
                let newSi = si.getSimilar();
                newSi.children = children;
                options.push(newSi);
            }
        }
        this.actor.options = options;
        if (this.actor.options.length > 0) {
            this.actor.activeOption = this.actor.options[0].children[0];
            super.ensureHighlightVisible(optionsMap);
        }
    }
}
exports.ChildrenBehavior = ChildrenBehavior;
var SelectComponent_1;
//# sourceMappingURL=select.js.map