import { Component, Input, ViewChildren, EventEmitter, Output } from '@angular/core';
import { QueryViewDynamic } from 'app/libs/dynamic/base/struct/IDynamic';
// import { DynamicComponent } from "../../dynamic.component";
import DataSource from 'devextreme/data/data_source';
import { Filter } from 'app/libs/dynamic/base/struct/Query';
import { DynamicComponent } from '../../dynamic.component';

@Component({
  selector: 'zorro-view-query',
  templateUrl: './zorro-view-query.component.html',
})
export class ZorroViewQueryComponent {
  @Input() dynamic: QueryViewDynamic;
  // @ViewChildren(DynamicComponent) dynamicComponents: any[] = [];
  selectedValue = 'lucy';
  Filter: Filter[] = [];
  @Output() valueChange = new EventEmitter();
  @Input() dataSource: DataSource;
  ngOnInt() { }

  async handleVauleChange($event: Filter[] = []) {
    console.log($event);
    $event.forEach(e => {
      //查找是否已经存在key&condition
      var f = this.Filter.find(filter => filter.key == e.key && filter.condition == e.condition);
      // 已经 key condition
      if (f) {
        f.value = e.value;
      } else {
        this.Filter.push(e);
      }
    });
    this.Filter = this.Filter.filter(f => f.value);
    console.log(this.Filter);
    var filterConditions = this.Filter.map(f => [f.key, f.condition, f.value]);
    if (filterConditions.length == 0) {
      filterConditions = null;
    }

    // if (this.Filter.every(f => !f)) {
    //   this.dataSource.filter(filterConditions);
    // } else {
    //   this.dataSource.filter([]);
    //   //   alert('no filter');
    // }
    console.log(this.dataSource.loadOptions());
    var data = await this.dataSource.store().load({ filter: filterConditions, page: 0, pageSize: 10 });
    // console.log(this.dataSource.items());
    console.log(data);
    this.valueChange.emit(data);
  }
  async ngOnInit() {
    this.loadData();
  }

  async loadData() {
    this.dataSource = this.dataSource || this.dynamic.dataSource;
    var data = await this.dataSource.store().load();
    this.valueChange.emit(data);
  }
}
