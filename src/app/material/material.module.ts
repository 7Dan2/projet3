import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import 
{ 
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';

const MaterialComponents = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule
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
