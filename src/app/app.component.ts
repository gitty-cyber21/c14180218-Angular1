import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  output: String = "*****<br>*****<br>*****<br>*****<br>*****";
  player : String = "Player 1";

  pemenang : String;

  baris = 0;
  kolom = 0;

  DONE(){
      var pisah = this.output.split("<br>");

      var plr = this.player.split(" ");
      var player = plr[1];

      var arr = new Array();

      for(var i = 0; i < 5; i++){
        arr[i] = pisah[i].split("");
      }

      arr[this.baris - 1][this.kolom-1] = player;

      var win = "0";

      var convert = new Array()

      for(var i = 0; i < 5-1; i++){
        arr[i].push("<br>");
        convert[i] = arr[i].join("");
      }

      convert[5-1] = convert[5-1].join("");

      var outputsementara = convert.join("");
      this.output = outputsementara;

      
      

  }

}
