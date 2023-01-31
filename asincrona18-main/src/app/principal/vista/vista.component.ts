import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';
import { UsersserviceService } from 'src/app/services/usersservice.service';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit {
  //consumir servicio (userservices)
  //crear instancia services


  constructor(private userService:UsersserviceService) { }
  //ejecutar el metodo getUserAll() del servicio al cargfar el componente
  listado = new Array();
  ngOnInit(): void {
    //ejecutar el metodo getUserAll() y recuperar json devuelto por la api
    this.userService.getUsersAll().subscribe({
        next:(UserAll:Users[])=>this.listado = UserAll,
        error:(e)=>console.error(e),
        complete:()=>console.info("Api debolvio todos los registros")
    });

    //ejecutar el metodo getUserAllInterceptor
    // this.userService.getUsersAllInterceptor().subscribe({
    //   next:(response:any)=>{this.listado = response.body;console.log(response)},
    //   error:(e)=>console.error(e),
    //   complete:()=>console.info("Api debolvio todos los registros")
    // });
  }

}
