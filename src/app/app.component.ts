import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  output : String[][];
  baris: 0;
  kolom: 0;

  pemenang : String;

  

  DONE(){
     
    for(var i : number = 0; i < 5; i++) {
            for(var j : number = 0; j < 5; j++) {
                if(this.baris == i && this.baris == j){
                  this.output[i][j] = "1";
                }
                else{
                  this.output[i][j] = "*";
                }
            }
        }

      for(var i : number = 0; i < 5; i++) {
            for(var j : number = 0; j < 5; j++) {
                this.output[i][j];
            }
        }
      

  }

}
