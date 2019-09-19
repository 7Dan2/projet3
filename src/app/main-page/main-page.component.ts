import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  public isConnected:string = "" ;

/*
cette variable stocke un identifiant pour chaque catégorie de test
Chaque page appelée, renverra son nom
*/
  public tests = [
    { "id":1, "name":"Recherche de test" },
    { "id":2, "name":"Test(s) en cours" },
    { "id":3, "name":"Ajout d'un test" },
  ]

  public date = new Date;
  public mydate;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  /*onSelect(test){
  this.router.navigate(['/mainPage', test.id])
}
*/
}
