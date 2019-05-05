import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Dynamic, DynamicField } from 'app/libs/dynamic/base/struct/IDynamic';

@Component({
    selector: 'zorro-view-editor',
    templateUrl: './zorro-view-editor.component.html',
    styleUrls: ['./zorro-view-editor.component.css']
})
export class ZorroViewEditorComponent {
    @Input() dynamic
    @Input() fields: DynamicField[];

    @Input() value: any
    @Output() valueChange = new EventEmitter();

    doValueChange() {
        // this.valueChange.emit(this.value);
    }
    getValue(opt: { value: any, dataField }) {
        return this.value[opt.dataField] = opt.value[opt.dataField];
    }
}
