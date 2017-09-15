import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'Retro Barcode Generator';
  many = [1,2,3,4,5,6,7,8,9,10];
  color = random_color;

   
}

function random_color(): string {
  var rgb = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let color = '#'  //this is what we'll return!
  for (var i = 0; i < 6; i++) {
    let x = Math.floor((Math.random() * 16))
    color += rgb[x];
  }
  return color;
};