import { Component, Input, ViewChild, ComponentFactoryResolver, ComponentRef, ViewEncapsulation } from '@angular/core';
import { DynamicDirective } from '../dynamic-directive';
import { dynamicRegister } from './dynamic-register';
import { BasicComspce } from '../base/spec/base.spec';

@Component({
  selector: "dynamic",
  templateUrl: "./dynamic.component.html",
  styleUrls: ["./dynamic.component.css"],
  // encapsulation: ViewEncapsulation.Native
})
export class DynamicComponent {
  @Input() alias: string;
  @ViewChild(DynamicDirective) dynamic: DynamicDirective;
  @Input() value: any;

  componentRef: ComponentRef<BasicComspce<any>>
  constructor(public componentFactoryResolver: ComponentFactoryResolver) { }
  loadComponent() {
    var exsit = Object.keys(dynamicRegister).find(key => key == this.alias);
    var type = dynamicRegister[exsit];
    // if (!type) type = { type: null, component };
    if (type) {

      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(type as any);

      let viewContainerRef = this.dynamic.viewContainerRef;
      viewContainerRef.clear();
      this.componentRef = viewContainerRef.createComponent(componentFactory) as any;
      this.componentRef.instance.value = this.value;
      // this.componentRef.instance.mode = this.mode;
      // this.componentRef.instance.field = this.field;
      // this.componentRef.instance.value = this.value;
      // this.componentRef.instance.valueChange.subscribe(rt => {
      //   this.value = rt;
      //   if (rt) {
      //     // console.error(rt);
      //   }
      //   this.componentRef.instance.__value__ = rt;
      // });
      // if (type.type == RefTable || type.type == RefTablees || type.type == RefTree || type.type == RefTreees) {
      //   this.componentRef.instance.metaCom = getMetaEntity(this.field.config.databaseType);
      //   (<ComponentRef<RefTableComSpec>>(this.componentRef as any)).instance.onQuery.subscribe(rtn => this.search(rtn));
      //   if (this.componentRef.instance['onAction']) this.componentRef.instance['onAction'].subscribe(rtn => this.onAction.emit(rtn))
      // } else {
      // }
      this.componentRef.changeDetectorRef.detectChanges()
      this.componentRef.changeDetectorRef.markForCheck()
    } else {
      console.error(`there is no error`)
    }

  }
  ngAfterViewInit() {
    this.loadComponent();

  }

}

