import { Component } from '@angular/core';
import { IAlumnos } from '../alumnosIr';

@Component({
  selector: 'app-iric',
  templateUrl: './iric.component.html',
  styleUrls: ['./iric.component.css']
})
export class IricComponent {
  imageWidth:number=50;
  imageMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string='';



alumnosIric: IAlumnos[]=[
  {
matricula:1234,
nombre:'Leonel',
edad:23,
correo:'leonel@gmail.com',
pago:123.4,
foto:"https://m.media-amazon.com/images/I/71-V2BFq67L.__AC_SY300_SX300_QL70_ML2_.jpg",
calif:8
},{
  matricula:1234,
  nombre:'Carlos',
  edad:23,
  correo:'leonel@gmail.com',
  pago:123.4,
  foto:"https://m.media-amazon.com/images/I/71-V2BFq67L.__AC_SY300_SX300_QL70_ML2_.jpg",
  calif:9
},{
  matricula:1234,
  nombre:'Mario',
  edad:23,
  correo:'leonel@gmail.com',
  pago:123.4,
  foto:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHIJlbKpdfpu2iqDva26mXX6do_Kc7UjKzJ7ZHMl8Rhk59D85zWQ-9MfavG-0gG0ELXeM&usqp=CAU",
  calif:10
}]


showImagen():void{
  this.muestraImg = !this.muestraImg;
}
}
