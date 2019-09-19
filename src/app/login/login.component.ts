import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { BigService } from '../services/big.service';
import { User } from '../user';
import { Admin } from '../admin';
import { MaterialModule } from '../material/material.module';
import { NavigationEnd } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userLog: User = new User();
  
  public tmpUser: User;
  
  public displayWrongConnectionMessage: boolean = false;
  //public displaySuccessConnectionMessage: boolean = false;

  constructor(
    private router: Router)
    {
      if (sessionStorage.getItem("hasAccess") == "true")
      {
      this.router.navigate(['/mainPage']);
      }
      if (sessionStorage.getItem("hasAccess") == "false")
      {
      this.router.navigate(['/loginPage']);
      }
    }

  ngOnInit() {
   /*if(sessionStorage.getItem("hasAccess") == "true"){
      this.displaySuccessConnectionMessage = true;
      setTimeout(() => {
        this.displaySuccessConnectionMessage = false;
      }, 3000);
      
    }*/
  }


  public loginCheck() {
    if (this.userLog.identifiant == "guerlainhomolog" && this.userLog.password == "jetravaillechezguerlain")
    {
      sessionStorage.setItem("hasAccess", "true");
      //this.router.navigate['/mainPage'];
      
    }
    else 
    {
      sessionStorage.setItem("hasAccess", "false");
      this.displayWrongConnectionMessage = true;
      setTimeout(() => {
        this.displayWrongConnectionMessage = false;
      }, 3000);
    }

    if(sessionStorage.getItem("hasAccess") == "true"){
      //Pas compris à ce stade à quoi servait de recharger la page
      location.reload();
      
    }
    
  }

/*public adminCheck(){
  if (this.adminLog.identifiant == "guerlainadmin" && this.adminLog.password == "jecroistravaillechezguerlain")
  {
    sessionStorage.setItem("hasSpecialAccess", "true");
    this.displaySuccessAdminConnectionMessage = true;
    setTimeout(() => {
      this.displaySuccessAdminConnectionMessage = false;
    }, 3000);
  }

  else 
  {
    sessionStorage.setItem("hasSpecialAccess", "false");
    this.displayWrongAdminConnectionMessage = true;
    setTimeout(() => {
      this.displayWrongAdminConnectionMessage = false;
    }, 3000);
  }

}  */


}