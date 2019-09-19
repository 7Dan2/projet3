import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//######### COMPONENTS #########
import { LoginComponent } from '../login/login.component';

//######### SERVICES #########
import { DateTimeService } from '../services/date-time.service';

@Component({
  selector: 'app-top-menu-bar',
  templateUrl: './top-menu-bar.component.html',
  styleUrls: ['./top-menu-bar.component.css']
})
export class TopMenuBarComponent implements OnInit {

  today = new Date();
  
  constructor( private _router: Router )
   {
    
   }

//Déconnexion
  public logOut(){
    sessionStorage.setItem("hasAccess", "false");
    //alert(`Vous avez été déconnecté.`);
    this._router.navigate(['/loginPage']);
    
  }

//Date
  ngOnInit() {
    setInterval(() => {
      this.today = new Date();
   }, 1000);
  }

}
