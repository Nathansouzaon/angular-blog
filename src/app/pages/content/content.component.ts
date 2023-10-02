import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string = "";
  contentTitle:string = "";
  contentDescription:string = "";
  private id:string | null = "0";

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    //recuperando o parametro que vem da url
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    //filtrando procurando um artigo onde o id do artigo seja igual ao id que to passando
    const result = dataFake.filter(article => article.id == id)[0]

    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.photoCover = result.photoCover;

  }



}
