import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';

const MaterialComponents = [
  MatButtonModule
]

@NgModule({
  //declarations: [],
  imports: [
    MaterialComponents
    //CommonModule
  ],
  exports: [
    MaterialComponents

  ]
})
export class MaterialModule { }
