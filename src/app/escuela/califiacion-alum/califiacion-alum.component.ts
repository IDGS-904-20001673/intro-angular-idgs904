import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-califiacion-alum',
  templateUrl: './califiacion-alum.component.html',
  styleUrls: ['./califiacion-alum.component.css']
})
export class CalifiacionAlumComponent {
@Input() califica!:number;
//starWidth!:number;

@Output() calificaClick:EventEmitter<string>=new EventEmitter();

puntosCal!:number;

ngOnChanges():void{
  this.puntosCal=this.califica*76/10;
}
onClick(){
  this.calificaClick.emit(`${this.califica}`)
}
}
