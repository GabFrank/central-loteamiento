import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  toogleMenu = false;

  constructor() { }

  ngOnInit(): void {
  }

  whatsClick(){
    let url ="https://api.whatsapp.com/send?phone=595993332833&text=Buenas,%20me%20gustaria%20saber%20m%C3%A1s%20sobre%20los%20lotes%20del%20Loteamiento%20Central."
    window.open(url, "_blank");
  }

}
