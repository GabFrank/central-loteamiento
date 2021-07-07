import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  url1 ="https://api.whatsapp.com/send?phone=595993332833&text=Buenas,%20me%20gustaria%20saber%20m%C3%A1s%20sobre%20los%20lotes%20del%20Loteamiento%20Central."
  url2 ="https://api.whatsapp.com/send?phone=595983419819&text=Buenas,%20me%20gustaria%20saber%20m%C3%A1s%20sobre%20los%20lotes%20del%20Loteamiento%20Central."
  mapsLink ="https://goo.gl/maps/5q6j2mTw3BMaA2ku7";

  constructor() { }

  ngOnInit(): void {
  }

  whatsClick(url: string){
    window.open(url, "_blank");
  }

  mapsClick(){
    window.open(this.mapsLink, "_blank");
  }
}
