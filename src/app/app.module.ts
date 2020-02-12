import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { MaterialModule } from "./material.module";
import { AppComponent } from './app.component';

import { CvaInputComponent } from './cva-input/cva-input.component';
import { GenericInputComponent } from './generic-input/generic-input.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 



@NgModule({
  imports: [
    MaterialModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    
    RouterModule.forRoot([
      { path: '', component: AppComponent },
    ])
  ],
  declarations: [
    AppComponent,
    GenericInputComponent,
    CvaInputComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/