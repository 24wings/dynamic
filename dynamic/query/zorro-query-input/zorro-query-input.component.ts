import { Component, Input, Output, EventEmitter } from "@angular/core";
import { QueryDynamic, QueryViewDynamic } from "app/libs/dynamic/base/struct/IDynamic";

@Component({
    selector: "zorro-query-input",
    templateUrl: "./zorro-query-input.component.html"
})
export class ZorroQueryInputComponent {
    @Input() dynamic: QueryDynamic
    @Input() value
    @Output() valueChange = new EventEmitter();
    Filter = [];

    onChange($event) {
        this.dynamic.filter.forEach(f => f.value = this.value);
        this.valueChange.emit(Object.assign(this.dynamic.filter));
    }

} 