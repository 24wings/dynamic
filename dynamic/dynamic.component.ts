import {
  Component,
  Input,
  ViewChild,
  ComponentFactoryResolver,
  ComponentRef,
  ViewEncapsulation,
  Output,
  EventEmitter,
} from '@angular/core';
import { DynamicDirective } from '../dynamic-directive';
import { dynamicRegister } from '../dynamic-register';
import { BasicComspce } from '../base/spec/base.spec';
import { Dynamic } from '../base/struct/IDynamic';

@Component({
  selector: 'dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css'],
  // encapsulation: ViewEncapsulation.Native
})
export class DynamicComponent {
  @Input() alias: string;
  @ViewChild(DynamicDirective) dynamicHost: DynamicDirective;
  @Input() value: any;
  @Input() dynamic: Dynamic;
  @Output() valueChange = new EventEmitter();

  //组件引用
  public componentRef: ComponentRef<BasicComspce<any>>;
  constructor(public componentFactoryResolver: ComponentFactoryResolver) {}
  loadComponent() {
    this.alias = this.alias || this.dynamic.alias;
    var exsit = Object.keys(dynamicRegister).find(key => key == this.alias);
    var type = dynamicRegister[exsit];
    // if (!type) type = { type: null, component };
    if (type) {
      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(type as any);

      let viewContainerRef = this.dynamicHost.viewContainerRef;
      viewContainerRef.clear();
      this.componentRef = viewContainerRef.createComponent(componentFactory) as any;
      this.componentRef.instance.value = this.value;
      this.componentRef.instance.dynamic = this.dynamic;
      if (this.componentRef.instance.valueChange)
        this.componentRef.instance.valueChange!.subscribe(rtn => this.valueChange.emit(rtn));
      this.componentRef.instance.dataSource = this.dynamic.dataSource;
      this.componentRef.instance.config = this.dynamic.config;

      this.componentRef.changeDetectorRef.detectChanges();
      this.componentRef.changeDetectorRef.markForCheck();
    } else {
      console.error(`尚未注册组件:${this.alias}`);
    }
  }
  ngAfterViewInit() {
    this.loadComponent();
  }
}
