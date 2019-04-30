import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Dynamic, QueryDynamic } from "app/libs/dynamic/base/struct/IDynamic";
import { Filter } from "app/libs/dynamic/base/struct/Query";

@Component({
    selector: "zorro-query-select",
    templateUrl: "./zorro-query-select.component.html",
    styleUrls: ["./zorro-query-select.component.css"]
})
export class ZorroQuerySelectComponent {
    @Input() dynamic: QueryDynamic
    @Input() value
    @Output() valueChange = new EventEmitter();
    Filter: Filter[] = []
    onValueChange($event) {
        this.value = $event;
        this.dynamic.filter.forEach(f => f.value = this.value);
        this.valueChange.emit(Object.assign(this.dynamic.filter));
    }
}    