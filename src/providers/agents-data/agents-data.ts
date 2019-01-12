import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
 import { Injectable } from '@angular/core';
 import 'rxjs/add/operator/map'

 
/*
  Generated class for the AgentsDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AgentsDataProvider {

  constructor(public http: Http) {
    console.log('Hello AgentsDataProvider Provider');
  }
  getPeople(){
    console.log(this.http.get('https://randomuser.me/api/'));
    return this.http.get('https://randomuser.me/api/')
      .map(res => res.json())
      .map(res => res.results)
    
  }
  

}
