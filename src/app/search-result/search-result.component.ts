import { Component, OnInit } from '@angular/core';
import { Test } from '../test';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  dataset: Test[] = [

    // Tests Data derogation-pipe (True / False)
    { typeAC: "Flaconnette", codeG: "G553710", productName: "CORPS DEMO MASC CIL D'ENF EXTRA VOL 2015", campaignCode: "M197", franchise: "Cils d'enfer", cpDev: "", cpQCP: "Clémence GERVREAU", codeAC: 7424128738, provider: "", material: "", decoType: "", teinteMasse: "", packModel: "Démo", submitNumber: "Stock", vracName: "", vracNumber: 6890195852, formuleNumber: "LP41060 du 05/10/2016", testFamily: "Décor", test: "DEV-I-004 : Tenue des décors au produit, en semi immersion confinée", quantity: 10, start: "12/10/2016", result: "C", derogation: true, comments: "Bon déroulement du processus de test" },
    { typeAC: "Flaconnette", codeG: "G553710", productName: "CORPS DEMO MASC CIL D'ENF EXTRA VOL 2015", campaignCode: "M197", franchise: "Cils d'enfer", cpDev: "", cpQCP: "Clémence GERVREAU", codeAC: 7424128738, provider: "", material: "", decoType: "", teinteMasse: "", packModel: "Démo", submitNumber: "Stock", vracName: "", vracNumber: 6890195852, formuleNumber: "LP41060 du 05/10/2016", testFamily: "Décor", test: "DEV-I-004 : Tenue des décors au produit, en semi immersion confinée", quantity: 10, start: "12/10/2016", result: "C", derogation: false, comments: "Bon déroulement du processus de test" },

    // Tests Data tests-family-pipe ("Décor", "Compatbilité", "Fonctionnalité")
    { typeAC: "Flaconnette", codeG: "G553710", productName: "CORPS DEMO MASC CIL D'ENF EXTRA VOL 2015", campaignCode: "M197", franchise: "Cils d'enfer", cpDev: "", cpQCP: "Clémence GERVREAU", codeAC: 7424128738, provider: "", material: "", decoType: "", teinteMasse: "", packModel: "Démo", submitNumber: "Stock", vracName: "", vracNumber: 6890195852, formuleNumber: "LP41060 du 05/10/2016", testFamily: "Décor", test: "DEV-I-004 : Tenue des décors au produit, en semi immersion confinée", quantity: 10, start: "12/10/2016", result: "C", derogation: true, comments: "Bon déroulement du processus de test" },
    { typeAC: "Flaconnette", codeG: "G553710", productName: "CORPS DEMO MASC CIL D'ENF EXTRA VOL 2015", campaignCode: "M197", franchise: "Cils d'enfer", cpDev: "", cpQCP: "Clémence GERVREAU", codeAC: 7424128738, provider: "", material: "", decoType: "", teinteMasse: "", packModel: "Démo", submitNumber: "Stock", vracName: "", vracNumber: 6890195852, formuleNumber: "LP41060 du 05/10/2016", testFamily: "Fonctionnalité", test: "DEV-I-004 : Tenue des décors au produit, en semi immersion confinée", quantity: 10, start: "12/10/2016", result: "C", derogation: true, comments: "Bon déroulement du processus de test" },
    { typeAC: "Flaconnette", codeG: "G553710", productName: "CORPS DEMO MASC CIL D'ENF EXTRA VOL 2015", campaignCode: "M197", franchise: "Cils d'enfer", cpDev: "", cpQCP: "Clémence GERVREAU", codeAC: 7424128738, provider: "", material: "", decoType: "", teinteMasse: "", packModel: "Démo", submitNumber: "Stock", vracName: "", vracNumber: 6890195852, formuleNumber: "LP41060 du 05/10/2016", testFamily: "Compatibilité", test: "DEV-I-004 : Tenue des décors au produit, en semi immersion confinée", quantity: 10, start: "12/10/2016", result: "C", derogation: true, comments: "Bon déroulement du processus de test" },

    // Tests Data code-ac-pipe (Last number switching 0 & 8 for test)
    { typeAC: "Flaconnette", codeG: "G553710", productName: "CORPS DEMO MASC CIL D'ENF EXTRA VOL 2015", campaignCode: "M197", franchise: "Cils d'enfer", cpDev: "", cpQCP: "Clémence GERVREAU", codeAC: 7424128738, provider: "", material: "", decoType: "", teinteMasse: "", packModel: "Démo", submitNumber: "Stock", vracName: "", vracNumber: 6890195852, formuleNumber: "LP41060 du 05/10/2016", testFamily: "Décor", test: "DEV-I-004 : Tenue des décors au produit, en semi immersion confinée", quantity: 10, start: "12/10/2016", result: "C", derogation: false, comments: "Bon déroulement du processus de test" },
    { typeAC: "Flaconnette", codeG: "G553710", productName: "CORPS DEMO MASC CIL D'ENF EXTRA VOL 2015", campaignCode: "M197", franchise: "Cils d'enfer", cpDev: "", cpQCP: "Clémence GERVREAU", codeAC: 7424128730, provider: "", material: "", decoType: "", teinteMasse: "", packModel: "Démo", submitNumber: "Stock", vracName: "", vracNumber: 6890195852, formuleNumber: "LP41060 du 05/10/2016", testFamily: "Décor", test: "DEV-I-004 : Tenue des décors au produit, en semi immersion confinée", quantity: 10, start: "12/10/2016", result: "C", derogation: false, comments: "Bon déroulement du processus de test" },
  ];



  constructor() { }

  ngOnInit() { }

}
