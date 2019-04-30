import { NgModule } from "@angular/core";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { CountdownModule } from "ngx-countdown";
import { ZorroColStringComponent } from "./dynamic/col/zorro-string-col/zorro-col-string.component";
import { DynamicComponent } from "./dynamic/dynamic.component";
import { DynamicDirective } from "./dynamic-directive";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AlainThemeModule } from "@delon/theme";
import { DelonABCModule } from "@delon/abc";
import { DelonACLModule } from "@delon/acl";
import { DelonFormModule } from "@delon/form";
import { RouterModule } from "@angular/router";

const THIRDMODULES = [
    NgZorroAntdModule,
    CountdownModule
];
const COMPONENTS = [ZorroColStringComponent,
    DynamicComponent
];
const DIRECTIVES = [DynamicDirective];

@NgModule({
    imports: [CommonModule,
        FormsModule,
        AlainThemeModule.forChild(),
        RouterModule,
        ReactiveFormsModule,
        DelonABCModule,
        DelonACLModule,
        DelonFormModule,
        // third libs
        ...THIRDMODULES
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        AlainThemeModule,
        DelonABCModule,
        DelonACLModule,
        DelonFormModule,
        // third libs
        ...THIRDMODULES,
        // your components
        ...COMPONENTS,
        ...DIRECTIVES
    ],
    declarations: [
        // your components
        ...COMPONENTS,
        ...DIRECTIVES
    ],
    entryComponents: [...COMPONENTS]
})
export class DynamicModule {

}