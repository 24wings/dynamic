import { Component, Input, Output, EventEmitter } from "@angular/core";
import DataSource from 'devextreme/data/data_source';
import { Dynamic, DynamicField } from 'app/libs/dynamic/base/struct/IDynamic';
import { NzModalService } from 'ng-zorro-antd';
@Component({
    selector: "zorro-view-tree-info",
    templateUrl: "./zorro-view-tree-info.component.html",
    styleUrls: ['./zooro-view-tree-info.component.css']
})
export class ZorroViewTreeInfoComponent {
    @Input() value = []
    @Output() valueChange = new EventEmitter();

    @Input() dynamic: { parentIdExpr: string, keyExpr: string, displayExpr, cols: Dynamic[], fields: DynamicField[] }
    @Input() dataSource: DataSource
    constructor(private modalService: NzModalService) { }
    ngOnInit() {
        this.loadTree()
    }
    selectedData;
    async loadTree() {
        this.value = await this.dataSource.store().load();
    }
    async doClick($event: { keys: string[] }) {
        var data = await this.dataSource.store().load({ filter: [this.dynamic.keyExpr, '=', $event.keys[0]] });
        this.selectedData = data[0];
        var parent = await this.dataSource.store().load({ filter: ['id', '=', this.selectedData.parentId] });
        this.selectedTreeParent = parent[0];
    }

    isVisible = false;
    showModal(): void {
        this.newTreeParam = Object.assign({}, this.selectedData);
        this.isVisible = true;
    }

    handleOk(): void {
        console.log('Button ok clicked!');
        this.isVisible = false;
        this.bottomModalVisible = false;
        this.editModalVisible = false;
    }
    bottomModalVisible = false;
    showNewBottomModal() {
        this.newChildTreeParam = Object.assign({}, this.selectedData);
        this.newChildTreeParam.parentName = this.selectedData.name;
        this.newChildTreeParam.parentId = this.selectedData.id;
        this.bottomModalVisible = true;
    }

    newTreeParam: any = {}
    newChildTreeParam: any = {}

    treeParams: any[] = []
    selectParamSubQuery = {
        alias: "sub-query-page",

        mainDynamic: {
            alias: 'zorro-view-menu'
        },
        subDynamic: {
            alias: 'zorro-view-table'
        }
    }


    async createTreeParam() {
        var data = Object.assign(this.newTreeParam);
        // data.id = Date.now();
        data.parentId = this.selectedData.parentId;
        data.id = Date.now();
        console.log(data);
        var rtn = await this.dataSource.store().insert(data);
        await this.load();
        this.isVisible = false;



    }
    async createChild() {
        var data = this.newChildTreeParam;
        data.id = Date.now();

        var rtn = await this.dataSource.store().insert(data);
        this.bottomModalVisible = false;
        this.load();
    }
    async load() {
        this.value = await this.dataSource.store().load();
        debugger;
    }
    eeParam
    selectedTreeParent: any = {}




    handleCancel(): void {
        console.log('Button cancel clicked!');
        this.isVisible = false;
        this.bottomModalVisible = false;
        this.editModalVisible = false;
    }


    editModalVisible = false;
    showEditModal() {

        this.editModalVisible = true;
    }
    showQueryView = true;
    async deleteConfirm() {
        let data = await this.modalService.confirm({
            nzTitle: '提示',
            nzContent: '确认删除这条记录吗',
            nzOkText: '确定',
            nzCancelText: '取消',
            nzOnOk: async () => {
                await this.dataSource.store().remove(this.selectedData.id);
                this.load()
            }
        }).open();

    }
    async updateTreeParam() {
        await this.dataSource.store().update(this.selectedData.id, this.selectedData);
        this.editModalVisible = false;
        this.load();
    }

}
