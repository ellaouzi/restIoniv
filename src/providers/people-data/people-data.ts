import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

/*
  Generated class for the PeopleDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PeopleData {

  constructor(public http: Http) {
    console.log('Hello PeopleDataProvider Provider');
  }

  getPeople(){
    return this.http.get('https://randomuser.me/api/')
      .map(res => res.json())
      .map(res => res.results)
    
  }

}
