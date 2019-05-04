import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NzTreeNodeOptions, NzFormatEmitEvent } from 'ng-zorro-antd';
import { listToTree, list2Tree } from '../../../util/listToTree';

@Component({
  selector: 'zorro-tree-view',
  templateUrl: './zorro-view-tree.component.html',
})
export class ZorroViewTreeComponent {
  @Input() displayExpr;
  @Input() keyExpr;
  @Input() parentIdExpr = 'parentId';
  @Output() onClick = new EventEmitter();
  @Input() set value(val: any[]) {
    var tree = list2Tree(val, this.keyExpr, this.parentIdExpr, this.displayExpr);
    console.log(tree, val);

    this.nodes = tree;
  }
  nodes = [];

  ngOnInit(): void {}
  loadData() {}

  doClick($event) {
    this.onClick.emit($event);
  }
}
