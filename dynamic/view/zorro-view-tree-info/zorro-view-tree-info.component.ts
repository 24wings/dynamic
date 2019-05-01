import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "zorro-view-tree-info",
    templateUrl: "./zorro-view-tree-info.component.html"
})
export class ZorroViewTreeInfoComponent {
    @Input() value
    @Output() valueChange = new EventEmitter();

}
