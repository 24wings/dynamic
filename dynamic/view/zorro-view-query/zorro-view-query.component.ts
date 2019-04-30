import { Component, Input, ViewChildren, EventEmitter } from "@angular/core";
import { QueryViewDynamic } from "app/libs/dynamic/base/struct/IDynamic";
// import { DynamicComponent } from "../../dynamic.component";
import { Filter } from "app/libs/dynamic/base/struct/Query";
import { DynamicComponent } from "../../dynamic.component";

@Component({
    selector: "zorro-view-query",
    templateUrl: "./zorro-view-query.component.html"
})
export class ZorroViewQueryComponent {
    @Input() dynamic: QueryViewDynamic
    // @ViewChildren(DynamicComponent) dynamicComponents: any[] = [];
    selectedValue = 'lucy';
    Filter: Filter[] = [];
    valueChange = new EventEmitter();

    ngOnInt() {

    }

    handleVauleChange($event: Filter[] = []) {
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

        this.valueChange.emit(this.Filter);
    }





}
