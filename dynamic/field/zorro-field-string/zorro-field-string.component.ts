import { Component, Input, Output, EventEmitter } from "@angular/core";
import { DynamicField } from "app/libs/dynamic/base/struct/IDynamic";

@Component({
    selector: "zorro-field-string",
    templateUrl: './zorro-field-string.component.html',
    styleUrls: ['./zorro-field-string.component.css']
})
export class ZorroFieldStringComponent {
    // @Input() dynamic: any

    @Input() value: any;
    @Input() dynamic: DynamicField
    @Output() valueChange = new EventEmitter();
    doValueChange($event) {
        this.valueChange.emit({ value: this.value, dataField: this.dynamic.dataField });
    }
}