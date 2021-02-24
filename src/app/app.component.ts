import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  jawaban: String = "*****<br>*****<br>*****<br>*****<br>*****";

  baris = 0;
  kolom = 0;

  DONE(){
      
  }

}
