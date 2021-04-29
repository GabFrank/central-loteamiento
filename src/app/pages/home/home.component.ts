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
    let url ="https://api.whatsapp.com/send/?phone=595983419819"
    window.open(url, "_blank");
  }

}
