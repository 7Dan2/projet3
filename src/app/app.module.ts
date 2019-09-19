import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { registerLocaleData } from '@angular/common';
import localeFR from '@angular/common/locales/fr';

//######### MODULES #########
import { HotTableModule } from "@handsontable/angular";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

//These components are still imported by 'routinComponents'
//######### COMPONENTS #########

// import { LoginComponent } from './login/login.component';
// import { AdminPageComponent } from './admin-page/admin-page.component';
// import { SearchComponent } from './search/search.component';
// import { HeaderComponent } from './header/header.component';
// import { SearchResultComponent } from './search-result/search-result.component';
// import { SearchPageComponent } from './search-page/search-page.component';
// import { OngoingTestComponent } from './ongoing-test/ongoing-test.component';
// import { OngoingtestresultComponent } from './ongoingtestresult/ongoingtestresult.component';
// import { NotFoundComponent } from './not-found/not-found.component';
// import { MainPageComponent } from './main-page/main-page.component';
// import { AppComponent } from './app.component';
// import { NewTestComponent } from './new-test/new-test.component';
// import { CompatResultComponent } from './compat-result/compat-result.component';
// import { TopMenuBarComponent } from './top-menu-bar/top-mmenu-bar.component';

// ######### PIPES #########
import { TypeAcPipe } from './pipes/type-ac.pipe';
import { FranchisePipe } from './pipes/franchise.pipe';
import { CpqcpPipe } from './pipes/cpqcp.pipe';
import { FournisseurPipe } from './pipes/fournisseur.pipe';
import { MateriauPipe } from './pipes/materiau.pipe';
import { DecorTypePipe } from './pipes/decor-type.pipe';
import { PackModelPipe } from './pipes/pack-model.pipe';
import { VracNamePipe } from './pipes/vrac-name.pipe';
import { VracNumberPipe } from './pipes/vrac-number.pipe';
import { TestPipe } from './pipes/test.pipe';
import { DerogationPipe } from './pipes/derogation.pipe';
import { TestFamilyPipe } from './pipes/test-family.pipe';
import { CodeACPipe } from './pipes/code-ac.pipe';
import { CodeGPipe } from './pipes/code-g.pipe';
import { ProductNamePipe } from './pipes/product-name.pipe';
import { CampaignCodePipe } from './pipes/campaign-code.pipe';
import { CampaignNamePipe } from './pipes/campaign-name.pipe';
import { TriCompatPipe } from './pipes/tri-compat.pipe';
import { AscendRiskCompatPipe } from './pipes/ascend-risk-compat.pipe';
import { ResultPipe } from './pipes/result.pipe';
import { StartDatePipe } from './pipes/start-date.pipe';
import { EndDatePipe } from './pipes/end-date.pipe';
import { ColorMatPremPipe } from './pipes/color-mat-prem.pipe';
import { RealTypeAcPipe } from './pipes/real-type-ac.pipe';
import { UserService } from './services/user.service';
import { VerticalCompatPipe } from './pipes/vertical-compat.pipe';
import { RemoveTwinsPipe } from './pipes/remove-twins.pipe';
import { SelectAttributesPipe } from './pipes/select-attributes.pipe';

//######### SERVICES #########
import { BigService } from './services/big.service';
import { CompatService } from "./services/compat.service";
import { AuthenticationService } from "./services/authentication.service";

/*const appRoutes: Routes =
  [
    { path: "", redirectTo: "loginPage", pathMatch: "full" },
    { path: "searchPage", component: SearchPageComponent },
    { path: "ongoingtestPage", component: OngoingTestComponent },
    { path: "newtestPage", component: NewTestComponent },
    { path: "loginPage", component: LoginComponent },
    { path: "mainPage", component: MainPageComponent },
    { path: "adminPage", component: AdminPageComponent },

    { path: "**", component: NotFoundComponent }
  ]
*/
@NgModule({
  declarations: [
    routingComponents,
    // AppComponent,
    // AdminPageComponent,
    // LoginComponent,
    // MainPageComponent,
    // SearchComponent,
    // HeaderComponent,
    // SearchResultComponent,
    // SearchPageComponent,
    // OngoingtestresultComponent,
    // OngoingTestComponent,
    // NewTestComponent,
    // NotFoundComponent,
    DerogationPipe,
    TestFamilyPipe,
    CodeACPipe,
    TypeAcPipe,
    FranchisePipe,
    CpqcpPipe,
    FournisseurPipe,
    MateriauPipe,
    DecorTypePipe,
    PackModelPipe,
    VracNamePipe,
    VracNumberPipe,
    TestPipe,
    CodeGPipe,
    ProductNamePipe,
    CampaignCodePipe,
    CampaignNamePipe,
    TriCompatPipe,
    AscendRiskCompatPipe,
    ResultPipe,
    StartDatePipe,
    EndDatePipe,
    ColorMatPremPipe,
    RealTypeAcPipe,
    VerticalCompatPipe,
    RemoveTwinsPipe,
    SelectAttributesPipe
    
  ],
  imports: [
    BrowserModule,
    HotTableModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [ BigService, CompatService, HttpClientModule, UserService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
