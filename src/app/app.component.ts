import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { BehaviorSubject } from "rxjs";


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  demoForm: FormGroup;
  constructor(
    private readonly fb: FormBuilder,
    private readonly cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.demoForm = this.fb.group({
      demoStringInput: [
        "1234",
        [Validators.required, Validators.minLength(5), Validators.maxLength(15)]
      ],
      demoStringInline: [
        "5678",
        [Validators.required, Validators.minLength(5), Validators.maxLength(15)]
      ],
      demoCVAInput: [
        "5678",
        [Validators.required, Validators.minLength(5), Validators.maxLength(15)]
      ]
    });
  }

  onSubmit(formValue){
    console.log(this.demoForm.valid);
  }

  // trick to run validation for intputs nested in components 
  updateValidation(){
    this.demoForm.markAllAsTouched();  

    Object.keys(this.demoForm.controls).forEach(key => {
      this.demoForm.controls[key].updateValueAndValidity({onlySelf: false, emitEvent: true});
    });
  }
}
