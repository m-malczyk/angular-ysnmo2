import { Component, OnInit, Input, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-generic-input',
  templateUrl: './generic-input.component.html',
  styleUrls: ['./generic-input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenericInputComponent implements OnInit {

   formControl: AbstractControl;
  @Input() label: string;
  @Input() hint: string;
  @Input() placeholder: string;
  @Input() type = 'text';

  @Input() required: boolean;
  @Input() controlName: string;
  @Input() formGroup: FormGroup;


  constructor() { }


  ngOnInit() {
    this.formControl = this.formGroup.controls[this.controlName];
  }

}