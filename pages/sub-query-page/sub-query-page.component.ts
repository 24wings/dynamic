import { Component, Input } from "@angular/core";
import { SubQueryPageDynamic } from "../../base/struct/IDynamic";
import { Filter } from "../../base/struct/Query";

@Component({
    selector: "sub-query-page",
    templateUrl: "./sub-query-page.component.html",
    styleUrls: ["./sub-query-page.component.css"]
})
export class SubQueryPageComponent {
    @Input() dynamic: SubQueryPageDynamic;

    log($event: Filter[]) {
        console.log($event);
    }
}  