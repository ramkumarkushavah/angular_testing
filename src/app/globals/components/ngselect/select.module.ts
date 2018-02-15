import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectComponent } from './select';
import { HighlightPipe } from './selectpipes';
import { OffClickDirective } from './offclick';

@NgModule({
    imports: [CommonModule],
    declarations: [SelectComponent, HighlightPipe, OffClickDirective],
    exports: [SelectComponent, HighlightPipe, OffClickDirective]
})
export class SelectModule {
}