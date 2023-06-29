import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alumno-reactive',
  templateUrl: './alumno-reactive.component.html',
  styleUrls: ['./alumno-reactive.component.css']
})
export class AlumnoReactiveComponent {
alumnoForm!:FormGroup;

constructor(private readonly fb: FormBuilder){
  this.alumnoForm=this.initForm()
}
onSubmit():void{
  //console.log('Form ->',this.alumnoForm.value)
  this.obtenerDatos();
}
obtenerDatos():void{
  const mat=this.alumnoForm.get('matricula')?.value
  console.log('matricula',mat)
  const nom=this.alumnoForm.get('nombre')?.value
  console.log('nombre',nom)
}

initForm():FormGroup{
return this.fb.group({
  matricula:['',[Validators.required,Validators.minLength(5)]],
  nombre:['',[Validators.required,Validators.minLength(5)]],
  edad:['',[Validators.required]],
  correo:['',[Validators.required]],
  foto:[''],
  calif:['',[Validators.required]],
  
})
}

}
