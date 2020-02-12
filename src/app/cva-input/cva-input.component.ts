import { Component, OnInit, Input, ChangeDetectionStrategy, EventEmitter, Output, forwardRef, Self, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';

@Component({
  selector: 'app-cva-input',
  templateUrl: './cva-input.component.html',
  styleUrls: ['./cva-input.component.css']
})
export class CvaInputComponent implements OnInit, ControlValueAccessor {

  @ViewChild('myInput', { static: true }) input: any;
  disabled: boolean;
  @Input() label: string;
  @Input() hint: string;
  @Input() placeholder: string;
  @Input() type = 'text';
  @Input() required: boolean;

   constructor(@Self() public ngControl: NgControl) {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit() {
  }

  // ControlValueAccessor - interface
  writeValue(obj: any): void {
    this.input.nativeElement.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  onChange(event) { }

  onTouched() { }

}