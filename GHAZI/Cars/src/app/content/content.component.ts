import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Cars: Array<{model:string,color:string,price:number,img:any}>=[
    {model:"TZ",color:"red",price:200,img:"https://cdn.pixabay.com/photo/2016/09/15/12/12/renault-clio-1671405_960_720.jpg"},
    {model:"TT",color:"white",price:300,img:"assets\img\yellow.jpg"},
    {model:"TN",color:"black",price:500,img:"assets\img\yellow.jpg"},
    {model:"TP",color:"yellow",price:700,img:"assets\img\yellow.jpg"},
];


  



}
