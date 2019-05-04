import { ZorroColStringComponent } from './dynamic/col/zorro-col-string/zorro-col-string.component';
import { SubQueryPageComponent } from './pages/sub-query-page/sub-query-page.component';
import { ZorroViewTreeComponent } from './dynamic/view/zorro-view-tree/zorro-view-tree.component';
import { ZorroViewTableComponent } from './dynamic/view/zorro-view-table/zorro-view-table.component';
import { ZorroViewMenuComponent } from './dynamic/view/zorro-view-menu/zorro-view-menu.component';
import { ZorroQuerySelectComponent } from './dynamic/query/zorro-query-select/zorro-query-select.component';
import { ZorroViewQueryComponent } from './dynamic/view/zorro-view-query/zorro-view-query.component';
import { ZorroQueryInputComponent } from './dynamic/query/zorro-query-input/zorro-query-input.component';
import { ZorroViewTreeInfoComponent } from './dynamic/view/zorro-view-tree-info/zorro-view-tree-info.component';
import { ZorroViewEditorComponent } from './dynamic/view/zorro-view-editor/zorro-view-editor.component';
import { ZorroViewInfoComponent } from './dynamic/view/zorro-view-info/zorro-view-info.component';

export enum DynamicAlias {
  //page
  SubQueryPage = 'sub-query-page',
  //view
  ZorroViewQuery = 'zorro-view-query',
  ZorroViewTable = 'zorro-view-table',
  ZorroViewMenu = 'zorro-view-menu',
  ZorroViewTree = 'zorro-view-tree',
  ZorroViewInfo = 'zorro-view-info',

  //col
  ZorroStringCol = 'zorro-col-string',

  //query
  ZorroQuerySelect = 'zorro-query-select',
  ZorroQueryInput = 'zorro-query-input',
  ZorroViewTreeInfo = 'zorro-view-tree-info',
  ZorroViewEditor = 'zorro-view-editor',
}

export let dynamicRegister = {
  //page
  'sub-query-page': SubQueryPageComponent,
  //col
  'zorro-col-string': ZorroColStringComponent,
  //view
  'zorro-view-tree': ZorroViewTreeComponent,
  'zorro-view-table': ZorroViewTableComponent,
  'zorro-view-menu': ZorroViewMenuComponent,
  'zorro-view-query': ZorroViewQueryComponent,
  //query
  'zorro-query-select': ZorroQuerySelectComponent,
  'zorro-query-input': ZorroQueryInputComponent,
  'zorro-view-tree-info': ZorroViewTreeInfoComponent,
  'zorro-view-editor': ZorroViewEditorComponent,
  'zorro-viewInfo': ZorroViewInfoComponent,
};
