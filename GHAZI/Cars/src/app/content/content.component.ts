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
    {model:"TZ200",color:"red",price:200,img:"https://cdn.pixabay.com/photo/2016/09/15/12/12/renault-clio-1671405_960_720.jpg"},
    {model:"TT100",color:"white",price:300,img:"https://cdn.pixabay.com/photo/2013/08/11/03/40/car-171422_960_720.jpg"},
    {model:"TN100",color:"black",price:500,img:"https://cdn.pixabay.com/photo/2012/11/02/13/02/car-63930_960_720.jpg"},
    {model:"TP300",color:"yellow",price:700,img:"https://cdn.pixabay.com/photo/2012/02/27/17/08/sportscar-17583_960_720.jpg"},
];


  



}
