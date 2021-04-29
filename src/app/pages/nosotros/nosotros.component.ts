import { Component, OnInit } from '@angular/core';

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
    let url ="https://api.whatsapp.com/send/?phone=595983419819"
    window.open(url, "_blank");
  }


}
