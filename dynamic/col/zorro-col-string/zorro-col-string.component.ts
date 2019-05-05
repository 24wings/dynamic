import { Component, ViewEncapsulation, Input } from '@angular/core';
import { BasicComspce } from 'app/libs/dynamic/base/spec/base.spec';

@Component({
  selector: "zorro-col-string",
  templateUrl: "./zorro-col-string.component.html",
  // encapsulation: ViewEncapsulation.Native
})
export class ZorroColStringComponent extends BasicComspce<string>{
  @Input() value = '';
}     