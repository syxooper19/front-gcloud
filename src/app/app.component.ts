import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent  {

  itemsBDD : any;

  constructor (http : HttpClient){

    http.get("http://34.76.145.237:3000/personnes")
    .subscribe((data : any) =>
      {
         console.dir(data);
         this.itemsBDD = data;
         console.log(this.itemsBDD);
      },
      (error : any) =>
      {
         console.dir(error);
      });


      

  }


  title = 'front2-gcloud';


}
