import { Component, OnInit } from '@angular/core';
import { DatousuarioService } from '../datousuario.service'; 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  //lista de usuarios
  Users;
  ///inicializar service 
  constructor(public api:DatousuarioService) {}
  ///Metodo de inicializacion donde obtengo los actuales usuarios al momento de carga de la pagina
  ngOnInit() {  
    this.fetchUsers();  
  }
  //funcion que hereda la funcion de el service datousuarios que contiene los Usuarioa/Albumes/Fotos
  //Funcion Obtener los Usuarios
  fetchUsers(){
    this.api.getUsers().subscribe(
      (data)=>{ this.Users=data; },
      (error)=>{ console.log(error) } 
  )};

}
