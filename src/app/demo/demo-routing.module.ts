import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Component
import { DemoComponent } from './demo.component';
import { SmartTableComponent } from './smart.table/smart.table.component';
import { SmartTableDeepPrototypeComponent } from './smart-table-deep-prototype/smart-table-deep-prototype.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
    {
        path: '', component: DemoComponent,
        children: [
            {
                path: 'smarttable',
                component: SmartTableComponent
            }, {
                path: 'smarttable-deep-prototype',
                component: SmartTableDeepPrototypeComponent
            }, {
                path: 'rxjs',
                component: RxjsComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DemoRoutingModule { }

export const DemoComponents = [
    DemoComponent,
    SmartTableComponent,
    SmartTableDeepPrototypeComponent,
    RxjsComponent
];
