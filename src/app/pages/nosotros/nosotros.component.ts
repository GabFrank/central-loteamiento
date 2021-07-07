import { Component, OnInit } from '@angular/core';
import { PanZoomConfig } from 'ngx-panzoom';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  whatsClick(){
    let url1 ="https://api.whatsapp.com/send?phone=595993332833&text=Buenas,%20me%20gustaria%20saber%20m%C3%A1s%20sobre%20los%20lotes%20del%20Loteamiento%20Central."
    let url2 ="https://api.whatsapp.com/send/?phone=595983419819"
    window.open(url1, "_blank");
  }


}
