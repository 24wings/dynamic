import { EventEmitter } from "@angular/core";

export abstract class BasicComspce<T>
// implements IFieldIO, IValueIO<T>, IValidateAblity, ITransformAblity<T> 
{
  value: T
  // field: Field;
  // __value__;
  // __field__;
  // metaCom: MetaCom
  // Types = Types;
  // valueChange = new EventEmitter();
  // ModeEnum = ModeEnum;
  // mode: ModeEnum;
  // untouch: boolean = true;
  // errMsg: string = "";
  // validStatus: ValidStatusEnum = ValidStatusEnum.warning;
  // get value() { return this.__value__; }
  // set value(val: any) {
  //   this.__value__ = val;
  //   this.valueChange.emit(val);
  //   if (this.untouch) {
  //     this.untouch = false;
  //   } else {
  //     this.validAfterValueChange()
  //   }

  // }

  // validAfterValueChange() {
  //   let result = this.validService.valid(this.__value__, this.field.valid);
  //   if (result.ok) {
  //     this.validStatus = ValidStatusEnum.success;
  //     this.errMsg = "";
  //   } else {
  //     this.validStatus = ValidStatusEnum.error;
  //     this.errMsg = result.msg;
  //   }
  // }
  // formatter = (val) => {
  //   if (val != null || val !== undefined) {
  //     if (this.field) {
  //       if (this.field.transform) {
  //         if (this.field.transform.formatter)
  //           return this.field.transform.formatter(val);
  //       }
  //     }
  //     return val;
  //   }
  // }
  // parser = (val) => {
  //   if (val != null || val !== undefined) {
  //     if (this.field) {
  //       if (this.field.transform) {
  //         if (this.field.transform.parser)
  //           return this.field.transform.parser(val);
  //       }
  //       return val;

  //     }
  //   }
  // }
  // read(val: any, field?: Field) {
  //   if (!field) {
  //     if (this.field.transform)
  //       if (this.field.transform.read) {
  //         return this.field.transform.read(val)
  //       }
  //   } else {
  //     if (field.transform)
  //       if (field.transform.read) {
  //         console.log(field, val)
  //         if (field.type == Date) val = new Date(val);

  //         return field.transform.read(val)
  //       }
  //   }
  //   return val;

  // }
  // constructor(public validService: ValidService) { }

  // getPresetCondition(): QueryCondition[] {
  //   if (this.metaCom) {
  //     if (this.metaCom.data) {
  //       if (this.metaCom.data.presetConditions) {
  //         debugger;
  //         if (typeof this.metaCom.data.presetConditions == 'function') {
  //           return (this.metaCom.data.presetConditions as QueryConditionExpress)()
  //         } else {
  //           return this.metaCom.data.presetConditions;
  //         }
  //       }
  //       return [];
  //     }
  //     return []
  //   }
  //   return [];
  // }
}