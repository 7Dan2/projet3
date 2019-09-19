import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import 
{
  MatButtonModule, 
  MatFormFieldModule, 
  MatInputModule,
  MatTabsModule,
  MatMenuModule,
  MatIconModule
} 
from '@angular/material';

const MaterialComponents = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatTabsModule,
  MatMenuModule,
  MatIconModule

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
