import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  //valor inputavel por que quem chama o componente pode alterar o valor
  @Input()
  photoCover:string = "";

  @Input()
  cardTitle:string = "";

  @Input()
  cardDescription:string = "";

  @Input()
  Id:string = "0"

  constructor() { }

  ngOnInit(): void {
  }

}
