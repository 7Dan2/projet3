import { Component, OnInit, Input } from '@angular/core';
import { Test } from '../test';
import { BigService } from '../big.service';
import * as Handsontable from "handsontable";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  // Variables from filters & searchBar
  @Input() public searchBarContent: string = "";
  @Input() public material: string = "";
  @Input() public codeG: string = "";
  @Input() public typeDecor: string = "";
  @Input() public vracNumber: string = "";
  @Input() public testType: string = "";
  @Input() public result: string = "";
  @Input() public startDate: string;
  @Input() public endDate: string;
  @Input() public page:number = 0;
  
  
  private bigService:BigService;
  public dataset:Test[] = [];
 
  // Variables for update a test

  public tmpTest = new Test();

  // Variable for calling & displaying the test & modif or delete it 
  
  public IdTestToModifOrDelete: number = 0;
  public testToModifOrDelete: Test;

  closeResult: string;

  constructor(service: BigService, private modalService: NgbModal) {
    this.bigService = service;
  }

  ngOnInit() {
    this.bigService.getBigData().subscribe(
      (param) => {
        this.dataset = param;
      }
    )
  }

  // CRUD methods 

  public callTestToModifOrDelete(testid: number) {
    this.bigService.getTest(testid).subscribe((param) => { this.testToModifOrDelete = param })
  }

  public deleteTest() {
    this.bigService.deleteTestFromDB(this.IdTestToModifOrDelete).subscribe();
    console.log(`Le test ${this.IdTestToModifOrDelete} a bien été supprimé ! `)
  }

  public updateTest() {
    this.bigService.updateTestFromDB(this.IdTestToModifOrDelete, this.tmpTest).subscribe();
    console.log(`Le test ${this.IdTestToModifOrDelete} a bien été updaté ! `)
    this.tmpTest = new Test();

  }

  // Modal Opening Fuction

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true, size: "lg" });
    console.log(this.IdTestToModifOrDelete);
  }
}





