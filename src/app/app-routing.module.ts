//######### Modules #########
import { NgModule } from '@angular/core';
import { RouterModule, Routes, ParamMap} from '@angular/router';

//######### Comopnents #########
import { SearchPageComponent } from './search-page/search-page.component';
import { NewTestComponent } from './new-test/new-test.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginComponent } from './login/login.component';
import { OngoingTestComponent } from './ongoing-test/ongoing-test.component';
import { OngoingtestresultComponent } from './ongoingtestresult/ongoingtestresult.component';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { HeaderComponent } from './header/header.component';
import { CompatResultComponent } from './compat-result/compat-result.component';
import { TopMenuBarComponent } from './top-menu-bar/top-menu-bar.component';


// Good practise : put all the components in an array of objects and refer to this array 
const approutes: Routes = [

    { path: "", redirectTo: "loginPage", pathMatch: "full" },
    { path: "appPage", component: AppComponent },
    { path: "loginPage", component: LoginComponent },
    { path: "mainPage", component: MainPageComponent },
    { path: "searchPage", component: SearchPageComponent},
     
  
      { path: "adminPage", component: AdminPageComponent },
      
    //{ path: "loginPage/:id", component: SearchPageComponent },

    //This path should always be at the end
    { path: "**", component: NotFoundComponent }
]


@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(approutes) ]
})

export class AppRoutingModule { }
/*
Variable regroupant tous les components, 
importée ensuite dans app.module.ts
*/
export const routingComponents = [
  AppComponent,
  AdminPageComponent,
  SearchPageComponent,
  OngoingTestComponent ,
  NewTestComponent ,
  LoginComponent,
  MainPageComponent,
  AdminPageComponent,
  SearchComponent,
  HeaderComponent,
  SearchResultComponent,
  OngoingtestresultComponent,
  CompatResultComponent,
  NotFoundComponent,
  TopMenuBarComponent
 ]

 
 
 
 
 
   

