import { Filter } from './Query';
import DataSource from 'devextreme/data/data_source';

export class Dynamic {
  alias: string;
  dataSource?: DataSource;
  config?;
}

export class QueryDynamic extends Dynamic {
  label: string;
  filter?: Filter[];
  dataSource?: DataSource;
}

export class QueryViewDynamic extends Dynamic {
  queryDynamics: QueryDynamic[] = [];
}
export class ViewDynamic extends Dynamic {}

export class TreeViewDynamic extends ViewDynamic {
  loadUrl: string;
}

export class TableViewDynamic extends Dynamic {}

export class SubQueryPageDynamic extends Dynamic {
  mainQueryDynamic: QueryViewDynamic;
  mainDynamic: Dynamic | TreeViewDynamic | TableViewDynamic;
  subDynamic: Dynamic | TreeViewDynamic | TableViewDynamic;
}
