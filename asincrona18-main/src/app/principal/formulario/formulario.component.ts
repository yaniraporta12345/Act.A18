import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';
import { UsersserviceService } from 'src/app/services/usersservice.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor(private userService: UsersserviceService){}
//crear objeto que se enviara a la api
valor:any;
datos:Users ={id:'',name:'',username:''};
onSubmit(){
  this.userService.postUser(this.datos).subscribe(
    (usuario:Users)=>console.log(usuario)
  );
  this.valor= this.datos;
}
  ngOnInit(): void {
  }

}
