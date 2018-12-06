import { Pipe, PipeTransform } from '@angular/core';
import { Test } from './test';

@Pipe({
  name: 'typeAc'
})
export class TypeAcPipe implements PipeTransform {


  transform(value: Test[], searchBarContent?: string, param_page:number = 0): any {
    let result: Test[] = [];


    if (searchBarContent == "" || searchBarContent == undefined) {
      return value;
    } 
    else {
      let paramSplit: string[] = searchBarContent.toLowerCase().split(" ");
      let valid:boolean = false;

      // pour chaque test
      for (let i = 0; i < value.length; i++) {

        
        valid = true;

        // on teste les mots clés
        for (let j = 0; j < paramSplit.length; j++) {
      
          if( paramSplit[j] == "")
            continue;
          
          if( value[i].testString.indexOf(paramSplit[j]) == -1 ){
            valid = false;
            break;
          }
          
    
        }

        // si valid = false alors le résultat n'est pas ajouté au jeu de résultats
        if( valid == true ){
          result.push(value[i]);
        }

      }

      const start:number = param_page * 20;
      const end:number = start + 20;
     
      return result.slice( start , end );
      
    }
  }
}
