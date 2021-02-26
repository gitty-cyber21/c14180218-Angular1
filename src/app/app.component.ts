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
  input : String;

  pemenang : String;

  

  DONE(){
      var pisah = this.output.split("<br>");

      var win = "0";

      var convert = new Array()

      var inputsplit = this.input.split(",")
      var bar = parseInt(inputsplit[0]);
      var kol = parseInt(inputsplit[1]);

      var plr = this.player.split(" ");
      var player = plr[1];

      var arr = new Array();

      for(var i = 0; i < 5; i++){
        arr[i] = pisah[i].split("");
      }

      arr[bar - 1][kol-1] = player;


      for(var i = 0; i < 5-1; i++){
        arr[i].push("<br>");
        convert[i] = arr[i].join("");
      }

      convert[5-1] = convert[5-1].join("");

      var outputsementara = convert.join("");
      this.output = outputsementara;

      
      

  }

}
