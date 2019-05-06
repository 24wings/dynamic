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
    _value_
    doValueChange($event) {
        this.valueChange.emit({ value: this._value_, dataField: this.dynamic.dataField });
    }
    ngOnInit() {
        this._value_ = this.value[this.dynamic.dataField];
        debugger;
    }
}