import { Component, Input } from "@angular/core";
import { Dynamic } from 'app/libs/dynamic/base/struct/IDynamic';

@Component({
    selector: "zorro-view-table",
    templateUrl: './zorro-view-table.component.html'
})
export class ZorroViewTableComponent {
    @Input() cols: Dynamic[] = [];
    @Input() value = {}
    loopGroup = [];

    ngOnInit() {
        this.loopGroup = new Array(Math.round(this.cols.length / 2));
    }
} 