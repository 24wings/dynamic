import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CountdownModule } from 'ngx-countdown';
import { ZorroColStringComponent } from './dynamic/col/zorro-col-string/zorro-col-string.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { DynamicDirective } from './dynamic-directive';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlainThemeModule } from '@delon/theme';
import { DelonABCModule } from '@delon/abc';
import { DelonACLModule } from '@delon/acl';
import { DelonFormModule } from '@delon/form';
import { RouterModule } from '@angular/router';
import { SubQueryPageComponent } from './pages/sub-query-page/sub-query-page.component';
import { ZorroViewTreeComponent } from './dynamic/view/zorro-view-tree/zorro-view-tree.component';
import { ZorroViewTableComponent } from './dynamic/view/zorro-view-table/zorro-view-table.component';
import { ZorroViewMenuComponent } from './dynamic/view/zorro-view-menu/zorro-view-menu.component';
import { ZorroQuerySelectComponent } from './dynamic/query/zorro-query-select/zorro-query-select.component';
import { ZorroViewQueryComponent } from './dynamic/view/zorro-view-query/zorro-view-query.component';
import { ZorroQueryInputComponent } from './dynamic/query/zorro-query-input/zorro-query-input.component';
import { PageComponent } from './pages/page/page.component';
import { ZorroViewTreeInfoComponent } from './dynamic/view/zorro-view-tree-info/zorro-view-tree-info.component';
import { ZorroViewEditorComponent } from './dynamic/view/zorro-view-editor/zorro-view-editor.component';
import { ZorroViewInfoComponent } from './dynamic/view/zorro-view-info/zorro-view-info.component';
import { ZorroFieldStringComponent } from './dynamic/field/zorro-field-string/zorro-field-string.component';
import { TreeTableViewComponent } from './dynamic/view-set/tree-table-view/tree-table-view.component';

const THIRDMODULES = [NgZorroAntdModule, CountdownModule];
const COMPONENTS = [
  DynamicComponent,
  // page
  SubQueryPageComponent,
  PageComponent,

  // 列
  ZorroColStringComponent,
  // view
  ZorroViewTreeComponent,
  ZorroViewTableComponent,
  ZorroViewMenuComponent,
  ZorroViewQueryComponent,
  ZorroViewTreeInfoComponent,
  ZorroViewEditorComponent,
  ZorroViewInfoComponent,
  TreeTableViewComponent,
  // field
  ZorroFieldStringComponent,

  //query
  ZorroQuerySelectComponent,
  ZorroQueryInputComponent,
];
const DIRECTIVES = [DynamicDirective];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AlainThemeModule.forChild(),
    RouterModule,
    ReactiveFormsModule,
    DelonABCModule,
    DelonACLModule,
    DelonFormModule,
    // third libs
    ...THIRDMODULES,
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
    ...DIRECTIVES,
  ],
  declarations: [
    // your components
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
  entryComponents: [...COMPONENTS],
})
export class DynamicModule { }
