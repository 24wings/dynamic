import { Filter } from "./Query";


export class Dynamic {
    alias: string;

}

export class QueryDynamic extends Dynamic {
    label: string;
    filter?: Filter[];
}

export class QueryViewDynamic extends Dynamic {
    queryDynamics: QueryDynamic[] = []
}
export class ViewDynamic extends Dynamic {


}

export class TreeViewDynamic extends ViewDynamic {
    loadUrl: string;

}

export class TableViewDynamic extends Dynamic {

}

export class SubQueryPageDynamic extends Dynamic {
    mainQueryDynamic: QueryViewDynamic;
    mainDynamic: Dynamic | TreeViewDynamic | TableViewDynamic;
    subDynamic: Dynamic | TreeViewDynamic | TableViewDynamic

}