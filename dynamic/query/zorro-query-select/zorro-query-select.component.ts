import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Dynamic, QueryDynamic } from 'app/libs/dynamic/base/struct/IDynamic';
import { Filter } from 'app/libs/dynamic/base/struct/Query';
import DataSource from 'devextreme/data/data_source';

@Component({
  selector: 'zorro-query-select',
  templateUrl: './zorro-query-select.component.html',
  styleUrls: ['./zorro-query-select.component.css'],
})
export class ZorroQuerySelectComponent {
  @Input() dynamic: QueryDynamic;
  @Input() value;
  @Output() valueChange = new EventEmitter();
  @Input() dataSource: DataSource;
  Filter: Filter[] = [];
  options: any[];
  @Input() config: any = {};
  onValueChange($event) {
    this.value = $event;
    this.dynamic.filter.forEach(f => (f.value = this.value));
    this.valueChange.emit(Object.assign(this.dynamic.filter));
  }
  async ngOnInit() {
    if (this.dataSource) {
      this.options = await this.dataSource.store().load();
      console.log(this.options);
    }
  }
}
