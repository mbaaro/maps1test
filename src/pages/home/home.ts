import { Component,ViewChild, ElementRef} from '@angular/core';
import { NavController } from 'ionic-angular';

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

@ViewChild('map') mapElement:ElementRef;
map:any;
  constructor(public navCtrl: NavController) {

  }
ionDidViewLoad(){
	this.loadmap();
}

loadmap(){
//set the position to centre the map
let latlng=new google.maps.LatLng(-34.9290, 138.6010);

//set the map options t determine how the map is displaye
let mapOptions={
	center:latlng,
	zoom:15,
	mapTypeId:google.maps.mapTypeId.ROADMAP
}
this.map=new google.maps.Map(this.mapElement.nativeElement,mapOptions);
}
addmarker(){
	
}
}
