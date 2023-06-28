import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-califiacion-alum',
  templateUrl: './califiacion-alum.component.html',
  styleUrls: ['./califiacion-alum.component.css']
})
export class CalifiacionAlumComponent {
@Input()
califica!:number;
starWidth!:number;

ngOnChange():void{
  this.starWidth=this.califica*76/10;
}
}
