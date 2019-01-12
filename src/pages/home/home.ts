import { Component } from '@angular/core';
import { NavController, Content } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { AgentsDataProvider } from '../../providers/agents-data/agents-data';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [AgentsDataProvider]

})
export class HomePage {
public people= new Array();
private detailPage;

  constructor(public navCtrl: NavController, public peopleData:AgentsDataProvider, public loadingCtr:LoadingController) {

let loader = this.loadingCtr.create({content:'Loading people'});
loader.present();

    peopleData.getPeople().subscribe(people =>
  {
console.log('people', people);
loader.dismiss();

this.people=people;
  });
  this.detailPage= DetailPage;
  }

  loadDetail(person){
     this.navCtrl.push(this.detailPage,{person:person});
  }

}
